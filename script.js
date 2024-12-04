// Fungsi untuk menampilkan data dari section profile ke form
function TampilkanData() {
    // Mendapatkan elemen yang berisi nilai dari section profile
    const nama = document.getElementById('profileName').innerText;
    const role = document.getElementById('profileRole').innerText;
    const availability = document.getElementById('profileAvailability').innerText;
    const usia = document.getElementById('profileAge').innerText;
    const lokasi = document.getElementById('profileLocation').innerText;
    const yearsExperience = document.getElementById('profileExperience').innerText;
    const email = document.getElementById('profileEmail').innerText;

    // Mengisi nilai form dengan data dari profile
    document.getElementById('inputNama').value = nama;
    document.getElementById('inputRole').value = role;
    document.getElementById('inputAvailability').value = availability;
    document.getElementById('inputUsia').value = usia;
    document.getElementById('inputLokasi').value = lokasi;
    document.getElementById('inputYearsExperience').value = yearsExperience.replace(' Tahun', ''); // Menghilangkan "Tahun" jika ada
    document.getElementById('inputEmail').value = email;

    // Menyembunyikan section profile dan menampilkan form
    document.getElementById('profileSection').style.display = 'block';
    document.getElementById('formSection').style.display = 'block';
}

// Fungsi untuk mengubah data di section profile setelah submit
function SubmitData() {
    // Mengambil nilai dari form
    const namaBaru = document.getElementById('inputNama').value;
    const roleBaru = document.getElementById('inputRole').value;
    const availabilityBaru = document.getElementById('inputAvailability').value;
    const usiaBaru = document.getElementById('inputUsia').value;
    const lokasiBaru = document.getElementById('inputLokasi').value;
    const yearsExperienceBaru = document.getElementById('inputYearsExperience').value + ' Tahun';
    const emailBaru = document.getElementById('inputEmail').value;

    // Memperbarui nilai di section profile
    document.getElementById('profileName').innerText = namaBaru;
    document.getElementById('profileRole').innerText = roleBaru;
    document.getElementById('profileAvailability').innerText = availabilityBaru;
    document.getElementById('profileAge').innerText = usiaBaru;
    document.getElementById('profileLocation').innerText = lokasiBaru;
    document.getElementById('profileExperience').innerText = yearsExperienceBaru;
    document.getElementById('profileEmail').innerText = emailBaru;

    // Menampilkan section profile dan menyembunyikan form
    document.getElementById('profileSection').style.display = 'block';
    document.getElementById('formSection').style.display = 'none';
}

// Memanggil fungsi TampilkanData saat halaman selesai dimuat
window.onload = TampilkanData;
