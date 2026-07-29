import { API_BASE_URL } from "../config"

async function getExpenses() {
    try {
        const response = await fetch(`${API_BASE_URL}/expenses`, {
            method: "GET",
            credentials: "include"
        })
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

async function addExpense(expense) {
    try {
        const response = await fetch(`${API_BASE_URL}/expenses`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(expense)
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

async function updateExpense(id, expense) {
    try {
        const response = await fetch(`${API_BASE_URL}/expenses/${id}`, {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(expense)
        })
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

async function deleteExpense(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/expenses/${id}`, {
            method: "DELETE",
            credentials: "include"
        })
        if (response.ok) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
    }
}

export { getExpenses, addExpense, updateExpense, deleteExpense };