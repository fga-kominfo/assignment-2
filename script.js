document.getElementById("submitBtn").addEventListener("click", function () {
  const nama = document.getElementById("nama").value;
  const role = document.getElementById("role").value;
  const availability = document.getElementById("availability").value;
  const usia = document.getElementById("usia").value;
  const lokasi = document.getElementById("lokasi").value;
  const years = document.getElementById("years").value;
  const email = document.getElementById("email").value;

  document.getElementById("displayNama").textContent = nama;
  document.getElementById("displayRole").textContent = role;
  document.getElementById("displayAvailability").textContent = availability;
  document.getElementById("displayUsia").textContent = usia;
  document.getElementById("displayLokasi").textContent = lokasi;
  document.getElementById("displayYears").textContent = years;
  document.getElementById("displayEmail").textContent = email;

  document.getElementById("navbar").scrollIntoView({ behavior: "smooth" });
});
