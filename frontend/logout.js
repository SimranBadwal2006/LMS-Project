// logout.js
window.onload = function () {
  // Clear stored data
  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("teacherCourses");
  localStorage.removeItem("enrolledCourses");

  // Redirect after a short delay
  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
};
