const selectElement = (element) => {
  const el = document.querySelector(element);
  if (el) return el;
  throw new Error(`${element} tidak ditemukan`);
};

const menuToggle = selectElement("#menu-toggle");

const toggleMenu = () => {
  const mobileMenu = selectElement("#nav-menu");
  mobileMenu.classList.toggle("activated");
  menuToggle.classList.toggle("activated");
};

menuToggle.addEventListener("click", toggleMenu);

document.querySelector("#form").addEventListener("submit", function (e) {
  e.preventDefault();
  const btnSubmit = document.querySelector("#btn-submit");
  btnSubmit.disabled = true;
  btnSubmit.value = "SUBMITING..";

  setTimeout(() => {
    handleChanges();
    btnSubmit.disabled = false;
    btnSubmit.value = "SUBMIT";
  }, "1000");
});

const handleChanges = () => {
  const fname = document.querySelector("#fname");
  const frole = document.querySelector("#frole");
  const favailibility = document.querySelector("#favailibility");
  const fage = document.querySelector("#fage");
  const flocation = document.querySelector("#flocation");
  const fyears_experience = document.querySelector("#fyears_experience");
  const femail = document.querySelector("#femail");

  document.querySelector("#name").innerText = fname.value;
  document.querySelector("#role").innerText = frole.value;
  document.querySelector("#availibility").innerText = favailibility.value;
  document.querySelector("#age").innerText = fage.value;
  document.querySelector("#location").innerText = flocation.value;
  document.querySelector("#years_experience").innerText =
    fyears_experience.value;
  document.querySelector("#email").innerText = femail.value;

  fname.value = "";
  frole.value = "";
  favailibility.value = "";
  fage.value = "";
  flocation.value = "";
  fyears_experience.value = "";
  femail.value = "";
};
