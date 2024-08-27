document
  .querySelector("#form-biodata")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const profileData = {
      name: document.getElementById("nama").value,
      role: document.getElementById("role").value,
      availability: document.getElementById("availability").value,
      usia: document.getElementById("usia").value,
      lokasi: document.getElementById("lokasi").value,
      experience: document.getElementById("experience").value,
      email: document.getElementById("email").value,
    };

    for (const key in profileData) {
      document.getElementById(`profile-${key}`).textContent = profileData[key];
    }

    localStorage.setItem("profileData", JSON.stringify(profileData));

    alert("Success added");
    this.reset();
  });
