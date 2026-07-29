import ExpenseCard from "./ExpenseCard";

function ExpenseList({ expenses, onEdit, onDelete }) {

    if (expenses.length === 0) return (<>No expenses found.</>);

    return (
        <>
            {expenses.map((expense) => (
                <ExpenseCard key={expense.id} expense={expense} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </>
    );
}

export default ExpenseList;