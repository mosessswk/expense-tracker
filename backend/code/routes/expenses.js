const express = require("express");
const router = express.Router();
const { getAllExpenses, getExpense, insertExpense, updateExpense, deleteExpense } = require("../database/db");
const { validateId, validateCreateExpense, validateUpdateExpense } = require("../middleware/middleware");

router.get("/", async (req, res) => {
    const expenses = await getAllExpenses();
    res.status(200).json(expenses);
});

router.get("/:id", validateId, async (req, res) => {
    const expense = await getExpense(req.params.id);
    res.status(200).json(expense);
});

router.post(
    "/", 
    validateCreateExpense, 
    async (req, res) => {
        const expense = await insertExpense(req.body);
        res.status(201).json({
            message: "Expense created successfully!",
            expense: expense
    });
});

router.put("/:id", 
    validateId, 
    validateUpdateExpense, 
    async (req, res) => {
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