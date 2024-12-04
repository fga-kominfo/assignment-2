const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const [
        {value: inputName}, 
        {value: inputRole},
        {value: inputAvailable},
        {value: inputAge},
        {value: inputLocation},
        {value: inputYearExperience},
        {value: inputEmail},
        ] = form.querySelectorAll('input');

  document.querySelector("#profile-name").innerText = inputName;
  document.querySelector("#profile-role").innerText = inputRole;
  document.querySelector("#profile-availability").innerText = inputAvailable;
  document.querySelector("#profile-age").innerText = inputAge;
  document.querySelector("#profile-location").innerText = inputLocation;
  document.querySelector("#profile-year-experience").innerText = inputYearExperience + ' Year';
  document.querySelector("#profile-email").innerText = inputEmail;
});