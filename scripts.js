document.addEventListener("DOMContentLoaded", function () {
  var toastLiveExample = document.getElementById("liveToast");
  var toast = new bootstrap.Toast(toastLiveExample);

  document
    .getElementById("userForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        role: document.getElementById("role").value,
        availability: document.getElementById("availability").value,
        age: document.getElementById("age").value,
        location: document.getElementById("location").value,
        experience: document.getElementById("experience").value,
      };

      const isValid = Object.values(userData).every(
        (value) => value.trim() !== ""
      );

      if (isValid) {
        // Simpan data ke Local Storage
        localStorage.setItem("userData", JSON.stringify(userData));
        toast.show();
        document.getElementById("userForm").reset();

        document.getElementById("displayName").textContent = userData.name;
        document.getElementById(
          "displayEmail"
        ).textContent = `Email : ${userData.email}`;
        document.getElementById("displayRole").textContent = userData.role;
        document.getElementById(
          "displayAvailability"
        ).textContent = `Availability : ${userData.availability}`;
        document.getElementById(
          "displayAge"
        ).textContent = `Age : ${userData.age} Year`;
        document.getElementById(
          "displayLocation"
        ).textContent = `Location : ${userData.location}`;
        document.getElementById(
          "displayExperience"
        ).textContent = `Experience : ${userData.experience}`;
      }
    });
});
