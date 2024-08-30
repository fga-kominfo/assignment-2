let form = document.getElementById("input-form");
form.style.display = "none";

function editForm(){
    if (form.style.display === "none"){
        form.style.display = "block";
    }
    else{
        form.style.display = "none";
    }

    let nama = document.getElementById('pNama').innerHTML;
    let role = document.getElementById('pRole').innerHTML;
    let availability = document.getElementById('pAvailability').innerHTML;
    let usia = document.getElementById('pUsia').innerHTML;
    let lokasi = document.getElementById('pLokasi').innerHTML;
    let experience= document.getElementById('pExperience').innerHTML;
    let email = document.getElementById('pEmail').innerHTML;
    

    document.getElementById("nama").value = nama
    document.getElementById("role").value = role
    document.getElementById("availability").value = availability
    document.getElementById("usia").value = usia
    document.getElementById("lokasi").value = lokasi
    document.getElementById("years_experience").value = experience
    document.getElementById("email").value = email
}

function submitForm(event){
    let newName = document.getElementById('nama').value;
    let newRole = document.getElementById('role').value;
    let newAvailability = document.getElementById('availability').value;
    let newUsia = document.getElementById('usia').value;
    let newLokasi = document.getElementById('lokasi').value;
    let newExperience = document.getElementById('years_experience').value;
    let newEmail = document.getElementById('email').value;

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