document.getElementById("editButton").addEventListener("click", function() {
    var editForm = document.getElementById("containerForm");

    document.getElementById('name').value = document.getElementById('profileName').textContent;
    document.getElementById('role').value = document.getElementById('profileRole').textContent;
    document.getElementById('availability').value = document.getElementById('profileAvailability').textContent;
    document.getElementById('age').value = document.getElementById('profileAge').textContent;
    document.getElementById('location').value = document.getElementById('profileLocation').textContent;
    document.getElementById('experience').value = document.getElementById('profileExperience').textContent;
    document.getElementById('email').value = document.getElementById('profileEmail').textContent;

    if (editForm.style.display === "none") {
        editForm.style.display = "block";
    } else {
        editForm.style.display = "none";
    }
});


document.getElementById('editForm').addEventListener('submit', function (event) {

    event.preventDefault();

    var nameInput = document.getElementById('name').value;
    var roleInput = document.getElementById('role').value;
    var availabilityInput = document.getElementById('availability').value;
    var ageInput = document.getElementById('age').value;
    var locationInput = document.getElementById('location').value;
    var experienceInput = document.getElementById('experience').value;
    var emailInput = document.getElementById('email').value;

    document.getElementById('profileName').textContent = nameInput;
    document.getElementById('profileRole').textContent = roleInput;
    document.getElementById('profileAvailability').textContent = availabilityInput;
    document.getElementById('profileAge').textContent = ageInput;
    document.getElementById('profileLocation').textContent = locationInput;
    document.getElementById('profileExperience').textContent = experienceInput;
    document.getElementById('profileEmail').textContent = emailInput;

    document.getElementById('editForm').reset();
    document.getElementById('containerForm').style.display = 'none';
});