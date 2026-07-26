import { useState } from 'react';

function Greeting({ name, role = "User", initialCount }) {
    const [count, setCount] = useState(initialCount);
    return (
        <>
            <h2>Welcome, {name}!</h2>
            <h3>Role: {role}</h3>
            <p>Current Count : {count}</p>
            <div>
                <button onClick={() => setCount((c) => c + 1)}>Increase Count</button>
                <button onClick={() => {if (count > 0) setCount((c) => c - 1)}}>Decrease Count</button>
                <button onClick={() => setCount(initialCount)}>Reset</button>
            </div>
        </>
    );
}

export default Greeting;