const express = require("express");
const router = express.Router();
const { getAllExpenses, getExpense, insertExpense, updateExpense } = require("../database/db");
const { isPositiveInt } = require("../utils/utils");

router.get("/", async (req, res) => {
    try {
        const expenses = await getAllExpenses();
        res.status(200).json(expenses);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Internal server error"
        });
    }
});

router.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    if (!isPositiveInt(req.params.id)) {
        return res.status(400).json({
            error: "ID invalid"
        });
    }
    try {
        const expense = await getExpense(id);
        res.status(200).json(expense);
    } catch (err) {
        if (err.status === 404) {
            res.status(404).json({
                error: "Expense not found"
            });
        } else {
            console.error(err);
            res.status(500).json({
                error: "Internal server error"
            });
        }
    }
});

router.post("/", async (req, res) => {
    if (req.body.title === undefined || req.body.amount === undefined || req.body.category === undefined || req.body.date === undefined) {
        return res.status(400).json({
            error: "Expense information incomplete"
        });
    }
    try {
        const expense = await insertExpense(req.body);
        res.status(201).json({
            message: "Expense created successfully!",
            expense: expense
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            error: "Internal server error"
        });
    }
});

router.put("/:id", async (req, res) => {
    if (req.body.id === undefined || req.body.title === undefined || req.body.amount === undefined || req.body.category === undefined || req.body.date === undefined) {
        return res.status(400).json({
            error: "Expense information incomplete"
        });
    }
    if (!isPositiveInt(req.params.id)) {
        return res.status(400).json({
            error: "ID invalid"
        });
    }
    const id = parseInt(req.params.id);
    if (id !== req.body.id) {
        return res.status(400).json({
            error: "ID in URL and request body do not match"
        });
    }
    try {
        const expense = await updateExpense(req.params.id, req.body);
        res.status(200).json({
            message: "Expense updated successfully!",
            expense: expense
        });
    } catch (err) {
        if (err.status === 404) {
            res.status(404).json({
                error: "Expense not found"
            });
        } else {
            console.error(err);
            res.status(500).json({
                error: "Internal server error"
            });
        }
    }
    
})

module.exports = router;