function toggleEdit() {
  const profileSection = document.getElementById("profile");
  const formSection = document.getElementById("form");

  if (profileSection.style.display === "none") {
    profileSection.style.display = "block";
    formSection.style.display = "none";
  } else {
    profileSection.style.display = "none";
    formSection.style.display = "block";
  }
}

document
  .getElementById("edit-profile-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    const fields = [
      "name",
      "role",
      "availability",
      "age",
      "location",
      "experience",
      "email",
    ];
    fields.forEach(function (field) {
      const input = document.getElementById(field);
      if (input.value.trim() === "") {
        input.classList.add("is-invalid");
        isValid = false;
      } else {
        input.classList.remove("is-invalid");
      }
    });

    if (isValid) {
      document.getElementById("display-name").innerText =
        document.getElementById("name").value;
      document.getElementById("display-role").innerText =
        document.getElementById("role").value;
      document.getElementById("display-availability").innerText =
        document.getElementById("availability").value;
      document.getElementById("display-age").innerText =
        document.getElementById("age").value;
      document.getElementById("display-location").innerText =
        document.getElementById("location").value;
      document.getElementById("display-experience").innerText =
        document.getElementById("experience").value + " Tahun";
      document.getElementById("display-email").innerText =
        document.getElementById("email").value;

      toggleEdit();
    }
  });
