function loginUser() {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.querySelector('input[name="role"]:checked');

  if (!email || !password || !role) {
    alert("Please fill in all fields and select a role.");
    return false;
  }

  const selectedRole = role.value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const matchedUser = users.find(
    (user) => user.email === email && user.password === password && user.role === selectedRole
  );

  if (!matchedUser) {
    alert("Invalid credentials.");
    return false;
  }

  localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));

  if (selectedRole === "teacher") {
    window.location.href = "teacher-dashboard.html";
  } else {
    window.location.href = "dashboard.html";
  }

  return false;
}




