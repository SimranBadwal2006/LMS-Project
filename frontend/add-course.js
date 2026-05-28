document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addCourseForm");

  if (!form) {
    console.error("Form with ID 'addCourseForm' not found.");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const image = document.getElementById("image").value.trim();

    const newCourse = { title, description, image };

    try {
      const response = await fetch("http://localhost:8080/api/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCourse)
      });

      const result = await response.json();

      if (response.ok) {
        alert("Course added successfully!");
        window.location.href = "teacher-dashboard.html";
      } else {
        alert("Failed to add course: " + result.message);
      }
    } catch (error) {
      console.error("Error adding course:", error);
      alert("Something went wrong!");
    }
  });
});
