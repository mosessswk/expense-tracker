import { useState, useEffect } from "react";
import ExpenseList from "../components/ExpenseList";
import ExpenseForm from "../components/ExpenseForm";
import { getExpenses, addExpense, updateExpense } from "../services/expenseService";

function ExpensePage() {

    const isAdmin = false;
    const [showExpenses, setShowExpenses] = useState(true);
    const [expenses, setExpenses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [editingExpense, setEditingExpense] = useState(null);

    async function handleAddExpense(newExpense) {
        setIsLoading(true);
        const result = await addExpense(newExpense);
        if (result?.expense) {
            setExpenses((prevExpenses) => [...prevExpenses, result.expense]);
            setIsLoading(false);
            return true;
        } else {
            alert("Failed to add expense");
        }
        setIsLoading(false);
        return false;
    }

    async function handleEditExpense(editedExpense) {
        setIsLoading(true);
        const result = await updateExpense(editedExpense?.id, editedExpense);
        if (result?.expense) {
            setExpenses((prevExpenses) => prevExpenses.map((expense) => expense.id === result.expense.id ? result.expense : expense));
            setIsLoading(false);
            return true;
        } else {
            alert("Failed to edit expense");
        }
        setIsLoading(false);
        return false;
    }

    function handleCancelEdit() {
        setEditingExpense(null);
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
            <h2>{editingExpense ? "Edit Expense" : "Add New Expense"}</h2>
            <ExpenseForm initialExpense={editingExpense} onSubmit={editingExpense ? handleEditExpense : handleAddExpense} onCancel={handleCancelEdit} />
            <h2>------------</h2>
            <h2>Expenses</h2>
            <button onClick={() => setShowExpenses((s) => !s)}>Show / Hide expenses</button>
            {showExpenses ? <ExpenseList expenses={expenses} onEdit={(expense) => setEditingExpense(expense)} /> : "Expenses hidden."}
            <h2>------------</h2>
            <p>Status : {isAdmin ? "Admin" : "Guest"}</p>
            <p>{isAdmin && "Administrator Controls"}</p>
        </>
    )
}

export default ExpensePage;