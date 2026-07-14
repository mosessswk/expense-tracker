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
// insertExpense({"title": "test", "amount": 0, "category": "test", "date": "2026-07-15", "description": "just testing"});

module.exports = {
    getAllExpenses,
    getExpense,
    insertExpense
}