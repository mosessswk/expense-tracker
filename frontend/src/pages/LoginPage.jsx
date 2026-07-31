import { useState } from "react";
import "./LoginPage.css";
import LoginForm from "../components/LoginForm";
import { login } from "../services/authService";
import LoadingSpinner from "../components/ui/LoadingSpinner";

function LoginPage({ onLoginSuccess, showSuccess, showError }) {

    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin({ username, password }) {
        if (isLoading) return;
        setIsLoading(true);
        const success = await login({ username, password });
        if (success) {
            showSuccess("Login successful");
            onLoginSuccess();
        } else if (success === false) {
            showError("Username or password incorrect");
        } else {
            showError("Login failed");
        }
        setIsLoading(false);
    }

    if (isLoading) return ( <LoadingSpinner /> );

    return (
        <div className="login-page">
            <h1>Login</h1>
            <LoginForm onLogin={handleLogin} />
        </div>
    )
}

export default LoginPage;