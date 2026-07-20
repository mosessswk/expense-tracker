const express = require("express");
const router = express.Router();
const { getAllExpenses, getExpense, insertExpense, updateExpense, deleteExpense } = require("../database/db");
const { validateId, validateCreateExpense, validateUpdateExpense, authenticateSession } = require("../middleware/middleware");

router.get("/", 
    authenticateSession, 
    async (req, res) => {
        const expenses = await getAllExpenses(req.user.id);
        res.status(200).json(expenses);
    }
);

router.get("/:id", 
    authenticateSession, 
    validateId, 
    async (req, res) => {
        const expense = await getExpense(req.params.id, req.user.id);
        res.status(200).json(expense);
    }
);

router.post(
    "/", 
    authenticateSession, 
    validateCreateExpense, 
    async (req, res) => {
        const expense = await insertExpense(req.body, req.user.id);
        res.status(201).json({
            message: "Expense created successfully!",
            expense: expense
        });
    }
);

router.put("/:id", 
    authenticateSession, 
    validateId, 
    validateUpdateExpense, 
    async (req, res) => {
        const expense = await updateExpense(req.params.id, req.body, req.user.id);
        res.status(200).json({
            message: "Expense updated successfully!",
            expense: expense
        });
    }
);

router.delete("/:id", 
    authenticateSession, 
    validateId, 
    async (req, res) => {
        await deleteExpense(req.params.id, req.user.id);
        res.status(204).end();
    }
);

module.exports = router;