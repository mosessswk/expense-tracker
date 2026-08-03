import { useState, useEffect } from "react";
import Button from "./ui/Button";
import "./LoginForm.css";

function LoginForm({ onLogin, onRegister }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const usernameParam = urlParams.get("username");
        if (usernameParam) {
            setUsername(usernameParam);
        }
    })

    function handleSubmit(event) {
        event.preventDefault();
        onLogin({ username, password });
        setUsername("");
        setPassword("");
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <label>Username : </label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            
            <label>Password : </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button className="login-button" type="submit">Log In</Button>
            <Button className="register-button" variant="secondary" type="button" onClick={onRegister}>Register an account</Button>
        </form>
    )
}

export default LoginForm;