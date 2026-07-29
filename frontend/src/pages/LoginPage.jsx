import { useState } from "react";
import "./LoginPage.css";
import LoginForm from "../components/LoginForm";
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
        <div className="login-page">
            <h1>Login</h1>
            <LoginForm onLogin={handleLogin} />
        </div>
    )
}

export default LoginPage;