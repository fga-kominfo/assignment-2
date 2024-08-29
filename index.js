function showForm() {
    // Sembunyikan informasi profil
    document.querySelector('.profile-card').style.display = 'none';
    // Tampilkan form edit
    document.querySelector('.form-container').style.display = 'block';
}

function hideForm() {
    // Tampilkan informasi profil
    document.querySelector('.profile-card').style.display = 'block';
    // Sembunyikan form edit
    document.querySelector('.form-container').style.display = 'none';
}

function updateProfile(event) {
    event.preventDefault();

    // Ambil nilai dari form input
    const name = document.getElementById('nama').value;
    const role = document.getElementById('inputrole').value;
    const availability = document.getElementById('availability').value;
    const age = document.getElementById('age').value;
    const location = document.getElementById('location').value;
    const experience = document.getElementById('experience').value;
    const email = document.getElementById('email').value;

    // Update tampilan profil dengan nilai baru
    document.getElementById('display-name').textContent = name;
    document.getElementById('display-role').textContent = role;
    document.getElementById('display-availability').textContent = availability;
    document.getElementById('display-age').textContent = age;
    document.getElementById('display-location').textContent = location;
    document.getElementById('display-experience').textContent = experience;
    document.getElementById('display-email').textContent = email;

    // Sembunyikan form setelah submit
    hideForm();
}
