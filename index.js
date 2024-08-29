const identityForm = document.getElementById("form-identity");

// input
const nameInput = document.getElementById("name-input");
const roleInput = document.getElementById("role-input");
const availInput = document.getElementById("avail-input");
const ageInput = document.getElementById("usia-input");
const locationInput = document.getElementById("lokasi-input");
const experienceInput = document.getElementById("experience-input");
const emailInput = document.getElementById("email-input");

// container
const availContainer = document.getElementById("avail-container");
const ageContainer = document.getElementById("age-container");
const locationContainer = document.getElementById("location-container");
const experienceContainer = document.getElementById("experience-container");
const emailContainer = document.getElementById("email-container");

function addContainerFromInput() {
  const availValue = availInput.value;
  const ageValue = ageInput.value;
  const locValue = locationInput.value;
  const experienceValue = experienceInput.value;
  const emailValue = emailInput.value;

  availContainer.innerText = availValue;
  ageContainer.innerText = ageValue;
  locationContainer.innerText = locValue;
  experienceContainer.innerText = experienceValue;
  emailContainer.innerText = emailValue;
}

identityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addContainerFromInput();
  // reset();
  identityForm.reset();
});
