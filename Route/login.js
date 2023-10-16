const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../Models/user.model.js");
require('dotenv').config();


const login =async (req, res) => {
    const { email, password } = req.body;
    const data = await User.findOne({ email });
    // console.log(data, data.$isEmpty)
    let hashed = "";
    if (Object.keys(data).length === 0) res.json("User Not Found");
    else {
        if (bcrypt.compareSync(password, data.password)) {
            var token = jwt.sign({ foo: 'bar', userId:data._id }, 'shhhhh');
            // console.log(token);
            res.json({token, message:"Login Successfulll"});
        }
        else res.json("Invalid Credentials");
    }
}
module.exports = login;