function SummaryCard({ totalSpending, numberOfExpenses, largestExpense }) {
    return (
        <div className="summary-card flex flex-col justify-center rounded-xl border border-slate-200 bg-brand-primary p-4 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">Total Spending</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">$ {totalSpending}</p>

            <div className="mt-4 space-y-2 text-sm text-slate-600">
                <p>
                    <span className="font-medium text-slate-800">Number of Expenses:</span> {numberOfExpenses}
                </p>
                <p>
                    <span className="font-medium text-slate-800">Largest Expense:</span> {largestExpense.title} — $ {largestExpense.amount}
                </p>
            </div>
        </div>
    );
}

export default SummaryCard;