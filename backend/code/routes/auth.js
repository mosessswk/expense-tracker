const express = require("express");
const { validateLogin, authenticateUser } = require("../middleware/middleware");
const { getUserByUsername } = require("../database/db");
const router = express.Router();

router.post("/login", 
    validateLogin, 
    authenticateUser, 
    (req, res) => {
        return res.status(200).json({
            id: req.user.id, 
            username: req.user.username, 
            display_name: req.user.display_name
        })
    }
);

module.exports = router;