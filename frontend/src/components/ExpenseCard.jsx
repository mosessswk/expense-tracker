import { useState } from "react";

function ExpenseCard({ expense, onEdit, onDelete }) {

    const [isDeleting, setIsDeleting] = useState(false);

    async function handleDelete() {
        if (isDeleting) return;
        setIsDeleting(true);
        await onDelete(expense.id);
        setIsDeleting(false);
    }

    return (
        <>
            <h3>{expense.title}</h3>
            <p>Amount : {expense.amount}</p>
            <p>Category : {expense.category}</p>
            <p>Date : {expense.date.slice(0, 10)}</p>
            <button onClick={() => onEdit(expense)}>Edit</button>
            <button onClick={handleDelete} disabled={isDeleting}>{isDeleting ? "Deleting..." : "Delete"}</button>
        </>
    );
}

export default ExpenseCard;