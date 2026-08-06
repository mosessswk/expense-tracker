import React from "react";
import ExpenseCard from "./ExpenseCard";

const ExpenseList = React.memo(function ExpenseList({ expenses, onEdit, onDelete }) {

    return (
        <>
            {expenses.map((expense) => (
                <ExpenseCard key={expense.id} expense={expense} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </>
    );
});

export default ExpenseList;