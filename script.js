const form = document.getElementById("form");
const edit = document.getElementById("edit");

// Hide form
form.style.display = "none";

// Show form
function editProfileData() {
  form.style.display = "block";
}

// Linking data profile section to form field section
const nameProfile = document.getElementById("name-profile").innerText;
const roleProfile = document.getElementById("role-profile").innerText;
const availabilityProfile = document.getElementById(
  "availability-profile"
).innerText;
const usiaProfile = document.getElementById("usia-profile").innerText;
const lokasiProfile = document.getElementById("lokasi-profile").innerText;
const pengalamanProfile =
  document.getElementById("pengalaman-profile").innerText;
const emailProfile = document.getElementById("email-profile").innerText;

document.getElementById("name-form-value").value = nameProfile;
document.getElementById("role-form-value").value = roleProfile;
document.getElementById("availability-form-value").value = availabilityProfile;
document.getElementById("usia-form-value").value = usiaProfile;
document.getElementById("lokasi-form-value").value = lokasiProfile;
document.getElementById("years-form-value").value = pengalamanProfile;
document.getElementById("email-form-value").value = emailProfile;

// Update data profile
function updateProfileData(event) {
  event.preventDefault(); // prevent page from refresh

  const newName = document.getElementById("name-form-value").value;
  const newRole = document.getElementById("role-form-value").value;
  const newAvailability = document.getElementById(
    "availability-form-value"
  ).value;
  const newUsia = document.getElementById("usia-form-value").value;
  const newLokasi = document.getElementById("lokasi-form-value").value;
  const newYears = document.getElementById("years-form-value").value;
  const newEmail = document.getElementById("email-form-value").value;

  document.getElementById("name-profile").textContent = newName;
  document.getElementById("role-profile").textContent = newRole;
  document.getElementById("availability-profile").textContent = newAvailability;
  document.getElementById("usia-profile").textContent = newUsia;
  document.getElementById("lokasi-profile").textContent = newLokasi;
  document.getElementById("pengalaman-profile").textContent = newYears;
  document.getElementById("email-profile").textContent = newEmail;

  form.style.display = "none";
}
