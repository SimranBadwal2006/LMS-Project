// Simulate data from localStorage or login
const student = localStorage.getItem("studentName") || "John Doe";
const course = localStorage.getItem("selectedCourse") || "HTML & CSS";

// Insert into certificate
document.getElementById("studentName").textContent = student;
document.getElementById("courseName").textContent = course;

// Insert today's date
const today = new Date().toLocaleDateString();
document.getElementById("date").textContent = today;