const user = JSON.parse(localStorage.getItem("currentUser"));
if (user) {
  document.querySelector("h2").textContent = `Welcome, ${user.role === "teacher" ? "Teacher" : "Student"} 👋`;
}
