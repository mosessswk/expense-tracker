const express = require("express");
const path = require("path");
const router = express.Router();
const { extractJsonFile, saveJsonFile } = require("../utils/utilities");
const expensesFilePath = path.join(__dirname, "../../files/expenses.json")

router.get("/", async (req, res) => {
    const expenses = await extractJsonFile(expensesFilePath);
    res.json(expenses);
});

router.get("/:id", async (req, res) => {
    const targetId = Number(req.params.id);
    const expenses = await extractJsonFile(expensesFilePath);
    const expense = expenses.find(item => item.id === targetId);
    res.json(expense);
});

router.post("/", async (req, res) => {
    const expenses = await extractJsonFile(expensesFilePath);
    const newExpense = {
        ...req.body,
        "id": expenses.at(-1).id + 1
    }
    expenses.push(newExpense);
    await saveJsonFile(expensesFilePath, expenses);
    res.json({
        "message": "Expense created successfully!",
        "expense": newExpense
    })
});

module.exports = router;