const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Include route files
const rootRoute = require('./routes/root');

// Serve static files from the 'public' directory
app.use('/assets', express.static(path.join(__dirname, "./public/assets")));

// Use routes : Home route
app.use('/', rootRoute);
app.use('/about', rootRoute);

//Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Server is running on port http://localhost:${port}`);
});
    
       