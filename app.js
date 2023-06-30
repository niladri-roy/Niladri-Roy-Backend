const express = require('express');
const blogRoute = require('./routes/blogRoute');
const connectDB = require('./config/dataBase');
console.log("App Import Line -> Working Good");

const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
console.log("App Construct Line -> Working Good");

connectDB();

app.use('/blogs', blogRoute);

module.exports = app;