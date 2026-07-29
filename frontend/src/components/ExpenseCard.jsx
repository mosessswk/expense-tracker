import { useState } from "react";
import "./ExpenseCard.css";

function ExpenseCard({ expense, onEdit, onDelete }) {

    const [isDeleting, setIsDeleting] = useState(false);

    async function handleDelete() {
        if (isDeleting) return;
        setIsDeleting(true);
        await onDelete(expense.id);
        setIsDeleting(false);
    }

    return (
        <div className="expense-card">
            <h3>{expense.title}</h3>
            <p>$ {expense.amount}</p>
            <p>{expense.category}</p>
            <p>{expense.date.slice(0, 10)}</p>
            <p className="description">{expense.description}</p>
            <button onClick={() => onEdit(expense)}>Edit</button>
            <button onClick={handleDelete} disabled={isDeleting}>{isDeleting ? "Deleting..." : "Delete"}</button>
        </div>
    );
}

export default ExpenseCard;