function TampilkanData() {
  const name = document.getElementById('name').innerText;
  const role = document.getElementById('role').innerText;
  const availability = document.getElementById('availability').innerText;
  const age = document.getElementById('age').innerText;
  const location = document.getElementById('location').innerText;
  const yearExperience = document.getElementById('yearExperience').innerText;
  const email = document.getElementById('email').innerText;

  document.getElementById('inputName').value = name;
  document.getElementById('inputRole').value = role;
  document.getElementById('inputAvailability').value = availability;
  document.getElementById('inputAge').value = age;
  document.getElementById('inputLocation').value = location;
  document.getElementById('inputYearExperience').value = yearExperience;
  document.getElementById('inputEmail').value = email;
}

function updateProfile() {
  const name = document.getElementById('inputName').value;
  const role = document.getElementById('inputRole').value;
  const availability = document.getElementById('inputAvailability').value;
  const age = document.getElementById('inputAge').value;
  const location = document.getElementById('inputLocation').value;
  const yearExperience = document.getElementById('inputYearExperience').value;
  const email = document.getElementById('inputEmail').value;

  document.getElementById('name').innerText = name;
  document.getElementById('role').innerText = role;
  document.getElementById('availability').innerText = availability;
  document.getElementById('age').innerText = age;
  document.getElementById('location').innerText = location;
  document.getElementById('yearExperience').innerText = yearExperience;
  document.getElementById('email').innerText = email;
}

window.onload = TampilkanData;
document.getElementById('submit').addEventListener('click', updateProfile);
