document.getElementById("dataForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const role = document.getElementById("role").value;
  const avaibility = document.getElementById("avaibility").value;
  const usia = document.getElementById("usia").value;
  const lokasi = document.getElementById("lokasi").value;
  const experience = document.getElementById("years").value;
  const email = document.getElementById("email").value;

  document.getElementById("displayName").innerText = nama;
  document.getElementById("displayRole").innerText = role;
  document.getElementById("displayAvailability").innerText = avaibility;
  document.getElementById("displayAge").innerText = usia;
  document.getElementById("displayLocation").innerText = lokasi;
  document.getElementById("displayExperience").innerText = experience;
  document.getElementById("displayEmail").innerText = email;
});
