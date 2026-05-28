// Dummy data: each course has total assignments and submitted count
const courseProgress = [
  {
    course: "HTML & CSS",
    total: 3,
    submitted: 3
  },
  {
    course: "JavaScript Basics",
    total: 3,
    submitted: 1
  },
  {
    course: "Python for Beginners",
    total: 2,
    submitted: 2
  },
  {
    course: "Data Structures",
    total: 2,
    submitted: 0
  }
];
localStorage.setItem("studentName", "Simranjeet Kaur");
localStorage.setItem("selectedCourse", "JavaScript Basics");
window.location.href = "certificate.html";

function renderProgress() {
  const container = document.getElementById("progressReport");
  container.innerHTML = "";

  courseProgress.forEach(course => {
    const percent = Math.round((course.submitted / course.total) * 100);
    const status = percent === 100 ? "✅ Completed" : "⏳ In Progress";

    const card = document.createElement("div");
    card.className = "progress-card";

    card.innerHTML = `
      <h3>${course.course}</h3>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${percent}%;"></div>
      </div>
      <p><strong>${percent}%</strong> completed - <span class="status">${status}</span></p>
    `;

    container.appendChild(card);
  });
}

window.onload = renderProgress;