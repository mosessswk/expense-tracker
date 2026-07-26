import ExpenseCard from "./ExpenseCard";

function ExpenseList({ expenses }) {

    if (expenses.length === 0) return (<>No expenses found.</>);

    // const sortedExpenses = [...expenses].sort((a, b) => a.title.localeCompare(b.title));
    const sortedExpenses = [...expenses];
    return (
        <>
            {sortedExpenses.map((expense) => (
                <ExpenseCard key={expense.id} title={expense.title} amount={expense.amount} category={expense.category} date={expense.date} />
            ))}
        </>
    );
}

export default ExpenseList;