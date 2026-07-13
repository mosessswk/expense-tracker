const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        "message":"Expense Tracker Backend Running"
    })
});

app.use("/expenses", require("./routes/expenses"));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});