document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitButton').addEventListener('click', function() {
      // Get values from input fields
      var name = document.getElementById('inputName').value;
      var role = document.getElementById('inputRole').value;
      var availability = document.getElementById('inputAvailability').value;
      var age = document.getElementById('inputAge').value;
      var location = document.getElementById('inputLocation').value;
      var experience = document.getElementById('inputExperience').value;
      var email = document.getElementById('inputEmail').value;
  
      // Ensure email ends with @gmail.com
      var fullEmail = email + '@gmail.com';
  
      // Update profile section with new values
      document.getElementById('profileName').textContent = name;
      document.getElementById('profileRole').textContent = role;
      document.getElementById('profileAvailability').textContent = availability;
      document.getElementById('profileAge').innerHTML = age + ' Years Old';
      document.getElementById('profileLocation').textContent = location;
      document.getElementById('profileExperience').textContent = experience;
      document.getElementById('profileEmail').textContent = fullEmail;
  
      // Optional: Clear input fields after submission
      document.getElementById('inputName').value = '';
      document.getElementById('inputRole').value = '';
      document.getElementById('inputAvailability').value = '';
      document.getElementById('inputAge').value = '';
      document.getElementById('inputLocation').value = '';
      document.getElementById('inputExperience').value = '';
      document.getElementById('inputEmail').value = '';
    });
  });
  