const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require('./config/dbConfig'); // Import the database connection function
const app = express();
app.use(bodyParser.json());
dbConnect(); // Call the dbConnect function to establish the database connection

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
