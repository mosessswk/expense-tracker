import { useState, useEffect, useMemo } from "react";
import "./ExpenseForm.css";
import { validateExpense } from "../utils/validateExpense";

function ExpenseForm({ initialExpense, onSubmit, onCancel }) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState({});
    const [validate, setValidate] = useState(false);

    useEffect(() => {
        if (initialExpense) {
            setTitle(initialExpense.title);
            setAmount(initialExpense.amount);
            setCategory(initialExpense.category);
            setDate(initialExpense.date.slice(0, 10));
            setDescription(initialExpense.description);
            setValidate(true);
        } else {
            setTitle("");
            setAmount("");
            setCategory("");
            setDate("");
            setDescription("");
            setError({});
            setValidate(false);
        }
    }, [initialExpense]);

    useMemo(() => {
        if (validate) {
            setError(validateExpense({ title, amount, category, date }));
        }
    }, [title, amount, category, date, validate]);

    function handleCancel() {
        setTitle("");
        setAmount("");
        setCategory("");
        setDate("");
        setDescription("");
        setError({});
        setValidate(false);
        onCancel();
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setValidate(true);
        const err = validateExpense({ title, amount, category, date });
        if (Object.keys(err).length > 0) {
            setError(err);
            return;
        }
        const expense = initialExpense ? { ...initialExpense, title, amount, category, date, description } : { title, amount, category, date, description };
        await onSubmit(expense);
    }

    return (
        <div className="expense-form-container">
            <h2>{initialExpense ? "Edit Expense" : "Add New Expense"}</h2>
            <br />
            <form className="expense-form" onSubmit={handleSubmit}>
                <label>Title* :</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                {error.title && <span className="error">{error.title}</span>}

                <label>Amount* :</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                {error.amount && <span className="error">{error.amount}</span>}

                <label>Category* :</label>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                {error.category && <span className="error">{error.category}</span>}

                <label>Date* :</label>
                <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
                {error.date && <span className="error">{error.date}</span>}

                <label>Description :</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <br />
                <button className="cancel-button" type="button" onClick={handleCancel}>Cancel</button>
                <button className="submit-button" type="submit" disabled={Object.keys(error).length > 0 && Object.keys(validateExpense({ title, amount, category, date })).length > 0}>
                    {initialExpense ? "Update Expense" : "Submit Expense"}
                </button>
            </form>
        </div>
    )
}

export default ExpenseForm;