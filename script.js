const hamburgerBtn = document.getElementById("hamburger-btn");
const closeBtn = document.getElementById("close-btn");
const navMenu = document.getElementById("nav-menu");

function toggleMenu() {
  navMenu.classList.toggle("hidden");
  hamburgerBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
}

hamburgerBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

// Fungsi untuk memperbarui profil
let isEditing = false;

// Fungsi validasi usia
function validateAge(age) {
  return age >= 18 && age <= 100;
}

// Fungsi validasi email
function validateEmail(email) {
  const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return reEmail.test(email);
}

function updateProfile(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const job = document.getElementById("job").value.trim();
  const availability = document.getElementById("availability").value;
  const age = document.getElementById("age").value.trim();
  const location = document.getElementById("location").value.trim();
  const experience = document.getElementById("experience").value.trim();
  const email = document.getElementById("email").value.trim();
  const profilePicture = document.getElementById("profilePicture").files[0];

  // Validasi input
  if (!name || !job || !availability || !age || !location || !experience || !email) {
    alert("Mohon isi semua field yang wajib diisi.");
    return;
  }

  if (!validateAge(parseInt(age))) {
    alert("Usia harus antara 18 dan 100 tahun.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Format email tidak valid.");
    return;
  }

  // Konfirmasi sebelum submit
  if (!confirm("Apakah Anda yakin ingin menyimpan perubahan?")) {
    return;
  }

  // Feedback visual
  const submitButton = document.getElementById("submitButton");
  submitButton.textContent = "Memproses...";
  submitButton.disabled = true;

  // Simulasi proses asynchronous
  setTimeout(() => {
    document.getElementById("profileName").textContent = name;
    document.getElementById("profileJob").textContent = job;
    document.getElementById("profileAvailability").textContent = availability === "available" ? "Available to work" : "Not available";
    document.getElementById("profileAge").textContent = `${age} tahun`;
    document.getElementById("profileLocation").textContent = location;
    document.getElementById("profileExperience").textContent = `${experience} tahun`;
    document.getElementById("profileEmail").textContent = email;

    if (profilePicture) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById("profileImage").src = e.target.result;
      }
      reader.readAsDataURL(profilePicture);
    }

    // Reset form dan tombol
    document.querySelector("form").reset();
    isEditing = false;
    submitButton.textContent = "Submit";
    submitButton.disabled = false;
    submitButton.classList.remove("bg-blue-500", "hover:bg-blue-600");
    submitButton.classList.add("bg-green-500", "hover:bg-green-600");

    alert("Profil berhasil diperbarui!");
  }, 1000); // Simulasi delay 1 detik
}

// Menambahkan event listener ke form
document.querySelector("form").addEventListener("submit", updateProfile);

// Fungsi untuk mengisi form dengan data profil saat ini
function fillFormWithCurrentProfile() {
  document.getElementById("name").value = document.getElementById("profileName").textContent;
  document.getElementById("job").value = document.getElementById("profileJob").textContent;
  document.getElementById("availability").value = document.getElementById("profileAvailability").textContent === "Available to work" ? "available" : "unavailable";
  document.getElementById("age").value = document.getElementById("profileAge").textContent.replace(" tahun", "");
  document.getElementById("location").value = document.getElementById("profileLocation").textContent;
  document.getElementById("experience").value = document.getElementById("profileExperience").textContent.replace(" tahun", "");
  document.getElementById("email").value = document.getElementById("profileEmail").textContent;

  isEditing = true;
  document.getElementById("submitButton").textContent = "Simpan";
  document.getElementById("submitButton").classList.remove("bg-green-500", "hover:bg-green-600");
  document.getElementById("submitButton").classList.add("bg-blue-500", "hover:bg-blue-600");
}

// Menambahkan event listener ke tombol Edit
document.querySelector(".bg-blue-500").addEventListener("click", fillFormWithCurrentProfile);

// Fungsi untuk menampilkan preview gambar yang dipilih
function previewImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const output = document.getElementById("profileImage");
      output.src = e.target.result;
    }
    reader.readAsDataURL(file);
  }
}

// Menambahkan event listener untuk preview gambar
document.getElementById("profilePicture").addEventListener("change", previewImage);
