// menampilkan card form
document.getElementById('editButton').addEventListener('click', function () {
  const cardForm = document.getElementById('cardForm');
  if (cardForm.style.display === 'none' || cardForm.style.display === '') {
      cardForm.style.display = 'block';
  } else {
      cardForm.style.display = 'none';
  }
});

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
  const nameValue = document.getElementById('name').value;
  const roleValue = document.getElementById('role').value;
  const availabilityValue = document.getElementById('availability').value;
  const ageValue = document.getElementById('age').value;
  const locationValue = document.getElementById('location').value;
  const experienceValue = document.getElementById('experience').value;
  const emailValue = document.getElementById('email').value;

  // Menampilkan data pada Profile Section
  profileName.textContent = nameValue;
  profileRole.textContent = roleValue;
  profileAvailability.textContent = `Availability: ${availabilityValue}`;
  profileAge.textContent = `Usia: ${ageValue}`;
  profileLocation.textContent = `Lokasi: ${locationValue}`;
  profileExperience.textContent = `Pengalaman: ${experienceValue}`;
  profileEmail.textContent = `Email: ${emailValue}`;

});
