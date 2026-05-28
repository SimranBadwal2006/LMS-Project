function registerUser() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.querySelector('input[name="role"]:checked');

  if (!name || !email || !password || !role) {
    alert("Please fill all fields.");
    return false;
  }

  const selectedRole = role.value;

  const newUser = { name, email, password, role: selectedRole };

  // Get old users
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email exists
  if (users.some(u => u.email === email)) {
    alert("User already exists!");
    return false;
  }

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful! Please login.");
  window.location.href = "login.html";
  return false;
}


