"use strict";

const contactForm = document.querySelector("form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Thank you! Your message has been submitted.");
    });
}