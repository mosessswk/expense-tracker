import { useState, useEffect } from "react";
import ExpenseList from "../components/ExpenseList";
import ExpenseForm from "../components/ExpenseForm";
import { getExpenses, addExpense, updateExpense, deleteExpense } from "../services/expenseService";

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
        } else if (result?.error) {
            alert(result.error);
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
        } else if (result?.error) {
            alert(result.error);
        } else {
            alert("Failed to edit expense");
        }
        setIsLoading(false);
        return false;
    }

    function handleCancelEdit() {
        setEditingExpense(null);
    }

    async function handleDeleteExpense(id) {
        setIsLoading(true);
        const confirmed = window.confirm("Are you sure to delete this expense?");
        if (confirmed) {
            const result = await deleteExpense(id);
            if (result) {
                if (editingExpense?.id === id) {
                    setEditingExpense(null);
                }
                setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
                setIsLoading(false);
                return true;
            } else if (result?.error) {
                alert(result.error);
            } else {
                alert("Failed to delete expense");
            }
        }
        setIsLoading(false);
        return false;
    }

    useEffect(() => {
        getExpenses()
        .then((result) => {
            if (result?.error) {
                alert(result.error);
            } else if (result) {
                setExpenses(result);
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
            {showExpenses ? <ExpenseList expenses={expenses} onEdit={(expense) => setEditingExpense(expense)} onDelete={handleDeleteExpense} /> : "Expenses hidden."}
            <h2>------------</h2>
            <p>Status : {isAdmin ? "Admin" : "Guest"}</p>
            <p>{isAdmin && "Administrator Controls"}</p>
        </>
    )
}

export default ExpensePage;