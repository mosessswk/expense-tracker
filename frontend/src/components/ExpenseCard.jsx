function ExpenseCard({ title, amount, category, date }) {
    return (
        <>
            <h3>{title}</h3>
            <p>Amount : {amount}</p>
            <p>Category : {category}</p>
            <p>Date : {date.slice(0, 10)}</p>
        </>
    );
}

export default ExpenseCard;