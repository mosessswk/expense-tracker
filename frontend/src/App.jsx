import { useState, useEffect } from 'react'
import Greeting from './components/Greeting'
import Title from './components/Title'
import SearchBox from './components/SearchBox'
import SearchSummary from './components/SearchSummary'
import ExpenseCard from './components/ExpenseCard'
import ExpenseList from './components/ExpenseList'
import ExpensePage from './components/ExpensePage'
import LoginPage from './components/LoginPage'
import { logout, getCurrentUser } from './services/authService'

function App() {
    const myUsername = "Moses";
    const [searchText, setSearchText] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLoginSuccess() {
        setIsLoggedIn(true);
    }

    async function handleLogout() {
        if (await logout()) {
            setIsLoggedIn(false);
        } else {
            alert("Logout failed");
        }
    }

    useEffect(() => {
        getCurrentUser()
        .then((user) => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        })
    }, []);

    return (
        <>
            <div>
                Logged in : {isLoggedIn ? <>Yes &ensp; <button onClick={handleLogout}>Log out</button></> : <>No</>}
            </div>
            {isLoggedIn ? <ExpensePage /> : <LoginPage onLoginSuccess={handleLoginSuccess} />}
        </>
    );
}

export default App;