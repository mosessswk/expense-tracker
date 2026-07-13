const express = require("express");
const path = require("path");
const fs = require("fs").promises;
const app = express();
const port = 3000;
const expensesFile = path.join(__dirname, "../files/expenses.json")

app.get("/", (req, res) => {
    res.json({
        "message":"Expense Tracker Backend Running"
    })
});

app.get("/expenses", (req, res) => {
    res.sendFile(expensesFile);
});

app.get("/expenses/:id", async (req, res) => {
    const targetId = Number(req.params.id);
    const expenses = JSON.parse(await fs.readFile(expensesFile, "utf-8"));
    const expense = expenses.find(item => item.id === targetId);
    res.json(expense);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});