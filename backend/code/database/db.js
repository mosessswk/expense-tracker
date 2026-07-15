const { Pool } = require("pg");
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME
});

async function getAllExpenses() {
    const query = "SELECT * FROM expenses ORDER BY id";
    const result = await pool.query(query);
    return result.rows;
}

async function getExpense(id) {
    const query = "SELECT * FROM expenses WHERE id = $1";
    const values = [id];
    const result = await pool.query(query, values);
    if (result.rowCount === 0) {
        const err = new Error("Expense non found");
        err.status = 404;
        throw err;
    }
    return result.rows[0];
}

async function insertExpense(expense) {
    const query = "INSERT INTO expenses (title, amount, category, date, description) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [expense.title, expense.amount, expense.category, expense.date, expense.description];
    const result = await pool.query(query, values);
    return result.rows[0];
}

async function updateExpense(id, expense) {
    const query = "UPDATE expenses SET title = $2, amount = $3, category = $4, date = $5, description = $6 WHERE id = $1 RETURNING *";
    const values = [id, expense.title, expense.amount, expense.category, expense.date, expense.description];
    const result = await pool.query(query, values);
    if (result.rowCount === 0) {
        const err = new Error("Expense not found");
        err.status = 404;
        throw err;
    }
    return result.rows[0];
}

async function deleteExpense(id) {
    const query = "DELETE FROM expenses WHERE id = $1";
    const values = [id];
    const result = await pool.query(query, values);
    if (result.rowCount === 0) {
        const err = new Error("Expense not found");
        err.status = 404;
        throw err;
    }
    return;
}

module.exports = {
    getAllExpenses,
    getExpense,
    insertExpense,
    updateExpense,
    deleteExpense
}