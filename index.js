const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const signup = require('./Route/signup');
const connection = require('./config/db');
const login = require('./Route/login');
const employees = require('./Route/employee');
require('dotenv').config();
// const connect = require('./config/db');

const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Home Page");
    
    // console.log(process.env.MONGODB_URL);
})

app.post("/signup", signup);
app.post("/login", login)
app.use("/employees", employees);

app.listen(port, () => {

    console.log('Listening on port ' + port);
    console.log('http://localhost:8080');
})

