const { Pool } = require("pg");
const pool = new Pool({
    user: "Moses",
    host: "localhost",
    database: "expense_tracker"
});

async function testDatabase() {
    const result = await pool.query("SELECT NOW()");
    console.log(result.rows);
}

// testDatabase();

async function getAllExpenses() {
    const result = await pool.query("SELECT * FROM expenses ORDER BY id");
    return result.rows;
}

async function getExpense(id) {
    const result = await pool.query("SELECT * FROM expenses WHERE id = $1", [id]);
    return result.rows[0];
}

async function insertExpense(expense) {
    const result = await pool.query("INSERT INTO expenses (title, amount, category, date, description) VALUES ($1, $2, $3, $4, $5) RETURNING *", [expense.title, expense.amount, expense.category, expense.date, expense.description]);
    return result.rows[0];
}

async function updateExpense(id, expense) {
    const result = await pool.query("UPDATE expenses SET title = $2, amount = $3, category = $4, date = $5, description = $6 WHERE id = $1 RETURNING *", [id, expense.title, expense.amount, expense.category, expense.date, expense.description]);
    return result.rows[0];
}

module.exports = {
    getAllExpenses,
    getExpense,
    insertExpense,
    updateExpense
}