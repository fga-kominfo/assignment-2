$(document).ready(function () {
    $('#showFormBtn').click(function () {
        // Change the input value
        $('#name').val($('#saveName').text());
        $('#role').val($('#saveRole').text());
        $('#availability').val($('#saveAvailability').text().trim());
        $('#age').val($('#saveAge').text().trim());
        $('#location').val($('#saveLocation').text().trim());
        $('#email').val($('#saveEmail').text().trim());

        // Get the number only in the exp text
        let experienceText = $('#saveExperience').text().trim();
        let experienceNumber = experienceText.replace(/\D/g, ''); // Remove non-digits
        $('#experience').val(experienceNumber);

        // Toggle the collapse div
        $('#formSection').slideToggle(300, function () {
            if ($(this).is(':visible')) {
                $('#showFormBtn').text('Cancel');
            } else {
                $('#showFormBtn').text('Edit');
            }
        });
    });

    $('#myForm').submit(function (e) {
        e.preventDefault();

        // Save all the input data
        $('#saveName').text($('#name').val());
        $('#saveRole').text($('#role').val());
        $('#saveAvailability').text($('#availability').val());
        $('#saveAge').text($('#age').val());
        $('#saveLocation').text($('#location').val());
        $('#saveEmail').text($('#email').val());
        $('#saveExperience').text($('#experience').val() + ' Year(s)');

        // Hide/reset the form after saving
        $('#formSection').slideUp(300);
        $('#showFormBtn').text('Edit');
    });
});