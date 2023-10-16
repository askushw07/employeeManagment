const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require("../Models/user.model.js");


const signup = async(req, res) => {
    const { email, password } = req.body;
    const data =await User.find({email});
    if (data.length === 0)
        bcrypt.hash(password, 10).then(async function (hash) {
            // Store hash in your password DB.
            const post = new User({ email, password: hash });
            const response = await post.save();
            res.json("User Created");
        });
    else res.json("User already exists");
}
module.exports = signup;