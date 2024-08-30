document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    TampilkanData();
});

function TampilkanData() {
    // Menggunakan selector untuk mengambil elemen berdasarkan ID
    const nama = document.querySelector('#nama').value;
    const role = document.querySelector('#role').value;
    const availability = document.querySelector('#availability').value;
    const usia = document.querySelector('#usia').value;
    const lokasi = document.querySelector('#lokasi').value;
    const experience = document.querySelector('#experiences').value;
    const email = document.querySelector('#email').value;

    // Menampilkan data ke dalam elemen profil menggunakan selector
    document.querySelector('#profileName').textContent = nama;
    document.querySelector('#profileRole').textContent = role;
    document.querySelector('#profileAvailability').textContent = availability;
    document.querySelector('#profileUsia').textContent = usia;
    document.querySelector('#profileLokasi').textContent = lokasi;
    document.querySelector('#profileExperience').textContent = experience;
    document.querySelector('#profileEmail').textContent = email;
}
