import { useState, useEffect } from "react";
import Button from "./ui/Button";
import { registerValidator } from "../validators/registerValidator";
import "./RegisterForm.css";

function RegisterForm({ onRegister, onCancel }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [validate, setValidate] = useState(false);
    const [error, setError] = useState({});

    useEffect(() => {
        if (validate) {
            setError(registerValidator({ username, password, confirmPassword }));
        }
    }, [username, password, confirmPassword, validate]);

    async function handleSubmit(event) {
        event.preventDefault();
        setValidate(true);
        const error = registerValidator({ username, password, confirmPassword });
        if (Object.keys(error).length > 0) {
            setError(error);
            return;
        }
        if (await onRegister({ username, password, confirmPassword, displayName })) {
            setUsername("");
            setPassword("");
            setConfirmPassword("");
            setDisplayName("");
        }
        setValidate(false);
    }

    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <label>Username* : </label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            {error.username && <div className="error">{error.username}</div>}
            
            <label>Password* : </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error.password && <div className="error">{error.password}</div>}

            <label>Confirm Password* : </label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            {error.confirmPassword && <div className="error">{error.confirmPassword}</div>}

            <label>Display Name : </label>
            <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                <Button className="submit-button" type="submit" disabled={Object.keys(error).length > 0 && Object.keys(registerValidator({ username, password, confirmPassword })).length > 0}>Register</Button>
                <Button className="cancel-button" variant="secondary" type="button" onClick={onCancel}>Cancel — Login instead</Button>
        </form>
    )
}

export default RegisterForm;