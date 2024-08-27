// mengambil emlement profile
const profileName = document.getElementById("profileName");
const profileRole = document.getElementById("profileRole");
const profileAvailability = document.getElementById("profileAvailability");
const profileUsia = document.getElementById("profileUsia");
const profileLokasi = document.getElementById("profileLokasi");
const profilePengalaman = document.getElementById("profilePengalaman");
const profileEmail = document.getElementById("profileEmail");
const formName = document.getElementById("name");
const formRole = document.getElementById("role");
const formAvailability = document.getElementById("availability");
const formUsia = document.getElementById("usia");
const formLokasi = document.getElementById("lokasi");
const formYearsExperience = document.getElementById("yearsExperience");
const formEmail = document.getElementById("email");

//menampilkan data dari localStorage ke form dan profile
function tampilkanData() {
  const savedData = JSON.parse(localStorage.getItem("profileData"));

  if (savedData) {
    profileName.textContent = savedData.name;
    profileRole.textContent = savedData.role;
    profileAvailability.textContent = savedData.availability;
    profileUsia.textContent = savedData.usia;
    profileLokasi.textContent = savedData.lokasi;
    profilePengalaman.textContent = savedData.pengalaman;
    profileEmail.textContent = savedData.email;

    formName.value = savedData.name;
    formRole.value = savedData.role;
    formAvailability.value = savedData.availability;
    formUsia.value = savedData.usia;
    formLokasi.value = savedData.lokasi;
    formYearsExperience.value = savedData.pengalaman;
    formEmail.value = savedData.email;
  }
}

//untuk memperbarui data di profile setelah form disubmit
function updateProfile(event) {
  event.preventDefault();

  // simpan data ke profile
  const updatedData = {
    name: formName.value,
    role: formRole.value,
    availability: formAvailability.value,
    usia: formUsia.value,
    lokasi: formLokasi.value,
    pengalaman: formYearsExperience.value,
    email: formEmail.value,
  };

  // uppdate profile display
  profileName.textContent = updatedData.name;
  profileRole.textContent = updatedData.role;
  profileAvailability.textContent = updatedData.availability;
  profileUsia.textContent = updatedData.usia;
  profileLokasi.textContent = updatedData.lokasi;
  profilePengalaman.textContent = updatedData.pengalaman;
  profileEmail.textContent = updatedData.email;

  //menyimpan data ke localstorage
  localStorage.setItem("profileData", JSON.stringify(updatedData));
}

tampilkanData();

//event listener untuk form submit
const form = document.querySelector("form");
form.addEventListener("submit", updateProfile);
