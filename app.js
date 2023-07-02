//Import the required dependencies to create the app
const express = require('express');
const blogRoute = require('./routes/blogRoute');
const connectDB = require('./config/database');
const cors = require('cors')
console.log("App Import Line -> Working Good");

const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())
console.log("App Construct Line -> Working Good");

connectDB();

app.use('/blogs', blogRoute);

module.exports = app;