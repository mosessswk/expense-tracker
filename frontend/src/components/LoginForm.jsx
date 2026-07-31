import { useState } from "react";
import Button from "./ui/Button";
import "./LoginForm.css";

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
            <Button type="submit">Log In</Button>
        </form>
    )
}

export default LoginForm;