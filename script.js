function showLogin() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("register-form").style.display = "none";
}

function showRegister() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-form").style.display = "block";
}

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  if (username && password) {
    alert("Sign In Successful!");
  } else {
    alert("Please fill in all fields.");
  }
}

function register() {
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;
  const email = document.getElementById("reg-email").value;
  if (username && password && email) {
    alert("Registration Successful!");
    showLogin();
  } else {
    alert("Please fill in all fields.");
  }
}