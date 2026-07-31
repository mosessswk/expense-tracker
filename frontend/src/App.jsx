import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router'
import ExpensePage from './pages/ExpensePage'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import { logout, getCurrentUser } from './services/authService'
import Toast from './components/Toast'
import ConfirmationModal from './components/ConfirmationModal'

function App() {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [toast, setToast] = useState(null);
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

    function handleLoginSuccess() {
        setIsLoggedIn(true);
        navigate("/expenses");
    }

    async function handleLogout() {
        setShowLogoutConfirm(false);
        if (await logout()) {
            setIsLoggedIn(false);
            showSuccess("Logout successful");
            navigate("/login");
        } else {
            showError("Logout failed");
        }
    }

    function showSuccess(message) {
        setToast({ message, type: "success"});
    }
    function showError(message) {
        setToast({ message, type: "error"});
    }
    function showWarning(message) {
        setToast({ message, type: "warning"});
    }
    function showInfo(message) {
        setToast({ message, type: "info"});
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
                Logged in : {isLoggedIn ? (<>Yes <button onClick={() => setShowLogoutConfirm(true)}>Log out</button></>) : <>No</>}
            </header>
            <Routes>
                <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} showSuccess={showSuccess} showError={showError} />} />
                <Route path="/expenses" element={<ProtectedRoute isLoggedIn={isLoggedIn} children={<ExpensePage userName={userName} showSuccess={showSuccess} showError={showError} showWarning={showWarning} showInfo={showInfo} />} />} />
                <Route path="/" element={<Navigate to="/expenses" replace />} />
            </Routes>
            {showLogoutConfirm && (
                <ConfirmationModal
                    title="Logout"
                    message="Are you sure to log out?"
                    onConfirm={handleLogout}
                    onCancel={() => setShowLogoutConfirm(false)}
                />)}
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        </>
    );
}

export default App;