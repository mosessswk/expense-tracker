const express = require("express");
const router = express.Router();
const { getAllExpenses, getExpense, insertExpense, updateExpense } = require("../database/db")

router.get("/", async (req, res) => {
    const expenses = await getAllExpenses();
    res.json(expenses);
});

router.get("/:id", async (req, res) => {
    const expense = await getExpense(req.params.id);
    res.json(expense);
});

router.post("/", async (req, res) => {
    const expense = await insertExpense(req.body);
    res.json({
        "message": "Expense created successfully!",
        "expense": expense
    })
});

router.put("/:id", async (req, res) => {
    const expense = await updateExpense(req.params.id, req.body);
    console.log(expense);
    res.json({
        "message": "Expense updated successfully!",
        "expense": expense
    })
})

module.exports = router;