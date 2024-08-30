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

function actionEdit() {
  document.getElementById("name").value =
    document.getElementById("screenName").innerHTML;
  document.getElementById("role").value =
    document.getElementById("screenRole").innerHTML;
  document.getElementById("availability").value =
    document.getElementById("screenAvailability").innerHTML;
  document.getElementById("usia").value =
    document.getElementById("screenAge").innerHTML;
  document.getElementById("lokasi").value =
    document.getElementById("screenLocation").innerHTML;
  document.getElementById("experience").value =
    document.getElementById("screenExperience").innerHTML;
  document.getElementById("email").value =
    document.getElementById("screenEmail").innerHTML;
}
