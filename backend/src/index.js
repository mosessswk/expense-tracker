require('dotenv').config()
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const { requestLogger, responseTimeLogger, errorHandler } = require('./middleware/middleware');
const port = process.env.PORT;
const app = express();

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:4173"],
    credentials: true
}));

app.use(express.json());

app.use(requestLogger, responseTimeLogger);

app.use(session({
    secret: "testing", 
    resave: false, 
    saveUninitialized: false
}));

app.get("/", (req, res) => {
    res.status(200).json({
        message:"Expense Tracker Backend Running"
    })
});

app.use("/auth", require("./routes/auth"));

app.use("/expenses", require("./routes/expenses"));

app.use("/users", require("./routes/users"));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});