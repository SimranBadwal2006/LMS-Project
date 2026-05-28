const express = require("express");
const productRouter = express.Router();

const products = []; // Fake DB for now

productRouter.post("/add", (req, res) => {
  const { title, description, image } = req.body;

  if (!title || !description || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newCourse = { id: products.length + 1, title, description, image };
  products.push(newCourse);

  res.status(201).json({ message: "Course added successfully", course: newCourse });
});

module.exports = { productRouter };
