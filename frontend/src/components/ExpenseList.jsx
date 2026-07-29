import ExpenseCard from "./ExpenseCard";

function ExpenseList({ expenses, onEdit, onDelete }) {

    return (
        <>
            {expenses.map((expense) => (
                <ExpenseCard key={expense.id} expense={expense} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </>
    );
}

export default ExpenseList;