function getExpenseCount(expenses) {
    return expenses.length;
}

function getTotalSpending(expenses) {
    return expenses.reduce((total, expense) => total + Number(expense.amount), 0).toFixed(2);
}

function getLargestExpense(expenses) {
    if (expenses.length === 0) return null;
    return expenses.reduce((largest, expense) => Number(expense.amount) > Number(largest.amount) ? expense : largest);
}

function getCategoryTotals(expenses) {
    const categoryTotals = expenses.reduce((totals, expense) => {
        if (!totals[expense.category]) totals[expense.category] = 0;
        totals[expense.category] += Number(expense.amount);
        return totals;
    }, {});
    return Object.entries(categoryTotals).map(([category, total]) => ({ category, total }));
}
    
function getMonthlyTotals(expenses) {
    const monthlyTotals = expenses.reduce((totals, expense) => {
        const month = expense.date.slice(0, 7);
        if (!totals[month]) totals[month] = 0;
        totals[month] += Number(expense.amount);
        return totals;
    }, {});

    return Object.entries(monthlyTotals)
        .sort(([monthA], [monthB]) => monthA.localeCompare(monthB))
        .map(([month, total]) => ({ month, total: total.toFixed(2) }));
}

function getAverageExpense(expenses) {
    if (expenses.length === 0) return 0;
    return (Number(getTotalSpending(expenses)) / getExpenseCount(expenses));
}

export { getExpenseCount, getTotalSpending, getLargestExpense, getCategoryTotals, getMonthlyTotals, getAverageExpense };