import { useState } from "react";
import "./RegisterPage.css";
import RegisterForm from "../components/RegisterForm";
import { register } from "../services/authService";
import LoadingSpinner from "../components/ui/LoadingSpinner";

function RegisterPage({ onRegisterSuccess, onCancel, showSuccess, showWarning, showError }) {

    const [isLoading, setIsLoading] = useState(false);

    async function handleRegister({ username, password, confirmPassword, displayName }) {
        if (isLoading) return;
        setIsLoading(true);
        const response = await register({ username, password, confirmPassword, displayName });
        if (response.user) {
            showSuccess("Registration successful — Please login");
            onRegisterSuccess(username);
            setIsLoading(false);
            return true;
        } else if (response.error) {
            showWarning(response.error);
        } else {
            showError("Registration failed");
        }
        setIsLoading(false);
        return false;
    }

    if (isLoading) return ( <LoadingSpinner /> );

    return (
        <div className="register-page">
            <h1>Register</h1>
            <RegisterForm onRegister={handleRegister} onCancel={onCancel} />
        </div>
    )
}

export default RegisterPage;