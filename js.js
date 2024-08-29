document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
    // event.stopPropagation(); // Prevents the browser from scrolling to the top of the page

    // Get the value from the input field
    const newName = document.getElementById('exampleInputNama1').value;
    const newRole = document.getElementById('exampleInputRole1').value;
    const newAvailability = document.getElementById('exampleInputAvailability1').value;
    const newUsia = document.getElementById('exampleInputUsia1').value;
    const newLokasi = document.getElementById('exampleInputLokasi1').value;
    const newPengalaman = document.getElementById('exampleInputYears1').value;
    const newEmail = document.getElementById('exampleInputEmail1').value;

    // Update the profile name in container-1
    document.getElementById('profileName').textContent = newName;
    document.getElementById('role').textContent = newRole;
    document.getElementById('availability').textContent = newAvailability;
    document.getElementById('usia').textContent = newUsia + ' ' + 'Tahun';
    document.getElementById('lokasi').textContent = newLokasi;
    document.getElementById('pengalaman').textContent = newPengalaman + ' ' + 'Tahun';
    document.getElementById('email').textContent = newEmail;

    // Clear the form inputs
    document.getElementById('profileForm').reset();
    
    // Show a pop-up alert
    alert('Data telah Update');

    // To scroll the page back to its original position after submitting the form
    window.scrollTo(0, document.body.scrollTop);
    
});