document.addEventListener('DOMContentLoaded', () => {
    // Select profile elements
    const profileName = document.querySelector('.profile-name');
    const profileRole = document.querySelector('.profile-role');
    const profileAvailability = document.querySelector('.availability');
    const profileUsia = document.querySelector('.usia');
    const profileLokasi = document.querySelector('.lokasi');
    const profileExperience = document.querySelector('.experience');
    const profileEmail = document.querySelector('.email');

    // Select form elements
    const formContainer = document.getElementById('formContainer');
    const formName = document.getElementById('name');
    const formRole = document.getElementById('role');
    const formAvailability = document.getElementById('availability');
    const formUsia = document.getElementById('usia');
    const formLokasi = document.getElementById('lokasi');
    const formExperience = document.getElementById('experience');
    const formEmail = document.getElementById('email');
    const editBtn = document.getElementById('editBtn');
    const profileForm = document.getElementById('profileForm');

    // Function to populate form with profile data
    function populateForm() {
        formName.value = profileName.textContent.trim();
        formRole.value = profileRole.textContent.trim();
        formAvailability.value = profileAvailability.textContent.trim();
        formUsia.value = profileUsia.textContent.replace(' Tahun', '').trim();
        formLokasi.value = profileLokasi.textContent.trim();
        formExperience.value = profileExperience.textContent.replace(' Tahun Pengalaman', '').trim();
        formEmail.value = profileEmail.textContent.trim();
    }

    // Function to update profile with form data
    function updateProfile() {
        profileName.textContent = formName.value;
        profileRole.textContent = formRole.value;
        profileAvailability.textContent = formAvailability.value;
        profileUsia.textContent = formUsia.value + ' Tahun';
        profileLokasi.textContent = formLokasi.value;
        profileExperience.textContent = formExperience.value + ' Tahun Pengalaman';
        profileEmail.textContent = formEmail.value;

        // Save to Local Storage
        localStorage.setItem('profileData', JSON.stringify({
            name: formName.value,
            role: formRole.value,
            availability: formAvailability.value,
            usia: formUsia.value,
            lokasi: formLokasi.value,
            experience: formExperience.value,
            email: formEmail.value
        }));
    }

    // Load data from Local Storage
    const savedProfile = JSON.parse(localStorage.getItem('profileData'));
    if (savedProfile) {
        profileName.textContent = savedProfile.name;
        profileRole.textContent = savedProfile.role;
        profileAvailability.textContent = savedProfile.availability;
        profileUsia.textContent = savedProfile.usia + ' Tahun';
        profileLokasi.textContent = savedProfile.lokasi;
        profileExperience.textContent = savedProfile.experience + ' Tahun Pengalaman';
        profileEmail.textContent = savedProfile.email;
    }

    // Handle Edit button click to show the form
    editBtn.addEventListener('click', () => {
        populateForm();  // Populate form with existing profile data
        formContainer.style.display = 'block';  // Show the form
    });

    // Handle form submission
    profileForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent default form submission

        // Simple validation example
        if (!formEmail.value.includes('@')) {
            alert('Please enter a valid email.');
            return;
        }

        updateProfile();  // Update profile section
        formContainer.style.display = 'none';  // Hide the form after submission
    });
});
