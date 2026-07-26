function ExpenseCard({ expense, onEdit }) {
    return (
        <>
            <h3>{expense.title}</h3>
            <p>Amount : {expense.amount}</p>
            <p>Category : {expense.category}</p>
            <p>Date : {expense.date.slice(0, 10)}</p>
            <button onClick={() => onEdit(expense)}>Edit</button>
        </>
    );
}

export default ExpenseCard;