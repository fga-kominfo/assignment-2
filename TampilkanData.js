document.getElementById("editButton").addEventListener("click", function () {
  const formContainer = document.getElementById("portfolioFormContainer");
  formContainer.classList.toggle("d-none"); // Toggle visibility of the form
});

document.getElementById("portfolioForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const availability = document.getElementById("availability").value;
  const age = document.getElementById("age").value;
  const location = document.getElementById("location").value;
  const experience = document.getElementById("experience").value;
  const email = document.getElementById("email").value;

  document.getElementById("displayName").textContent = name;
  document.getElementById("displayRole").textContent = role;
  document.getElementById("displayAvailability").textContent = availability;
  document.getElementById("displayAge").textContent = age;
  document.getElementById("displayLocation").textContent = location;
  document.getElementById("displayExperience").textContent = experience + " Years";
  document.getElementById("displayEmail").textContent = email;

  document.getElementById("profileCard").scrollIntoView({ behavior: "smooth", block: "center" });

  document.getElementById("portfolioFormContainer").classList.add("d-none");
});
