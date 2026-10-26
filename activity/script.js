const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    message.style.color = "#c0392b";

    if (username === "") {
        message.textContent = "Please enter your username.";
    } else if (password === "") {
        message.textContent = "Please enter your password.";
    } else if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters.";
    } else {
        message.textContent = "Validation successful! Demo only.";
        message.style.color = "green";
    }
});
