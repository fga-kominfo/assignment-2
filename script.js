function updateProfile(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const availability = document.getElementById("availability").value;
  const age = document.getElementById("usia").value;
  const location = document.getElementById("lokasi").value;
  const experience = document.getElementById("experience").value;
  const email = document.getElementById("email").value;

  document.getElementById("screenName").innerHTML = name;
  document.getElementById("screenRole").innerHTML = role;
  document.getElementById("screenAvailability").innerHTML = availability;
  document.getElementById("screenAge").innerHTML = age;
  document.getElementById("screenLocation").innerHTML = location;
  document.getElementById("screenExperience").innerHTML = experience;
  document.getElementById("screenEmail").innerHTML = email;
}
