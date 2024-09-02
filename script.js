// elemen form dan elemen-elemen input
const form = document.querySelector('form');
const nameField = document.getElementById('name');
const roleField = document.getElementById('role');
const availabilityField = document.getElementById('availability');
const ageField = document.getElementById('age');
const locationField = document.getElementById('location');
const experienceField = document.getElementById('experience');
const emailField = document.getElementById('email');

// update elemen
const nameDisplay = document.querySelector('.card-title');
const roleDisplay = document.querySelector('.card-text');
const bioSections = document.querySelectorAll('.bio.d-flex.flex-column');
const availabilityDisplay = bioSections[1].children[0];
const ageDisplay = bioSections[1].children[1];
const locationDisplay = bioSections[1].children[2];
const experienceDisplay = bioSections[1].children[3];
const emailDisplay = bioSections[1].children[4];

// event listener submit
form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  if (
    nameField.value.trim() === '' ||
    roleField.value.trim() === '' ||
    availabilityField.value.trim() === '' ||
    ageField.value.trim() === '' ||
    locationField.value.trim() === '' ||
    experienceField.value.trim() === '' ||
    emailField.value.trim() === ''
  ) {
    alert('Harap isi semua field sebelum submit!');
    return; 
  }
  
  // update tampilan dari form value
  nameDisplay.textContent = nameField.value;
  roleDisplay.textContent = roleField.value;
  availabilityDisplay.textContent = availabilityField.value;
  ageDisplay.textContent = ageField.value + ' Tahun';
  locationDisplay.textContent = locationField.value;
  experienceDisplay.textContent = experienceField.value + ' Tahun';
  emailDisplay.textContent = emailField.value;
  
  form.reset();
});
