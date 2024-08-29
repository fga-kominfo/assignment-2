function tampilkanData() {
  document.forms["form-input"].nama.value =
    document.getElementById("nama").innerHTML;
  document.forms["form-input"].role.value =
    document.getElementById("role").innerHTML;
  document.forms["form-input"].availability.value =
    document.getElementById("availability").innerHTML;
  document.forms["form-input"].usia.value =
    document.getElementById("usia").innerHTML;
  document.forms["form-input"].lokasi.value =
    document.getElementById("lokasi").innerHTML;
  document.forms["form-input"].pengalaman.value =
    document.getElementById("pengalaman").innerHTML;
  document.forms["form-input"].email.value =
    document.getElementById("email").innerHTML;
}

document.forms["form-input"].addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("nama").innerHTML =
    document.forms["form-input"].nama.value;
  document.getElementById("role").innerHTML =
    document.forms["form-input"].role.value;
  document.getElementById("availability").innerHTML =
    document.forms["form-input"].availability.value;
  document.getElementById("usia").innerHTML =
    document.forms["form-input"].usia.value;
  document.getElementById("lokasi").innerHTML =
    document.forms["form-input"].lokasi.value;
  document.getElementById("pengalaman").innerHTML =
    document.forms["form-input"].pengalaman.value;
  document.getElementById("email").innerHTML =
    document.forms["form-input"].email.value;

  alert("Berhasil Submit Form");
});

tampilkanData();
