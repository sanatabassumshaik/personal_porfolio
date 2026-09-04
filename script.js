"use strict";

/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        const isOpen =
            menuButton.getAttribute("aria-expanded") === "true";

        menuButton.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Open navigation menu"
                : "Close navigation menu"
        );

        navigation.classList.toggle(
            "show-menu",
            !isOpen
        );

    });


    /* Close menu when a navigation link is clicked */

    const navigationLinks =
        navigation.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            navigation.classList.remove(
                "show-menu"
            );

        });

    });

}


/* =========================================
   LIGHT / DARK THEME
========================================= */

const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");


/* Load saved theme */

const savedTheme =
    localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {

    root.setAttribute(
        "data-theme",
        "dark"
    );

}


/* Update theme button */

function updateThemeButton() {

    if (!themeButton) {
        return;
    }

    const isDark =
        root.getAttribute("data-theme") === "dark";


    if (isDark) {

        themeButton.textContent = "☀️";

        themeButton.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

        themeButton.setAttribute(
            "title",
            "Switch to light mode"
        );

        themeButton.setAttribute(
            "aria-pressed",
            "true"
        );

    } else {

        themeButton.textContent = "🌙";

        themeButton.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

        themeButton.setAttribute(
            "title",
            "Switch to dark mode"
        );

        themeButton.setAttribute(
            "aria-pressed",
            "false"
        );

    }

}


/* Set initial button state */

updateThemeButton();


/* Toggle theme */

if (themeButton) {

    themeButton.addEventListener(
        "click",
        function () {

            const isDark =
                root.getAttribute("data-theme") === "dark";


            if (isDark) {

                root.removeAttribute(
                    "data-theme"
                );

                localStorage.setItem(
                    "portfolio-theme",
                    "light"
                );

            } else {

                root.setAttribute(
                    "data-theme",
                    "dark"
                );

                localStorage.setItem(
                    "portfolio-theme",
                    "dark"
                );

            }


            updateThemeButton();

        }
    );

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.querySelector("form");

const formStatus =
    document.querySelector("#form-status");


if (contactForm && formStatus) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            formStatus.textContent =
                "Thank you! Your message has been received.";

            contactForm.reset();

        }
    );

}
