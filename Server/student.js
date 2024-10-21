const mongoose = require('mongoose')


// Define schema:
const studentSchema = new mongoose.Schema({
    title: String,
    name: String,
    surname: String,
    address: String,
    email: String,
    qualification: String,
    password: String,
    confirmPassword: String
});

const StudentModel = mongoose.model("students", studentSchema);

module.exports = StudentModel;
