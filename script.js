const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const formMessage = document.getElementById("formMessage");
const togglePassword = document.getElementById("togglePassword");

function clearErrors() {
    usernameError.textContent = "";
    passwordError.textContent = "";
    usernameInput.classList.remove("invalid");
    passwordInput.classList.remove("invalid");
    formMessage.textContent = "";
    formMessage.className = "form-message";
}

togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "Hide";
        togglePassword.setAttribute("aria-label", "Hide password");
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "Show";
        togglePassword.setAttribute("aria-label", "Show password");
    }
});

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    let isValid = true;

    if (username === "") {
        usernameError.textContent = "Please enter your username.";
        usernameInput.classList.add("invalid");
        isValid = false;
    }

    if (password.trim() === "") {
        passwordError.textContent = "Please enter your password.";
        passwordInput.classList.add("invalid");
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must contain at least 6 characters.";
        passwordInput.classList.add("invalid");
        isValid = false;
    }

    if (isValid) {
        formMessage.textContent =
            "Validation successful. This demo does not connect to a real account.";
        formMessage.classList.add("success");
    }
});

usernameInput.addEventListener("input", function () {
    usernameError.textContent = "";
    usernameInput.classList.remove("invalid");
});

passwordInput.addEventListener("input", function () {
    passwordError.textContent = "";
    passwordInput.classList.remove("invalid");
});

document.getElementById("forgotPassword").addEventListener("click", function (event) {
    event.preventDefault();
    formMessage.textContent = "Password recovery is not connected in this demo.";
    formMessage.className = "form-message info";
});

document.getElementById("signUp").addEventListener("click", function (event) {
    event.preventDefault();
    formMessage.textContent = "Account registration is not connected in this demo.";
    formMessage.className = "form-message info";
});
