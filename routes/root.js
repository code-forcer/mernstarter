// routes/users.js
const express = require('express');

const router = express.Router();

const path = require('path');

// Serve static files (like your HTML file)
router.use(express.static('src/components'));


// Define a route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/components', '/'));
});


// Define a route
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/components', 'about.html'));
});

// Define a route
router.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/components', 'services.html'));
});

// Define a route
router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/components', 'contact.html'));
});


// export the router module so that server.js file can use it
module.exports = router;

// I am testing my expressjs mongodb connection