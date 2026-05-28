// Sample assignments (you can make this dynamic later)
const assignments = [
  {
    course: "HTML & CSS",
    title: "Create a Personal Portfolio",
    dueDate: "2025-07-20",
    submitted: false,
  },
  {
    course: "JavaScript Basics",
    title: "JS Quiz – Variables & Loops",
    dueDate: "2025-07-22",
    submitted: false,
  },
  {
    course: "Python for Beginners",
    title: "Write a Python Calculator",
    dueDate: "2025-07-25",
    submitted: false,
  }
];

function renderAssignments() {
  const list = document.getElementById("assignmentList");
  list.innerHTML = "";

  assignments.forEach((assign, index) => {
    const card = document.createElement("div");
    card.className = "assignment-card";

    card.innerHTML = `
      <h3>${assign.title}</h3>
      <p><strong>Course:</strong> ${assign.course}</p>
      <p><strong>Due Date:</strong> ${assign.dueDate}</p>
      <p><strong>Status:</strong> <span id="status-${index}">${assign.submitted ? "Submitted ✅" : "Pending ⏳"}</span></p>
      <button onclick="submitAssignment(${index})" ${assign.submitted ? "disabled" : ""}>
        Submit
      </button>
    `;

    list.appendChild(card);
  });
}

function submitAssignment(index) {
  assignments[index].submitted = true;
  renderAssignments();
}

window.onload = renderAssignments;