function kirim(event) {
  event.preventDefault();

  // ambil form
  const form = document.querySelector('form');

  // ambil text
  const spanNama = document.getElementById('nama');
  const pRole = document.getElementById('role');
  const tdAvailability = document.getElementById('availability');
  const tdUsia = document.getElementById('usia');
  const tdLokasi = document.getElementById('lokasi');
  const tdPengalaman = document.getElementById('pengalaman');
  const tdEmail = document.getElementById('email');

  // ambil input
  const inputNama = form.querySelector('input[name="nama"]').value;
  const inputRole = form.querySelector('input[name="role"]').value;
  const inputAvailability = form.querySelector('input[name="availability"]').value;
  const inputUsia = form.querySelector('input[name="usia"]').value;
  const inputLokasi = form.querySelector('input[name="lokasi"]').value;
  const inputPengalaman = form.querySelector('input[name="experience"]').value;
  const inputEmail = form.querySelector('input[name="email"]').value;

  // update text
  spanNama.textContent = inputNama;
  pRole.textContent = inputRole;
  tdAvailability.textContent = inputAvailability;
  tdUsia.textContent = inputUsia;
  tdLokasi.textContent = inputLokasi;
  tdPengalaman.textContent = inputPengalaman;
  tdEmail.textContent = inputEmail;
}
