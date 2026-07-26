import { API_BASE_URL } from "../config"

async function login({ username, password }) {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        if (response.ok) {
            return true;
        } else if (response.status === 401) {
            return false;
        }
    } catch (error) {
        console.error(error);
    }
}

async function logout() {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/logout`, {
            method: "POST",
            credentials: "include"
        })
        if (response.ok) {
            return true;
        }
    } catch (error) {
        console.error(error);
    }
}

async function getCurrentUser() {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/me`, {
            method: "GET",
            credentials: "include"
        })
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error);
    }
}

export { login, logout, getCurrentUser };