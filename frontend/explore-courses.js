document.addEventListener("DOMContentLoaded", async function () {
  const courseList = document.getElementById("courseList");

  try {
    const res = await fetch("http://localhost:8080/api/courses");
    const courses = await res.json();

    if (courses.length === 0) {
      courseList.innerHTML = "<p>No courses found.</p>";
      return;
    }

    courses.forEach((course) => {
      const div = document.createElement("div");
      div.className = "course-card";
      div.innerHTML = `
        <img src="${course.image}" alt="${course.title}" />
        <h3>${course.title}</h3>
        <p>${course.description}</p>
      `;
      courseList.appendChild(div);
    });
  } catch (err) {
    courseList.innerHTML = "<p>Error loading courses.</p>";
    console.error(err);
  }
});
