const express = require("express");
const { validateLogin, authenticateUser, logout, authenticateSession } = require("../middleware/middleware");
const { route } = require("./users");
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

router.post("/logout", 
    logout, 
    (req, res) => {
        return res.status(204).send();
    }
)

router.get("/me", 
    authenticateSession, 
    (req, res) => {
        return res.json(req.user);
    }
)

module.exports = router;