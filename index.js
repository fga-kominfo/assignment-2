document
  .getElementById("profile-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil nilai dari form
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const availability = document.getElementById("availability").value;
    const age = document.getElementById("age").value;
    const location = document.getElementById("location").value;
    const experience = document.getElementById("experience").value;
    const email = document.getElementById("email").value;

    // Validasi input
    if (
      !name ||
      !role ||
      !availability ||
      !age ||
      !location ||
      !experience ||
      !email
    ) {
      alert("All fields are required!");
      return;
    }

    if (isNaN(age) || isNaN(experience)) {
      alert("Age and Experience should be numbers!");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    // Update profile
    document.getElementById("profile-name").textContent = name;
    document.getElementById("profile-role").textContent = role;
    document.getElementById("profile-availability").textContent = availability;
    document.getElementById("profile-age").textContent = age;
    document.getElementById("profile-location").textContent = location;
    document.getElementById("profile-experience").textContent =
      experience + " Years";
    document.getElementById("profile-email").textContent = email;
  });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
