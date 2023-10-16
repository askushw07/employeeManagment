const mongoose = require('mongoose');
require('dotenv').config();
// const connect = mongoose.connect(process.env.MONGODB_URL);
const connection = mongoose.connect('mongodb+srv://admin:admin123@cluster0.kzdwell.mongodb.net/EmployManagment');

module.exports = connection;