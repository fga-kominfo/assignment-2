const profileElements = {  
  name: document.getElementById("profileName"),  
  role: document.getElementById("profileRole"),  
  availability: document.getElementById("profileAvailability"),  
  usia: document.getElementById("profileUsia"),  
  lokasi: document.getElementById("profileLokasi"),  
  pengalaman: document.getElementById("profilePengalaman"),  
  email: document.getElementById("profileEmail"),  
};  
  
const formElements = {  
  name: document.getElementById("name"),  
  role: document.getElementById("role"),  
  availability: document.getElementById("availability"),  
  usia: document.getElementById("usia"),  
  lokasi: document.getElementById("lokasi"),  
  pengalaman: document.getElementById("yearsExperience"),  
  email: document.getElementById("email"),  
};  
  
function updateProfileData(data) {  
  Object.keys(profileElements).forEach((key) => {  
   profileElements[key].textContent = data[key];  
   formElements[key].value = data[key];  
  });  
}  
  
function updateProfile(event) {  
  event.preventDefault();  
  const updatedData = Object.fromEntries(Object.keys(formElements).map((key) => [key, formElements[key].value]));  
  updateProfileData(updatedData);  
  localStorage.setItem("profileData", JSON.stringify(updatedData));  
}  
  
function tampilkanData() {  
  const savedData = JSON.parse(localStorage.getItem("profileData"));  
  if (savedData) {  
   updateProfileData(savedData);  
  }  
}  
  
tampilkanData();  
  
document.querySelector("form").addEventListener("submit", updateProfile);
