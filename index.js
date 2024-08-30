// Fungsi untuk menampilkan data dari form ke section profile
function TampilkanData(event) {
    // Mengambil nilai dari form
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const availability = document.getElementById('availability').value;
    const age = document.getElementById('age').value;
    const location = document.getElementById('location').value;
    const experience = document.getElementById('experience').value;
    const email = document.getElementById('email').value;

    // Menampilkan nilai pada section profile
    document.getElementById('profile-name').textContent = name;
    document.getElementById('profile-role').textContent = role;
    document.getElementById('profile-availability').textContent = availability;
    document.getElementById('profile-age').textContent = age;
    document.getElementById('profile-location').textContent = location;
    document.getElementById('profile-experience').textContent = experience;
    document.getElementById('profile-email').textContent = email;

    // Sembunyikan form setelah submit dan ubah teks tombol edit kembali
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('edit-btn').textContent = 'Edit';
}

// Fungsi untuk menampilkan pesan kesalahan
function showError(field, message) {
    field.setAttribute('title', message);
    field.style.borderColor = 'red'; // Ubah warna border untuk menunjukkan kesalahan
}

// Fungsi untuk menghapus pesan kesalahan
function clearError(field) {
    field.removeAttribute('title');
    field.style.borderColor = ''; // Kembalikan warna border ke normal
}

// Fungsi untuk validasi input
function validateInput() {
    let isValid = true;
    const fields = document.querySelectorAll('.form-control');

    fields.forEach(field => {
        if (field.value.trim() === "") {
            showError(field, `${field.getAttribute('id')} is required.`);
            isValid = false;
        } else {
            clearError(field);
        }
    });

    return isValid;
}

// Menambahkan event listener pada form submit
document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateInput()) {
        // Jika validasi berhasil, proses form
        TampilkanData(event);
    }
});

// Fungsi untuk menampilkan dan menyembunyikan form
function toggleForm() {
    const formSection = document.getElementById('form-section');
    const editButton = document.getElementById('edit-btn');
    
    if (formSection.style.display === 'none' || formSection.style.display === '') {
        formSection.style.display = 'block';
        editButton.textContent = 'Close'; // Ubah teks tombol menjadi 'Close' saat form terbuka

        // Kosongkan form jika tombol 'Edit' diklik
        document.getElementById('profile-form').reset();
        document.querySelectorAll('.form-control').forEach(field => clearError(field)); // Hapus pesan kesalahan
    } else {
        formSection.style.display = 'none';
        editButton.textContent = 'Edit'; // Ubah teks tombol menjadi 'Edit' saat form tertutup
    }
}

// Menambahkan event listener pada tombol Edit
document.getElementById('edit-btn').addEventListener('click', toggleForm);
