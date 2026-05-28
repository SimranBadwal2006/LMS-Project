const index = localStorage.getItem("editCourseIndex");
const titleInput = document.getElementById("title");
const descInput = document.getElementById("description");
const imageInput = document.getElementById("image");

let courses = JSON.parse(localStorage.getItem("teacherCourses")) || [];

if (index !== null && courses[index]) {
  titleInput.value = courses[index].title;
  descInput.value = courses[index].description;
  imageInput.value = courses[index].image || "";
}

document.getElementById("editForm").addEventListener("submit", function (e) {
  e.preventDefault();

  courses[index].title = titleInput.value.trim();
  courses[index].description = descInput.value.trim();
  courses[index].image = imageInput.value.trim() || "https://via.placeholder.com/300x200?text=No+Image";

  localStorage.setItem("teacherCourses", JSON.stringify(courses));
  alert("Course updated!");
  window.location.href = "teacher-dashboard.html";
});

function goBack() {
  window.location.href = "teacher-dashboard.html";
}
