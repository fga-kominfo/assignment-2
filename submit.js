function prefillForm() {
    document.getElementById('nameInput').value = document.getElementById('nameDisplay').textContent;
    document.getElementById('roleInput').value = document.getElementById('roleDisplay').textContent;
    document.getElementById('availabilityInput').value = document.getElementById('availabilityDisplay').textContent;
    document.getElementById('ageInput').value = document.getElementById('ageDisplay').textContent;
    document.getElementById('locationInput').value = document.getElementById('locationDisplay').textContent;
    document.getElementById('experienceInput').value = document.getElementById('experienceDisplay').textContent;
    document.getElementById('emailInput').value = document.getElementById('emailDisplay').textContent;
}
window.onload = prefillForm;
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('nameInput').value;
    const role = document.getElementById('roleInput').value;
    const availability = document.getElementById('availabilityInput').value;
    const age = document.getElementById('ageInput').value;
    const location = document.getElementById('locationInput').value;
    const experience = document.getElementById('experienceInput').value;
    const email = document.getElementById('emailInput').value;

    document.getElementById('nameDisplay').textContent = name || "Nama Anda";
    document.getElementById('roleDisplay').textContent = role || "Front End Designer";
    document.getElementById('availabilityDisplay').textContent = availability || "Full Time";
    document.getElementById('ageDisplay').textContent = age || "17";
    document.getElementById('locationDisplay').textContent = location || "Jakarta, Indonesia";
    document.getElementById('experienceDisplay').textContent = experience || "2";
    document.getElementById('emailDisplay').textContent = email || "Developer@gmail.com";
});

