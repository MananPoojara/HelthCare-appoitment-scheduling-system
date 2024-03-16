function fetchAppointments() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;

    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Date: ${date}`);
}

// Call the function when the form is submitted
const form = document.querySelector('form.php-email-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    fetchAppointments();
});
