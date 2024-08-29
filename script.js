document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nameField = document.getElementById("name");
  const roleField = document.getElementById("role");
  const availabilityField = document.getElementById("availability");
  const ageField = document.getElementById("age");
  const locationField = document.getElementById("location");
  const experienceField = document.getElementById("experience");
  const emailField = document.getElementById("email");

  const profileName = document.querySelector(".col h5");
  const profileRole = document.querySelector(".col p");
  const profileAvailability = document.querySelector(
    "table tr:nth-child(1) td:nth-child(2)"
  );
  const profileAge = document.querySelector(
    "table tr:nth-child(2) td:nth-child(2)"
  );
  const profileLocation = document.querySelector(
    "table tr:nth-child(3) td:nth-child(2)"
  );
  const profileExperience = document.querySelector(
    "table tr:nth-child(4) td:nth-child(2)"
  );
  const profileEmail = document.querySelector(
    "table tr:nth-child(5) td:nth-child(2)"
  );

  function showError(input, message) {
    const parentDiv = input.parentElement;
    const errorElement = parentDiv.querySelector(".error-message");

    if (!errorElement) {
      const error = document.createElement("div");
      error.className = "error-message text-danger mt-1";
      error.innerText = message;
      parentDiv.appendChild(error);
    } else {
      errorElement.innerText = message;
    }
  }

  function clearError(input) {
    const parentDiv = input.parentElement;
    const errorElement = parentDiv.querySelector(".error-message");
    if (errorElement) {
      parentDiv.removeChild(errorElement);
    }
  }

  function validateInput() {
    let isValid = true;

    if (nameField.value.trim() === "") {
      showError(nameField, "Name is required.");
      isValid = false;
    } else {
      clearError(nameField);
    }

    if (roleField.value.trim() === "") {
      showError(roleField, "Role is required.");
      isValid = false;
    } else {
      clearError(roleField);
    }

    if (availabilityField.value.trim() === "") {
      showError(availabilityField, "Availability is required.");
      isValid = false;
    } else {
      clearError(availabilityField);
    }

    if (ageField.value.trim() === "") {
      showError(ageField, "Age is required.");
      isValid = false;
    } else {
      clearError(ageField);
    }

    if (locationField.value.trim() === "") {
      showError(locationField, "Location is required.");
      isValid = false;
    } else {
      clearError(locationField);
    }

    if (experienceField.value.trim() === "") {
      showError(experienceField, "Experience is required.");
      isValid = false;
    } else {
      clearError(experienceField);
    }

    if (emailField.value.trim() === "") {
      showError(emailField, "Email is required.");
      isValid = false;
    } else {
      clearError(emailField);
    }

    return isValid;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateInput()) {
      const name = nameField.value;
      const role = roleField.value;
      const availability = availabilityField.value;
      const age = ageField.value;
      const location = locationField.value;
      const experience = experienceField.value;
      const email = emailField.value;

      profileName.textContent = name;
      profileRole.textContent = role;
      profileAvailability.textContent = availability;
      profileAge.textContent = age;
      profileLocation.textContent = location;
      profileExperience.textContent = experience;
      profileEmail.textContent = email;

      form.reset();
    } else {
      console.log("Form is not complete. Please fill all fields.");
    }
  });
});
