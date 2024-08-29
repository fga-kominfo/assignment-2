/*VARIABLE TO SHOW UP THE FORM*/
const formContainer = document.querySelector(".form-container");
const editBtn = document.querySelector("#editButton");

/*VARIABLE OF FORM USER PROFILE*/
const formProfileUser = document.querySelector("#formProfileUser");


/*SHOW FORM WHEN EDIT BUTTON CLICKED*/
editBtn.addEventListener('click', () => {
    formContainer.style.display = formContainer.style.display === "none" ? "block":"none";
});

/*FORM INPUT USER*/
formProfileUser.addEventListener('submit', (e) => {
    e.preventDefault();

    /*VARIABLE IDs IN THE PROFILE SECTION*/
    const profileName = document.querySelector("#profileName");
    const profileRole = document.querySelector("#profileRole");
    const profileAvailability = document.querySelector("#profileAvailability");
    const profileAge = document.querySelector("#profileAge");
    const profileLocation = document.querySelector("#profileLocation");
    const profileExperience = document.querySelector("#profileExperience");
    const profileEmail = document.querySelector("#profileEmail");


    /*VARIABLE IDs IN THE FORM SECTION*/
    let inputName = document.querySelector("#inputName").value.replace(/[^a-zA-Z\s]/g, '');
    const inputRole = document.querySelector("#inputRole").value.replace(/[^a-zA-Z\s]/g, '');
    const inputAvailability = document.querySelector("#inputAvailability").value.replace(/[^a-zA-Z\s]/g, '');
    const inputAge = document.querySelector("#inputAge").value;
    const inputLocation = document.querySelector("#inputLocation").value;
    const inputExperience = document.querySelector("#inputExperience").value;
    const inputEmail = document.querySelector("#inputEmail").value;

    /*SPLIT THE FULL NAME TO MAKE THE LAST NAME ONLY READ THE FIRST ALPHABET*/
    const nameParts = inputName.split(/\s+/);
    profileName.textContent = nameParts.map((part, index) => {
        return index === 0
            ? part.charAt(0).toUpperCase() + part.slice(1).toLowerCase() // FIRST NAME
            : part.charAt(0).toUpperCase() + "."; // LAST NAME WITH "."
    }).join(" ");

    /*SHOW THE OUTPUT IN THE PROFILE SECTION AFTER USER INPUT THE FORM*/
    profileRole.textContent = inputRole;
    profileAvailability.textContent = inputAvailability;
    profileAge.textContent = `${inputAge} Tahun`;
    profileLocation.textContent = inputLocation;
    profileExperience.textContent = `${inputExperience} Tahun`;
    profileEmail.textContent = inputEmail;

    /*HIDE THE FORM AFTER SUBMIT*/
    formContainer.style.display = "none";
})