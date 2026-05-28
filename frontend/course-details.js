// Load course from localStorage
const courseName = localStorage.getItem("selectedCourse");
const courseDescriptionMap = {
  "HTML & CSS": "Learn how to design websites using HTML and CSS.",
  "JavaScript Basics": "Start your journey into web programming with JS.",
  "Python for Beginners": "Perfect for complete beginners to Python.",
  "Data Structures": "Understand how data is stored and organized efficiently."
};

document.getElementById("courseTitle").textContent = courseName + " | Course Details";
document.getElementById("courseName").textContent = courseName;
document.getElementById("courseDescription").textContent = courseDescriptionMap[courseName] || "No description available.";

function enrollInCourse() {
  alert("You have enrolled in " + courseName + " successfully!");
}
course.contents.forEach((topic, index) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <label>
      <input type="checkbox" onchange="markLesson('${courseKey}', ${index})">
      ${topic}
    </label>`;
  contentList.appendChild(li);
});