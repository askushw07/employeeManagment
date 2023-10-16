const router = require('express').Router();
const mongoose = require('mongoose');
const authMiddleware = require('../Middleware/authMiddleWare.js');
const Employee = require('../Models/employee.model');

router.use(authMiddleware)

router.post("/add", async (req, res) => {
    const {firstName,lastName,department,salary,email} = req.body;
    const data = await Employee.find({ email })
    if (data.length === 0) {
        const query = new Employee({ firstName, lastName, email, salary, department });
        const response = await query.save();
        res.json("Employee Created")
    }
    else res.json("Employee already exists");
})

router.get("/", async(req, res) => {
    const {sort,order, filter} = req.query;
    // console.log(req.query)
    const query =await Employee.find(filter).sort({ [sort]:order });
    console.log(query);
    res.json(query);
})

router.delete("/delete/:id", async(req, res) => {
    const id = req.params.id;
    const response = await Employee.findByIdAndDelete({ _id: id });
    if (response) res.json("User Deleted")
    else
        res.json("Something went wrong")
})

router.put("/update/:id", async(req, res) => {
    const id = req.params.id;
    const response = await Employee.findByIdAndUpdate({ _id: id },{...req.body});
    if (response) res.json("User data updated successfully")
    else
        res.json("Something went wrong");
})

module.exports = router;

