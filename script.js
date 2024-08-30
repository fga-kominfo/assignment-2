document.getElementById("submitBtn").addEventListener("click", function () {
  const nama = document.getElementById("nama").value;
  const role = document.getElementById("role").value;
  const availability = document.getElementById("availability").value;
  const usia = document.getElementById("usia").value;
  const lokasi = document.getElementById("lokasi").value;
  const years = document.getElementById("years").value;
  const email = document.getElementById("email").value;

  document.getElementById("displayNama").innerHTML = nama;
  document.getElementById("displayRole").innerHTML = role;
  document.getElementById("displayAvailability").innerHTML = availability;
  document.getElementById("displayUsia").innerHTML = usia;
  document.getElementById("displayLokasi").innerHTML = lokasi;
  document.getElementById("displayYears").innerHTML = years;
  document.getElementById("displayEmail").innerHTML = email;

  document.getElementById("navbar").scrollIntoView({ behavior: "smooth" });
});
