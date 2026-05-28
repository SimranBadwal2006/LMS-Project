function enroll(courseName) {
  localStorage.setItem("selected course",courseName);
  window.location.href = "course-details.html";
}