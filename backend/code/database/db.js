const { Pool } = require("pg");
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME
});

async function getAllExpenses(ownerId) {
    const query = "SELECT * FROM expenses WHERE owner_id = $1 ORDER BY id";
    const values = [ownerId];
    const result = await pool.query(query, values);
    return result.rows;
}

async function getExpense(id, ownerId) {
    const query = "SELECT * FROM expenses WHERE id = $1 AND owner_id = $2";
    const values = [id, ownerId];
    const result = await pool.query(query, values);
    if (result.rowCount === 0) {
        const err = new Error("Expense non found");
        err.status = 404;
        throw err;
    }
    return result.rows[0];
}

async function insertExpense(expense, ownerId) {
    const query = "INSERT INTO expenses (title, amount, category, date, description, owner_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
    const values = [expense.title, expense.amount, expense.category, expense.date, expense.description, ownerId];
    const result = await pool.query(query, values);
    return result.rows[0];
}

async function updateExpense(id, expense, ownerId) {
    const query = "UPDATE expenses SET title = $2, amount = $3, category = $4, date = $5, description = $6 WHERE id = $1 AND owner_id = $7 RETURNING *";
    const values = [id, expense.title, expense.amount, expense.category, expense.date, expense.description, ownerId];
    const result = await pool.query(query, values);
    if (result.rowCount === 0) {
        const err = new Error("Expense not found");
        err.status = 404;
        throw err;
    }
    return result.rows[0];
}

async function deleteExpense(id, ownerId) {
    const query = "DELETE FROM expenses WHERE id = $1 AND owner_id = $2";
    const values = [id, ownerId];
    const result = await pool.query(query, values);
    if (result.rowCount === 0) {
        const err = new Error("Expense not found");
        err.status = 404;
        throw err;
    }
    return;
}

async function insertUser(user) {
    const query = "INSERT INTO users (username, password_hash, display_name) VALUES ($1, $2, $3) RETURNING id, username, display_name";
    const values = [user.username, user.password_hash, user.display_name];
    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            const err = new Error("Username already exists");
            err.status = 409;
            throw err;
        } 
        throw error;
    }
}

async function getUserById(id) {
    const query = "SELECT id, username, display_name FROM users WHERE id = $1";
    const values = [id];
    const result = await pool.query(query, values);
    if (result.rowCount === 0) {
        const err = new Error("User not found");
        err.status = 404;
        throw err;
    }
    return result.rows[0];
}

async function getUserByUsername(username) {
    const query = "SELECT id, username, display_name FROM users WHERE username = $1";
    const values = [username];
    const result = await pool.query(query, values);
    if (result.rowCount === 0) {
        const err = new Error("User not found");
        err.status = 404;
        throw err;
    }
    return result.rows[0];
}

async function getUserForAuthentication(username) {
    const query = "SELECT * FROM users WHERE username = $1";
    const values = [username];
    const result = await pool.query(query, values);
    if (result.rowCount === 0) {
        const err = new Error("Username or password invalid");
        err.status = 401;
        throw err;
    }
    return result.rows[0];
}

module.exports = {
    getAllExpenses,
    getExpense,
    insertExpense,
    updateExpense,
    deleteExpense, 
    insertUser, 
    getUserById,
    getUserByUsername, 
    getUserForAuthentication
}