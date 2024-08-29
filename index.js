// Menangkap elemen-elemen yang diperlukan
const nameInput = document.getElementById('name');
const roleInput = document.getElementById('role');
const availabilityInput = document.getElementById('availability');
const ageInput = document.getElementById('age');
const locationInput = document.getElementById('location');
const experienceInput = document.getElementById('experience');
const emailInput = document.getElementById('email');

const profileName = document.getElementById('nameValue');
const profileRole = document.getElementById('roleValue');
const profileAvailability = document.getElementById('availabilityValue');
const profileAge = document.getElementById('ageValue');
const profileLocation = document.getElementById('locationValue');
const profileExperience = document.getElementById('experienceValue');
const profileEmail = document.getElementById('emailValue');

// Menangkap tombol submit
const submitButton = document.getElementById('submitButton');

// Menambahkan event listener untuk tombol submit
submitButton.addEventListener('click', function () {
  // Mengambil nilai dari input form
  const nameValue = nameInput.value;
  const roleValue = roleInput.value;
  const availabilityValue = availabilityInput.value;
  const ageValue = ageInput.value;
  const locationValue = locationInput.value;
  const experienceValue = experienceInput.value;
  const emailValue = emailInput.value;

  // Menampilkan data pada Profile Section
  profileName.textContent = nameValue;
  profileRole.textContent = roleValue;
  profileAvailability.textContent = `Availability: ${availabilityValue}`;
  profileAge.textContent = `Usia: ${ageValue}`;
  profileLocation.textContent = `Lokasi: ${locationValue}`;
  profileExperience.textContent = `Pengalaman: ${experienceValue}`;
  profileEmail.textContent = `Email: ${emailValue}`;

});
