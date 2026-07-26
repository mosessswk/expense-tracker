import { useState } from "react";

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
        <>
            <form action="" onSubmit={handleSubmit}>
                Username : <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                Password : <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">
                    Log In
                </button>
            </form>
        </>
    )
}

export default LoginForm;