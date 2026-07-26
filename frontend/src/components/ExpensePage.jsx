import { useState, useEffect } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseForm from "./ExpenseForm";
import { getExpenses, addExpense } from "../services/expenseService";

function ExpensePage() {

    const isAdmin = false;
    const [showExpenses, setShowExpenses] = useState(true);
    const [expenses, setExpenses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function handleAddExpense(newExpense) {
        setIsLoading(true);
        const result = await addExpense(newExpense);
        if (result.expense) {
            setExpenses((prevExpenses) => [...prevExpenses, result.expense]);
            setShowExpenses(true);
            setIsLoading(false);
            return true;
        } else {
            alert("Failed to add expense");
        }
        setIsLoading(false);
        return false;
    }

    useEffect(() => {
        getExpenses()
        .then((expenses) => {
            if (expenses) {
                setExpenses(expenses);
                setIsLoading(false);
            } else {
                alert("Failed to load expenses");
                setIsLoading(true);
            }
        })
    }, []);

    if (isLoading) return ( <h3>Loading ...</h3> );

    return (
        <>
            <h1>Expense Page</h1>
            <h2>------------</h2>
            <h2>Welcome!</h2>
            <h2>Expense Tracker</h2>
            <ExpenseForm onAddExpense={handleAddExpense} />
            <h2>------------</h2>
            <h2>Expenses</h2>
            <button onClick={() => setShowExpenses((s) => !s)}>Show / Hide expenses</button>
            {showExpenses ? <ExpenseList expenses={expenses} /> : "Expenses hidden."}
            <h2>------------</h2>
            <p>Status : {isAdmin ? "Admin" : "Guest"}</p>
            <p>{isAdmin && "Administrator Controls"}</p>
        </>
    )
}

export default ExpensePage;