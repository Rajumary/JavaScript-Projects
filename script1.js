$(document).ready(function () {
    // Handle form submission
    $('#movieRegistrationForm').on('submit', function (e) {
        e.preventDefault();

        // Get form data
        const name = $('#name').val();
        const email = $('#email').val();
        const movie = $('#movie').val();
        const showtime = $('#showtime').val();

        // Basic validation (you can expand this)
        if (name && email && movie && showtime) {
            // Show confirmation message
            $('#confirmationMessage').removeClass('d-none');
            $('#movieRegistrationForm')[0].reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
