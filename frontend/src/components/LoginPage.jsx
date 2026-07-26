import { useState } from "react";
import LoginForm from "./LoginForm";
import { login } from "../services/authService";

function LoginPage({ onLoginSuccess }) {

    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin({ username, password }) {
        setIsLoading(true);
        const success = await login({ username, password });
        if (success) {
            onLoginSuccess();
        } else if (success === false) {
            alert("Username or password incorrect");
        } else {
            alert("Login failed")
        }
        setIsLoading(false);
    }

    if (isLoading) return ( <h3>Loading ...</h3> );

    return (
        <>
            <h1>Login Page</h1>
            <h2>-----------</h2>
            <p>Please log in.</p>
            <h2>-----------</h2>
            <LoginForm onLogin={handleLogin} />
        </>
    )
}

export default LoginPage;