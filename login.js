// Load users from localStorage or use default if not set
let users = JSON.parse(localStorage.getItem("users")) || [
  { email: "admin@example.com", password: "admin123", role: "admin" },
  { email: "manager@example.com", password: "manager123", role: "manager" },
  { email: "accountant@example.com", password: "accountant123", role: "accountant" }
];

// Save the default users in localStorage if not already present
if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(users));
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Find user based on email and password
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    // Save the user's role to localStorage
    localStorage.setItem("role", user.role);
    // Redirect to the appropriate dashboard
    window.location.href = "dashboard.html"; 
  } else {
    // Display error message if credentials are incorrect
    errorMessage.style.display = "block";
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 3000); // Hide error message after 3 seconds
  }
}
