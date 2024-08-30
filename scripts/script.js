let value = {
  id: 1,
  name: "Rimba Sahara",
  role: "Front End Designer",
  avail: "Full Time/Part Time",
  age: 25,
  location: "Cilegon, Banten, Indonesia",
  experience: "2 Years",
  email: "rimbasahara76@gmail.com",
};

document.getElementById("showName").innerHTML = value.name;
document.getElementById("showRole").innerHTML = value.role;
document.getElementById("showAvail").innerHTML = value.avail;
document.getElementById("showAge").innerHTML = value.age;
document.getElementById("showLoc").innerHTML = value.location;
document.getElementById("showExp").innerHTML = value.experience;
document.getElementById("showEmail").innerHTML = value.email;

// const idName = document.getElementById("idName");
// const idRole = document.getElementById("idRole");
// const idAvailability = document.getElementById("idAvailability");
// const idAge = document.getElementById("idAge");
// const idLocation = document.getElementById("idLocation");
// const idExperience = document.getElementById("idExperience");
// const idEmail = document.getElementById("idEmail");

// function renderText() {
//   value.name.innerText = nameed;
//   console.log(nameed, "<><><><><>");
// }

// function submitForm() {
//   const inputName = document.getElementById("idName");
//   const inputValue = inputName.value;
//   //   console.log(inputValue);
//   if (inputValue) {
//     // value = {
//     //   ...value,
//     //   name: inputValue,
//     // };
//     document.getElementById("showName").textContent = inputValue;
//   }
// }
// document.getElementById("output").textContent = "input value : " + inputValue;
//   if (document.getElementById("myForm").submit()) {
//     value.name.innerText = document.getElementById("idName");
//     console.log(document.getElementById("idName"));
//   }
//   console.log(document.getElementById("myForm"));
//   alert(value.name, "The form was submitted");
//   console.log(value.name);

function submitForm() {
  const inputName = document.getElementById("idName").value;
  const inputRole = document.getElementById("idRole").value;
  const inputAvail = document.getElementById("idAvailability").value;
  const inputAge = document.getElementById("idAge").value;
  const inputLocation = document.getElementById("idLocation").value;
  const inputExperience = document.getElementById("idExperience").value;
  const inputEmail = document.getElementById("idEmail").value;

  if (inputName) {
    value.name = inputName;
  }
  if (inputRole) {
    value.role = inputRole;
  }
  if (inputAvail) {
    value.avail = inputAvail;
  }
  if (inputAge) {
    value.age = inputAge;
  }
  if (inputLocation) {
    value.location = inputLocation;
  }
  if (inputExperience) {
    value.experience = inputExperience;
  }
  if (inputEmail) {
    value.email = inputEmail;
  }
  document.getElementById("showName").textContent = value.name;
  document.getElementById("showRole").textContent = value.role;
  document.getElementById("showAvail").textContent = value.avail;
  document.getElementById("showAge").textContent = value.age;
  document.getElementById("showLoc").textContent = value.location;
  document.getElementById("showExp").textContent = value.experience;
  document.getElementById("showEmail").textContent = value.email;
}
