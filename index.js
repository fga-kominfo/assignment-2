document.getElementById('editButton').addEventListener('click', function () {
    const cardForm = document.getElementById('cardForm');
    if (cardForm.style.display === 'none' || cardForm.style.display === '') {
        cardForm.style.display = 'block';
    } else {
        cardForm.style.display = 'none';
    }
});

document.getElementById('updateForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Mengambil data
    const name = document.getElementById('inputName').value;
    const role = document.getElementById('inputRole').value;
    const availability = document.getElementById('inputAvailability').value;
    const age = document.getElementById('inputAge').value;
    const location = document.getElementById('inputLocation').value;
    const experience = document.getElementById('inputExperience').value;
    const email = document.getElementById('inputEmail').value;

    // Memperbarui data
    document.getElementById('valueName').textContent = name;
    document.getElementById('valueRole').textContent = role;
    document.getElementById('valueAvailability').textContent = availability;
    document.getElementById('valueAge').textContent = age;
    document.getElementById('valueLocation').textContent = location;
    document.getElementById('valueExperience').textContent = experience;
    document.getElementById('valueEmail').textContent = email;

    // Menyembunyikan elemen form
    document.getElementById('cardForm').style.display = 'none';
});