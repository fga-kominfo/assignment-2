function showData() {
    document.getElementById('name').value = document.getElementById('profile-name').innerText;
    document.getElementById('role').value = document.getElementById('profile-role').innerText;
    document.getElementById('availability').value = document.getElementById('profile-availability').innerText;
    document.getElementById('age').value = document.getElementById('profile-age').innerText;
    document.getElementById('location').value = document.getElementById('profile-location').innerText;
    document.getElementById('experience').value = document.getElementById('profile-experience').innerText;
    document.getElementById('email').value = document.getElementById('profile-email').innerText;
}

document.getElementById('editButton').addEventListener('click', function () {
    showData();
    document.getElementById('form-container').style.display = 'block';
});

document.getElementById('profile-form').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('profile-name').innerText = document.getElementById('name').value;
    document.getElementById('profile-role').innerText = document.getElementById('role').value;
    document.getElementById('profile-availability').innerText = document.getElementById('availability').value;
    document.getElementById('profile-age').innerText = document.getElementById('age').value;
    document.getElementById('profile-location').innerText = document.getElementById('location').value;
    document.getElementById('profile-experience').innerText = document.getElementById('experience').value;
    document.getElementById('profile-email').innerText = document.getElementById('email').value;
    document.getElementById('formContainer').style.display = 'none';
});