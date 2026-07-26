import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router'
import Greeting from './components/Greeting'
import Title from './components/Title'
import SearchBox from './components/SearchBox'
import SearchSummary from './components/SearchSummary'
import ExpenseCard from './components/ExpenseCard'
import ExpenseList from './components/ExpenseList'
import ExpensePage from './components/ExpensePage'
import LoginPage from './components/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import { logout, getCurrentUser } from './services/authService'

function App() {
    const navigate = useNavigate();
    const myUsername = "Moses";
    const [searchText, setSearchText] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLoginSuccess() {
        setIsLoggedIn(true);
        navigate("/expenses");
    }

    async function handleLogout() {
        if (await logout()) {
            setIsLoggedIn(false);
            navigate("/login");
        } else {
            alert("Logout failed");
        }
    }

    useEffect(() => {
        getCurrentUser()
        .then((user) => {
            if (user) {
                setIsLoggedIn(true);
                navigate("/expenses");
            } else {
                setIsLoggedIn(false);
                navigate("/login");
            }
        })
    }, []);

    return (
        <>
            <div>
                Logged in : {isLoggedIn ? <>Yes &ensp; <button onClick={handleLogout}>Log out</button></> : <>No</>}
            </div>
            <Routes>
                <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
                <Route path="/expenses" element={<ProtectedRoute isLoggedIn={isLoggedIn} children={<ExpensePage />} />} />
                <Route path="/" element={<Navigate to="/expenses" replace />} />
            </Routes>
        </>
    );
}

export default App;