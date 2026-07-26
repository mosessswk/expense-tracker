import ExpenseCard from "./ExpenseCard";

function ExpenseList({ expenses, onEdit }) {

    if (expenses.length === 0) return (<>No expenses found.</>);

    // const sortedExpenses = [...expenses].sort((a, b) => a.title.localeCompare(b.title));
    const sortedExpenses = [...expenses];
    return (
        <>
            {sortedExpenses.map((expense) => (
                <ExpenseCard key={expense.id} expense={expense} onEdit={onEdit} />
            ))}
        </>
    );
}

export default ExpenseList;