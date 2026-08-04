function expenseValidator(input) {
    let err = {};
    if (!input.title.trim()) err.title = "Title is required";
    if (input.amount.includes('.') && input.amount.split('.')[1].length > 2) err.amount = "Amount at most 2 decimal places";
    if (Number(input.amount) >= 1e10) err.amount = "Amount must not exceed 10 digits";
    if (Number(input.amount) < 0) err.amount = "Amount must not be negative";
    if (!input.amount.trim() || isNaN(input.amount)) err.amount = "Amount must be a valid number";
    if (!input.category.trim()) err.category = "Category is required";
    if (!/^\d{4}-\d{2}-\d{2}$/.test(input.date.trim())) err.date = "Date must be in YYYY-MM-DD format";
    return err;
}

export { expenseValidator };