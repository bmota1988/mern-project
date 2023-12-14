const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register user
router.post('/register', async(req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = ({ username, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Validate user
router.post('/validate', async(req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        if (user) {
            res.status(200).json({ message: 'Validation Sucessfull'});
        } else {
            res.status(401).json({ message: 'Invalid Credentials'});
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;