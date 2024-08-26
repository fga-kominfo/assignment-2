document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("profile-form");
  form.style.display = "none";
  // Handle button clicks
  document.getElementById("edit-btn").addEventListener("click", function () {
    form.style.display = "block";
  });

  document.getElementById("resume-btn").addEventListener("click", function () {
    alert("Resume button clicked!");
  });

  // Handle form data display
  document
    .getElementById("show-data-btn")
    .addEventListener("click", function () {
      const name = document.getElementById("name").value;
      const role = document.getElementById("role").value;
      const availability = document.getElementById("availability").value;
      const age = document.getElementById("age").value;
      const location = document.getElementById("location").value;
      const experience = document.getElementById("experience").value;
      const email = document.getElementById("email").value;

      // Update profile information section
      document.getElementById("name-data").textContent = name;
      document.getElementById("role-data").textContent = role;
      document.getElementById("availability-data").textContent = availability;
      document.getElementById("age-data").textContent = age;
      document.getElementById("location-data").textContent = location;
      document.getElementById("experience-data").textContent = experience;
      document.getElementById("email-data").textContent = email;

      // Optionally show a confirmation
      document.getElementById("result-container").innerHTML =
        "<p>Profile information updated successfully!</p>";
    });
});
