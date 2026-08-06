import React from "react";
import { useMemo } from "react";
import { getTotalSpending, getExpenseCount, getLargestExpense, getCategoryTotals, getMonthlyTotals } from "../../utils/analytics";
import CategoryPieChart from "./CategoryPieChart";
import MonthlyTrendChart from "./MonthlyTrendChart";
import SummaryCard from "./SummaryCard";

const Dashboard = React.memo(function Dashboard({ expenses }) {
    const { totalSpending, numberOfExpenses, largestExpense, categoryTotals, monthlyTotals } = useMemo(() => {
        return {
            totalSpending: getTotalSpending(expenses),
            numberOfExpenses: getExpenseCount(expenses),
            largestExpense: getLargestExpense(expenses),
            categoryTotals: getCategoryTotals(expenses),
            monthlyTotals: getMonthlyTotals(expenses),
        };
    }, [expenses]);

    return (
        <div className="dashboard m-4 p-4">
            <h3>Dashboard</h3>
            {expenses.length === 0
                ? <p className="info">No expenses yet.</p> 
                : <div className="dashboard-content grid gap-8 justify-center grid-cols-1 md:grid-cols-3 p-4">
                    <SummaryCard totalSpending={totalSpending} numberOfExpenses={numberOfExpenses} largestExpense={largestExpense} />
                    <CategoryPieChart categoryTotals={categoryTotals} />
                    <MonthlyTrendChart monthlyTotals={monthlyTotals} />
                </div>
            }
        </div>
    )
});

export default Dashboard;