const apiUrl = "http://localhost:8080/api/courses";

let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser || loggedInUser.role !== "teacher") {
  alert("Unauthorized access");
  window.location.href = "login.html";
}

// 1. Fetch teacher's courses from backend
async function fetchCourses() {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    const teacherCourses = data.filter(course => course.teacherId === loggedInUser.email);
    loadCourses(teacherCourses);
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
}

// 2. Load and display courses
function loadCourses(courses) {
  const courseList = document.getElementById("courseList");
  courseList.innerHTML = "";

  if (!courses.length) {
    courseList.innerHTML = "<p>No courses found.</p>";
    return;
  }

  courses.forEach((course, index) => {
    const courseDiv = document.createElement("div");
    courseDiv.className = "course";
    courseDiv.innerHTML = `
      <img src="${course.image}" alt="${course.title}" />
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <button onclick="deleteCourse('${course._id}')">Delete</button>
      <button onclick="editCourse('${course._id}')">Edit</button>
    `;
    courseList.appendChild(courseDiv);
  });
}

// 3. Delete a course
async function deleteCourse(courseId) {
  if (!confirm("Are you sure you want to delete this course?")) return;

  try {
    await fetch(`${apiUrl}/${courseId}`, {
      method: "DELETE"
    });
    fetchCourses(); // Reload after delete
  } catch (error) {
    console.error("Error deleting course:", error);
  }
}

// 4. Edit a course
function editCourse(courseId) {
  localStorage.setItem("editCourseId", courseId);
  window.location.href = "edit-course.html";
}

// 5. Search courses by title
async function searchCourses() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    const filtered = data.filter(course =>
      course.teacherId === loggedInUser.email &&
      course.title.toLowerCase().includes(query)
    );
    loadCourses(filtered);
  } catch (error) {
    console.error("Search error:", error);
  }
}

// 6. Load on page start
window.onload = fetchCourses;
