// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Hospital Management Website Loaded");

    // Handling appointment bookings
    const bookAppointment = () => {
        alert("Appointment booked successfully!");
    }

    // Handling patient login
    const loginPatient = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if(username === "patient" && password === "1234") {
            alert("Login successful!");
        } else {
            alert("Invalid credentials!");
        }
    }

    // Add more interactive features as needed
});
