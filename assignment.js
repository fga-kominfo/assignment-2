// Menunggu DOM untuk sepenuhnya dimuat sebelum menambahkan event listener
document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen form
  const form = document.querySelector("form");

  // Tambahkan event listener untuk form submit
  form.addEventListener("submit", function (event) {
    // Mencegah form dari pengiriman default (reload page)
    event.preventDefault();

    // Ambil nilai input dari form
    const name = form.querySelector("input[placeholder='Name']").value;
    const role = form.querySelector("input[placeholder='Role']").value;
    const availability = form.querySelector(
      "input[placeholder='Availability']"
    ).value;
    const age = form.querySelector("input[placeholder='Age']").value;
    const location = form.querySelector("input[placeholder='Lokasi']").value;
    const experience = form.querySelector(
      "input[placeholder='Years Experience']"
    ).value;
    const email = form.querySelector("input[placeholder='Email']").value;

    // Update nilai di section profile-right
    document.querySelector(".profile-details h2").textContent = name;
    document.querySelector(".profile-details p").textContent = role;
    document.querySelector(".profile-right").innerHTML = `
          <p><strong class="label">Availability</strong>: ${availability}</p>
          <p><strong class="label">Age</strong>: ${age}</p>
          <p><strong class="label">Location</strong>: ${location}</p>
          <p><strong class="label">Experience</strong>: ${experience} Tahun</p>
          <p><strong class="label">Email</strong>: ${email}</p>
        `;

    // Kosongkan input setelah submit (opsional)
    form.reset();
  });
});
