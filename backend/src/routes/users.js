const express = require("express");
const router = express.Router();
const { insertUser, getUserById } = require("../database/db");
const { validateId, validateCreateUser, hashPassword } = require("../middleware/middleware");

router.post("/", 
    validateCreateUser, 
    hashPassword, 
    async (req, res) => {
        const user = await insertUser(req.body);
        res.status(201).json({
            message: "User created successfully!",
            user: {
                id: user.id, 
                username: user.username,
                display_name: user.display_name
            }
        });
    }
);

router.get("/:id", 
    validateId, 
    async (req, res) => {
        const user = await getUserById(req.params.id);
        res.status(200).json({
            id: user.id,
            username: user.username,
            display_name: user.display_name
        });
    }
)

module.exports = router;