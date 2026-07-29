import { useState, useEffect } from "react";
import { validateExpense } from "../utils/validateExpense";

function ExpenseForm({ initialExpense, onSubmit, onCancel }) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState({});

    useEffect(() => {
        if (initialExpense) {
            setTitle(initialExpense.title);
            setAmount(initialExpense.amount);
            setCategory(initialExpense.category);
            setDate(initialExpense.date.slice(0, 10));
            setDescription(initialExpense.description);
        } else {
            setTitle("");
            setAmount("");
            setCategory("");
            setDate("");
            setDescription("");
        }
    }, [initialExpense]);

    function handleCancel() {
        setTitle("");
        setAmount("");
        setCategory("");
        setDate("");
        setDescription("");
        setError({});
        onCancel();
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const err = validateExpense({ title, amount, category, date });
        if (Object.keys(err).length > 0) {
            setError(err);
            return;
        }
        const expense = initialExpense ? { ...initialExpense, title, amount, category, date, description } : { title, amount, category, date, description };
        if (await onSubmit(expense)) {
            onCancel();
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    Title : <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <br/>{error.title && <span style={{ color: "red" }}>{error.title}</span>}
                </div>
                <div>
                    Amount : <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <br/>{error.amount && <span style={{ color: "red" }}>{error.amount}</span>}
                </div>
                <div>
                    Category : <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                    <br/>{error.category && <span style={{ color: "red" }}>{error.category}</span>}
                </div>
                <div>
                    Date : <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
                    <br/>{error.date && <span style={{ color: "red" }}>{error.date}</span>}
                </div>
                <div>
                    Description : <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                &emsp; <button type="button" onClick={handleCancel}>Cancel</button> &emsp;
                <button type="submit" disabled={Object.keys(error).length > 0 && Object.keys(validateExpense({ title, amount, category, date })).length > 0}>
                    {initialExpense ? "Update Expense" : "Submit Expense"}
                </button>
            </form>
        </>
    )
}

export default ExpenseForm;