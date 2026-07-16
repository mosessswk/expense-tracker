const express = require("express");
const router = express.Router();
const { getAllExpenses, getExpense, insertExpense, updateExpense, deleteExpense } = require("../database/db");
const { validateId } = require("../middleware/middleware");

router.get("/", async (req, res) => {
    const expenses = await getAllExpenses();
    res.status(200).json(expenses);
});

router.get("/:id", validateId, async (req, res) => {
    const expense = await getExpense(req.params.id);
    res.status(200).json(expense);
});

router.post("/", async (req, res) => {
    if (req.body.title === undefined || req.body.amount === undefined || req.body.category === undefined || req.body.date === undefined) {
        return res.status(400).json({
            error: "Expense information incomplete"
        });
    }
    const expense = await insertExpense(req.body);
    res.status(201).json({
        message: "Expense created successfully!",
        expense: expense
    });
});

router.put("/:id", validateId, async (req, res) => {
    if (req.body.id === undefined || req.body.title === undefined || req.body.amount === undefined || req.body.category === undefined || req.body.date === undefined) {
        return res.status(400).json({
            error: "Expense information incomplete"
        });
    }
    if (req.params.id !== req.body.id) {
        return res.status(400).json({
            error: "ID in URL and request body do not match"
        });
    }
    const expense = await updateExpense(req.params.id, req.body);
    res.status(200).json({
        message: "Expense updated successfully!",
        expense: expense
    });
})

router.delete("/:id", validateId, async (req, res) => {
    await deleteExpense(req.params.id);
    res.status(204).end();
})

module.exports = router;