function validateExpense(expense) {
    let err = {};
    if (!expense.title.trim()) err.title = "Title is required";
    if (!expense.amount.trim() || isNaN(expense.amount)) err.amount = "Amount must be a number";
    if (!expense.category.trim()) err.category = "Category is required";
    if (!/^\d{4}-\d{2}-\d{2}$/.test(expense.date.trim())) err.date = "Date must be in YYYY-MM-DD format";
    return err;
}

export { validateExpense };