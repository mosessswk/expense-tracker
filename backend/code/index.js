const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.json({
        "message":"Expense Tracker Backend Running"
    })
});

app.get("/expenses", (req, res) => {
    res.sendFile(path.join(__dirname, "../files/expenses.json"));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});