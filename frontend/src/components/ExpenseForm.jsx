import { useState, useEffect } from "react";

function ExpenseForm({ initialExpense, onSubmit, onCancel }) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        if (initialExpense) {
            setTitle(initialExpense.title);
            setAmount(initialExpense.amount);
            setCategory(initialExpense.category);
            setDate(initialExpense.date.slice(0, 10));
        } else {
            setTitle("");
            setAmount("");
            setCategory("");
            setDate("");
        }
    }, [initialExpense]);

    async function handleSubmit(event) {
        event.preventDefault();
        const expense = initialExpense ? { ...initialExpense, title, amount, category, date } : { title, amount, category, date };
        if (await onSubmit(expense)) {
            onCancel();
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                Title : <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                Amount : <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                Category : <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                Date : <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                &emsp; <button type="button" onClick={onCancel}>Cancel</button> &emsp;
                <button type="submit" disabled={title === "" || amount === "" || category === "" || date === ""}>
                    {initialExpense ? "Update Expense" : "Submit Expense"}
                </button>
            </form>
        </>
    )
}

export default ExpenseForm;