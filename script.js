document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    username = username.trim();
    email = email.trim();
    password = password.trim();
    let isValid = true;
    let messages = [];
    if (username.trim().length < 3) {
      isValid = false;
      messages.push(
        "Error, username should be more than three characters long"
      );
    }

    if (!email.includes("@") && !email.includes(".")) {
      isValid = false;
      messages.push("Error, email should contain '@' and '.'");
      console.log("invalid email");
    }

    if (password.length < 8) {
      isValid = false;
      messages.push("Error, password should contain at least eight characters");
    }

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    }

    if (!isValid) {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
