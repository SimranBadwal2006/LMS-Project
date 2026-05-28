
// const Course = require("../models/course");

// const getAllCourses = async (req, res) => {
//   try {
//     const courses = await Course.find();
//     res.json(courses);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch courses" });
//   }
// };

// const addCourse = async (req, res) => {
//   const { title, description, image, teacherId } = req.body;

//   if (!title || !description || !image || !teacherId) {
//     return res.status(400).json({ error: "Missing required fields" });
//   }

//   try {
//     const newCourse = new Course({ title, description, image, teacherId });
//     await newCourse.save();
//     res.status(201).json({ message: "Course added successfully", course: newCourse });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to add course" });
//   }
// };

// module.exports = { getAllCourses, addCourse };

const Course = require("../models/Course");

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching courses" });
  }
};

exports.addCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    console.error("Add course error:", err); // <-- add this line
    res.status(500).json({ message: "Error adding course", error: err.message });
  }
};