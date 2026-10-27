
/* =========================
   SURROUNDINGS SLIDER
========================= */

const slides = document.querySelectorAll(".surrounding-slide");
const dots = document.querySelectorAll(".slider-dot");

let currentSlide = 0;
let slideTimer;


/* SHOW SELECTED SLIDE */

function showSlide(index) {

    if (slides.length === 0) {
        return;
    }

    slides.forEach(function (slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function (dot) {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");

    if (dots[index]) {
        dots[index].classList.add("active");
    }

    currentSlide = index;
}


/* MOVE TO NEXT SLIDE */

function nextSlide() {

    let next = currentSlide + 1;

    if (next >= slides.length) {
        next = 0;
    }

    showSlide(next);
}


/* AUTOMATIC SLIDE CHANGE AND DOT CONTROLS */

if (slides.length > 0) {

    slideTimer = setInterval(nextSlide, 4000);

    dots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {

            showSlide(index);

            clearInterval(slideTimer);

            slideTimer = setInterval(nextSlide, 4000);

        });

    });

}


/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");


/* OPEN AND CLOSE MENU */

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("active");

        const isOpen = mainNav.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });


    /* CLOSE MENU WHEN A LINK IS CLICKED */

    mainNav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}
