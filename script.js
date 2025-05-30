const loginBtn = document.getElementById("login-btn");
const messageDiv = document.getElementById("message");

function simulateLogin() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Welcome back!");
    }, 2000);
  });
}

loginBtn.addEventListener("click", () => {
  messageDiv.textContent = "Logging in...";
  loginBtn.disabled = true;

  simulateLogin().then((welcomeMsg) => {
    messageDiv.textContent = welcomeMsg;
    loginBtn.disabled = false;
  });
});
