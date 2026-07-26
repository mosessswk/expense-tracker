import { useState } from "react";

function ExpenseForm({ onAddExpense }) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    
    async function handleSubmit(event) {
        event.preventDefault();
        if (title === "" || amount === "" || category === "" || date === "") {
            alert("Please fill in every field.");
            return;
        }
        if (await onAddExpense({ title, amount, category, date })) {
            setTitle("");
            setAmount("");
            setCategory("");
            setDate("");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                Title : <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                Amount : <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
                Category : <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                Date : <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
                <button type="submit" disabled={title === "" || amount === "" || category === ""}>
                    Add Expense
                </button>
            </form>
        </>
    )
}

export default ExpenseForm;