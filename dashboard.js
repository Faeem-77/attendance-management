// Check user's role from localStorage
const userRole = localStorage.getItem("role");

function displayDashboard() {
  if (userRole === "admin") {
    document.getElementById("admin-content").style.display = "block";
  } else if (userRole === "manager") {
    document.getElementById("manager-content").style.display = "block";
  } else if (userRole === "accountant") {
    document.getElementById("accountant-content").style.display = "block";
  } else {
    // If no role found, redirect to login page
    window.location.href = "login.html";
  }
}

function logout() {
  // Clear localStorage and redirect to login page
  localStorage.removeItem("role");
  window.location.href = "login.html";
}

// Display dashboard content based on role
window.onload = displayDashboard;
