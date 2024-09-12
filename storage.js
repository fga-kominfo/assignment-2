window.addEventListener("DOMContentLoaded", loadProfileData);

function loadProfileData() {
  const savedData = localStorage.getItem("profileData");
  if (savedData) {
    const profileData = JSON.parse(savedData);
    document.getElementById("profile-name").textContent = profileData.name;
    document.getElementById("profile-role").textContent = profileData.role;
    document.getElementById("profile-availability").textContent =
      profileData.availability;
    document.getElementById("profile-usia").textContent = profileData.usia;
    document.getElementById("profile-lokasi").textContent = profileData.lokasi;
    document.getElementById("profile-experience").textContent =
      profileData.experience;
    document.getElementById("profile-email").textContent = profileData.email;
  }
}
