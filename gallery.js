
/* =========================
   NAVBAR SCROLL
========================= */

const navbar = document.querySelector(".navbar");


if (navbar) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

}


/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");


if (menuToggle && mainNav) {

    /* OPEN AND CLOSE MENU */

    menuToggle.addEventListener("click", function () {

        menuToggle.classList.toggle("active");
        mainNav.classList.toggle("active");

        const isOpen = menuToggle.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });


    /* CLOSE MENU WHEN A LINK IS CLICKED */

    mainNav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            menuToggle.classList.remove("active");
            mainNav.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    /* CLOSE MENU WHEN CLICKING OUTSIDE */

    document.addEventListener("click", function (event) {

        if (
            !menuToggle.contains(event.target) &&
            !mainNav.contains(event.target)
        ) {

            menuToggle.classList.remove("active");
            mainNav.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

}


/* =========================
   LOAD MORE PHOTOS
========================= */

const loadMoreButton = document.querySelector("#loadMore");
const extraPhotos = document.querySelectorAll(".extra-photo");


if (loadMoreButton) {

    loadMoreButton.addEventListener("click", function () {

        extraPhotos.forEach(function (photo) {

            photo.style.display = "block";

        });

        loadMoreButton.style.display = "none";

    });

}


/* =========================
   CURRENT YEAR
========================= */

const year = document.querySelector(".current-year");


if (year) {

    year.textContent = new Date().getFullYear();

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

