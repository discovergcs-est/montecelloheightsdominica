
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

 // Scroll to Top Button
    const upBtn = document.querySelector('.up');

    function toggleUpBtn() {
      if (window.scrollY > 200) {
        upBtn.classList.add('show-up-btn');
      } else {
        upBtn.classList.remove('show-up-btn');
      }
    }

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    window.addEventListener('scroll', toggleUpBtn);
    upBtn.addEventListener('click', scrollToTop);

//NAV BAR
 
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

function activateNavLink() {
  let scrollY = window.scrollY;
  let pageBottom = scrollY + window.innerHeight;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    // Normal section detection
    if (
      scrollY >= sectionTop &&
      scrollY < sectionTop + sectionHeight
    ) {
      setActive(sectionId);
    }

    // Force last section (CONTACT) when at page bottom
    if (pageBottom >= document.body.scrollHeight - 5) {
      setActive("contact");
    }
  });
}

function setActive(id) {
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${id}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activateNavLink);

