const express = require("express");
const { connection } = require("mongoose");
const { auth } = require("./middleware/auth");
const { userRouter } = require("./routes/user.route");
const { courseRouter } = require("./routes/Course.route");
const { addCourse } = require("./controllers/courseController");

require('dotenv').config();
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/user", userRouter);
app.use("/api/courses", courseRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  try {
    console.log("database is connecting...");
    await connection;
    console.log("database is connected");
  } catch (error) {
    console.log(error);
  }
  console.log(`server is running at http://localhost:${PORT}`);
});