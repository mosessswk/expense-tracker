import { useState } from "react";
import "./ExpenseCard.css";
import ConfirmationModal from "./ui/ConfirmationModal";
import Button from "./ui/Button";

function ExpenseCard({ expense, onEdit, onDelete }) {

    const [isDeleting, setIsDeleting] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

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
            <Button onClick={() => onEdit(expense)}>Edit</Button>
            <Button variant="critical" onClick={() => setShowDeleteConfirm(true)} disabled={isDeleting}>
                {isDeleting ? "Deleting..." : "Delete"}
            </Button>
            {showDeleteConfirm && (
                <ConfirmationModal
                    title="Delete Expense"
                    message={`Are you sure to delete the expense "${expense.title}"?`}
                    onConfirm={handleDelete}
                    onCancel={() => setShowDeleteConfirm(false)}
                />
            )}
        </div>
    );
}

export default ExpenseCard;