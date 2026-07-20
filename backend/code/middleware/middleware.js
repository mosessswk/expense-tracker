const bcrypt = require("bcrypt");
const { isPositiveInt, isNonEmptyString, isAmount, isDate } = require("../utils/utils");
const { getUserForAuthentication } = require("../database/db");

function requestLogger(req, res, next) {
    console.log(new Date().toISOString(), req.method, req.originalUrl);
    next();
}

function responseTimeLogger(req, res, next) {
    const start = Date.now();
    res.on("finish", () => {
        const end = Date.now();
        console.log(req.method, req.originalUrl, end - start, "ms");
    })
    next();
}

function validateId(req, res, next) {
    if (!isPositiveInt(req.params.id)) {
        return res.status(400).json({
            error: "ID invalid"
        });
    }
    req.params.id = Number(req.params.id);
    next();
}

function validateExpense(expense) {
    if (!isNonEmptyString(expense?.title)) return {error: "Title invalid"};
    if ((!isAmount(expense?.amount) || typeof expense?.amount !== "number") || Number(expense.amount) < 0 || Number(expense.amount) >= 1e10) return {error: "Amount invalid"};
    if (!isNonEmptyString(expense?.category)) return {error: "Category invalid"};
    if (!isDate(expense?.date)) return {error: "Date invalid"};
    if (expense?.description !== undefined && typeof expense.description !== "string") return {error: "Description invalid"};
    
    return {
        title: expense.title.trim(),
        amount: Number(expense.amount),
        category: expense.category.trim(),
        date: expense.date,
        description: expense.description?.trim().length ? expense.description.trim() : null
    };
}

function validateCreateExpense(req, res, next) {
    req.body = validateExpense(req.body);
    if (req.body.error) {
        return res.status(400).json({
            error: req.body.error
        })
    }
    next();
}

function validateUpdateExpense(req, res, next) {
    if (isPositiveInt(req.body?.id)) req.body.id = Number(req.body.id);
    if (req.params.id !== req.body?.id) {
        return res.status(400).json({
            error: "ID in URL and request body do not match"
        });
    }
    req.body = validateExpense(req.body);
    req.body.id = Number(req.params.id);
    if (req.body.error) {
        return res.status(400).json({
            error: req.body.error
        });
    }
    next();
}

function validateUser(user) {
    if (!isNonEmptyString(user.username)) return {error: "Username invalid"};
    if (!isNonEmptyString(user.password)) return {error: "Password invalid"};
    if (user?.display_name !== undefined && typeof user.display_name !== "string") return {error: "Display name invalid"};

    return {
        username: user.username.trim(),
        password: user.password,
        display_name: user.display_name?.trim().length ? user.display_name.trim() : null
    };
}

 function validateCreateUser(req, res, next) {
    req.body = validateUser(req.body);
    if (req.body.error) {
        return res.status(400).json({
            error: req.body.error
        });
    }
    next();
}

async function hashPassword(req, res, next) {
    const saltRounds = 10;
    req.body.password_hash = await bcrypt.hash(req.body.password, saltRounds);
    delete req.body.password;
    next();
}

async function validateLogin(req, res, next) {
    if (!isNonEmptyString(req.body.username) || !isNonEmptyString(req.body.password)) {
        return res.status(401).json({
            error: "Username or password invalid"
        })
    }
    next();
}

async function authenticateUser(req, res, next) {
    const user = await getUserForAuthentication(req.body.username);
    if (!user) {
        return res.status(401).json({
            error: "Username or password invalid"
        });
    }
    const authorised = await bcrypt.compare(req.body.password, user.password_hash);
    delete user.password_hash;
    if (!authorised) {
        return res.status(401).json({
            error: "Username or password invalid"
        })
    }
    req.user = user;
    next();
}

function tempApplyUser(req, res, next) {
    req.user = {
        id: 8,
        username: "alice123"
    };
    next();
}

function errorHandler(err, req, res, next) {
    const status = err.status ?? 500;
    let message = err.message;
    if (status === 500) {
        console.error(err);
        message = "Internal server error";
    }
    res.status(status).json({
        error: message
    })
}

module.exports = {
    requestLogger,
    responseTimeLogger,
    validateId,
    validateCreateExpense,
    validateUpdateExpense,
    validateCreateUser, 
    hashPassword, 
    validateLogin, 
    authenticateUser, 
    tempApplyUser, 
    errorHandler
}