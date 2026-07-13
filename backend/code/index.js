const express = require("express");
const path = require("path");
const fs = require("fs").promises;
const app = express();
const port = 3000;
const expensesFilePath = path.join(__dirname, "../files/expenses.json")

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        "message":"Expense Tracker Backend Running"
    })
});

app.get("/expenses", async (req, res) => {
    const expenses = JSON.parse(await fs.readFile(expensesFilePath, "utf-8"));
    res.json(expenses);
});

app.get("/expenses/:id", async (req, res) => {
    const targetId = Number(req.params.id);
    const expenses = JSON.parse(await fs.readFile(expensesFilePath, "utf-8"));
    const expense = expenses.find(item => item.id === targetId);
    res.json(expense);
});

app.post("/expenses", async (req, res) => {
    const expenses = JSON.parse(await fs.readFile(expensesFilePath, "utf-8"));
    const newExpense = req.body;
    newExpense.id = expenses.at(-1).id + 1;
    expenses.push(newExpense);
    await fs.writeFile(expensesFilePath, JSON.stringify(expenses, null, 2));
    res.json({
        "message": "Expense created successfully!",
        "expense": newExpense
    })
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});