require('dotenv').config()
const express = require("express");
const { requestLogger, responseTimeLogger, errorHandler } = require('./middleware/middleware');
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(requestLogger, responseTimeLogger);

app.get("/", (req, res) => {
    res.status(200).json({
        message:"Expense Tracker Backend Running"
    })
});

app.use("/expenses", require("./routes/expenses"));

app.use("/users", require("./routes/users"));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});