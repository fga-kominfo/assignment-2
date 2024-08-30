function TampilkanData(name, role, availability, age, location, experience, email) {
    document.querySelector('.profile-container h2').textContent = name;
    document.querySelector('.profile-container h4').textContent = role;
    document.querySelector('.profile-info ul li:nth-child(1)').textContent = `Ketersediaan: ${availability}`;
    document.querySelector('.profile-info ul li:nth-child(2)').textContent = `Usia: ${age}`;
    document.querySelector('.profile-info ul li:nth-child(3)').textContent = `Lokasi: ${location}`;
    document.querySelector('.profile-info ul li:nth-child(4)').textContent = `Pengalaman: ${experience} Tahun`;
    document.querySelector('.profile-info ul li:nth-child(5)').textContent = `Email: ${email}`;
}

function showNotification() {
    const notification = document.getElementById('notification');
    notification.className = "notification show";
    setTimeout(function() {
        notification.className = notification.className.replace("show", "");
    }, 3000);
}

function changePhoto(imageInput) {
    const profileImage = document.getElementById('profileImage');

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            profileImage.src = e.target.result; // Ganti sumber gambar dengan gambar baru
        }

        reader.readAsDataURL(imageInput.files[0]); // Membaca gambar yang diunggah sebagai URL data
    }
}

document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const availability = document.getElementById('availability').value;
    const age = document.getElementById('age').value;
    const location = document.getElementById('location').value;
    const experience = document.getElementById('experience').value;
    const email = document.getElementById('email').value;
    const imageInput = document.getElementById('imageUpload');

    TampilkanData(name, role, availability, age, location, experience, email);

    changePhoto(imageInput);

    showNotification();
});
