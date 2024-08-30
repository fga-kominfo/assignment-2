// Event listener untuk tombol edit
document.getElementById("editButton").addEventListener("click", function () {
  const inputDetails = document.getElementById("inputDetails");

  // Memeriksa apakah form saat ini disembunyikan atau ditampilkan
  if (
    inputDetails.style.display === "none" ||
    inputDetails.style.display === ""
  ) {
    inputDetails.style.display = "block"; // Menampilkan form
  } else {
    inputDetails.style.display = "none"; // Menyembunyikan form
  }
});

// Event listener untuk pengiriman form
document
  .getElementById("inputDetails")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Mengambil nilai dari input form
    const name = document.getElementById("inputName").value;
    const role = document.getElementById("inputRole").value;
    const availability = document.getElementById("inputAvailability").value;
    const age = document.getElementById("inputAge").value;
    const location = document.getElementById("inputLocation").value;
    const years = document.getElementById("inputYears").value;
    const email = document.getElementById("inputEmail").value;

    // Memperbarui elemen tampilan dengan nilai baru
    document.getElementById("name").textContent = name;
    document.getElementById("role").textContent = role;
    document.getElementById("availability").textContent = availability;
    document.getElementById("age").textContent = age;
    document.getElementById("location").textContent = location;
    document.getElementById("years").textContent = years;
    document.getElementById("email").textContent = email;

    // Reset form setelah pengiriman
    document.getElementById("inputDetails").reset();

    // Menyembunyikan form setelah pengiriman
    document.getElementById("inputDetails").style.display = "none";
  });
