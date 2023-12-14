const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = require('express');
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/mern-project', {
    userNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes
app.use('api/users', require('./routes/userRoutes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});