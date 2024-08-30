const form = document.getElementById("input-form");
form.style.display = "none";

function editForm(){
    if (form.style.display === "none"){
        form.style.display = "block";
    }
    else{
        form.style.display = "none";
    }

    const nama = document.getElementById('pNama').innerHTML;
    const role = document.getElementById('pRole').innerHTML;
    const availability = document.getElementById('pAvailability').innerHTML;
    const usia = document.getElementById('pUsia').innerHTML;
    const lokasi = document.getElementById('pLokasi').innerHTML;
    const experience= document.getElementById('pExperience').innerHTML;
    const email = document.getElementById('pEmail').innerHTML;
    

    document.getElementById("nama").value = nama
    document.getElementById("role").value = role
    document.getElementById("availability").value = availability
    document.getElementById("usia").value = usia
    document.getElementById("lokasi").value = lokasi
    document.getElementById("years_experience").value = experience
    document.getElementById("email").value = email
}

function submitForm(event){
    const newName = document.getElementById('nama').value;
    const newRole = document.getElementById('role').value;
    const newAvailability = document.getElementById('availability').value;
    const newUsia = document.getElementById('usia').value;
    const newLokasi = document.getElementById('lokasi').value;
    const newExperience = document.getElementById('years_experience').value;
    const newEmail = document.getElementById('email').value;

    document.getElementById("pNama").innerHTML = newName;
    document.getElementById("pRole").innerHTML = newRole;
    document.getElementById("pAvailability").innerHTML = newAvailability;
    document.getElementById("pUsia").innerHTML = newUsia;
    document.getElementById("pLokasi").innerHTML = newLokasi;
    document.getElementById("pExperience").innerHTML = newExperience;
    document.getElementById("pEmail").innerHTML = newEmail;

    form.style.display = "none";
    event.preventDefault();

}