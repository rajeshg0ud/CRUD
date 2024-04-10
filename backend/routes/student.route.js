const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// CREATE Student
router.post("/CreateStudentComponent", async (req, res, next) => {
    try {
        const newStudent = await Student.create(req.body);
        console.log(newStudent);
        res.json(newStudent);
    } catch (error) {
        next(error);
    }
});

// READ Students
router.get("/", async (req, res, next) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        next(error);
    }
});

// UPDATE Student
router.route("/UpdateStudent/:id")
    // Get Single Student
    .get(async (req, res, next) => {
        try {
            const student = await Student.findById(req.params.id);
            res.json(student);
        } catch (error) {
            next(error);
        }
    })

    // Update Student Data
    .put(async (req, res, next) => {
        try {
            const updatedStudent = await Student.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            );
            console.log("Student updated successfully !");
            res.json(updatedStudent);
        } catch (error) {
            next(error);
        }
    });

// Delete Student
router.route("/DeleteStudent/:id")
   .delete(async (req, res, next) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        if (!deletedStudent) {
            // If student with the given ID does not exist
            return res.status(404).json({ error: "Student not found" });
        }
        res.status(200).json({ msg: "Student successfully deleted", deletedStudent });
    } catch (error) {
        console.error("Error deleting student:", error);
        next(error); // Pass the error to the Express error handling middleware
    }
});

module.exports = router;

