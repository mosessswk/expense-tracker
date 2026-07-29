import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router'
import ExpensePage from './pages/ExpensePage'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import { logout, getCurrentUser } from './services/authService'

function App() {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");

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
                setUserName(user.display_name || user.username);
                navigate("/expenses");
            } else {
                setIsLoggedIn(false);
                navigate("/login");
            }
        })
    }, [isLoggedIn]);

    return (
        <>
            <header>
                Logged in : {isLoggedIn ? (<>Yes <button onClick={handleLogout}>Log out</button></>) : <>No</>}
            </header>
            <Routes>
                <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
                <Route path="/expenses" element={<ProtectedRoute isLoggedIn={isLoggedIn} children={<ExpensePage userName={userName} />} />} />
                <Route path="/" element={<Navigate to="/expenses" replace />} />
            </Routes>
        </>
    );
}

export default App;