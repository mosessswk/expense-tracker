const { isPositiveInt } = require("../utils/utils");

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

function errorHandler(err, req, res, next) {
    const status = err.status ?? 500;
    const message = err.message;
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
    errorHandler
}