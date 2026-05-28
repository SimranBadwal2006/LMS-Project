const express = require("express");
const { getAllCourses, addCourse } = require("../controllers/courseController");

const courseRouter = express.Router();

courseRouter.get("/", getAllCourses);
courseRouter.post("/", addCourse);

module.exports = {
    courseRouter
};
courseRouter.delete("/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete course" });
  }
});

