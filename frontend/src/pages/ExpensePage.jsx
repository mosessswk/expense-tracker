import { useState, useEffect, useMemo } from "react";
import "./ExpensePage.css";
import ExpenseList from "../components/ExpenseList";
import ExpenseForm from "../components/ExpenseForm";
import { getExpenses, addExpense, updateExpense, deleteExpense } from "../services/expenseService";
import ExpenseToolBar from "../components/ExpenseToolBar";

function ExpensePage({ userName }) {

    const isAdmin = false;
    const [showExpenses, setShowExpenses] = useState(true);
    const [expenses, setExpenses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [editingExpense, setEditingExpense] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortOption, setSortOption] = useState("Oldest First");
    
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

    const visibleExpenses = useMemo(() => {
        const filtered = expenses.filter((expense) => {
            const matchCategory = selectedCategory === "" || expense.category === selectedCategory;
            const matchSearch = expense.title.toLowerCase().includes(searchText.toLowerCase()) || expense.description?.toLowerCase().includes(searchText.toLowerCase());
            return matchCategory && matchSearch;
        })
        return [...filtered].sort((a, b) => {
            if (sortOption === "Newest First") {
                return new Date(b.date) - new Date(a.date);
            } else if (sortOption === "Oldest First") {
                return new Date(a.date) - new Date(b.date);
            } else if (sortOption === "Amount ↑") {
                return a.amount - b.amount;
            } else if (sortOption === "Amount ↓") {
                return b.amount - a.amount;
            } else if (sortOption === "Title A-Z") {
                return a.title.localeCompare(b.title);
            } else if (sortOption === "Title Z-A") {
                return b.title.localeCompare(a.title);
            }
            return 0;
        })
    }, [expenses, searchText, selectedCategory, sortOption]);

    return (
        <div className="expense-page">
            <h1>Welcome, {userName}!</h1>
            <ExpenseForm initialExpense={editingExpense} onSubmit={editingExpense ? handleEditExpense : handleAddExpense} onCancel={handleCancelEdit} />
            <div className="expenses-display">
                <h2>Expenses</h2>
                <ExpenseToolBar searchText={searchText} setSearchText={setSearchText} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} categories={[...new Set(expenses.map((expense) => expense.category))]} sortOption={sortOption} setSortOption={setSortOption} />
                <button onClick={() => setShowExpenses((s) => !s)}>Show / Hide expenses</button>
                {isLoading ? <p className="info">Loading...</p> : 
                    visibleExpenses.length === 0 ? <p className="info">No expenses found.</p> :
                        showExpenses ? <ExpenseList expenses={visibleExpenses} onEdit={(expense) => setEditingExpense(expense)} onDelete={handleDeleteExpense} /> : <p className="info">Expenses hidden.</p>}
            </div>
            <footer>
                <p>Status : {isAdmin ? "Admin" : "Guest"}</p>
                <p>{isAdmin && "Administrator Controls"}</p>
            </footer>
        </div>
    )
}

export default ExpensePage;