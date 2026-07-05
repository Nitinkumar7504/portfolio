// ==============================
// Active Navbar Link on Scroll
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === current + ".html") {
            link.classList.add("active");
        }

        if (current === "" && link.getAttribute("href") === "index.html") {
            link.classList.add("active");
        }

    });

});


// ==============================
// Sticky Header
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "#0b1120";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
    } else {
        header.style.background = "#111827";
        header.style.boxShadow = "none";
    }

});


// ==============================
// Scroll Reveal Animation
// ==============================

const revealElements = document.querySelectorAll(
    ".skill-card, .card, .project, .home-content, .home-img"
);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = ".8s";

});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ==============================
// Typing Effect
// ==============================

const typingElement = document.querySelector(".home-content h3");

if (typingElement) {

    const roles = [
        "Full Stack Developer",
        "MERN Stack Developer",
        "Android Developer",
        "React Developer"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {

        const currentRole = roles[roleIndex];

        if (!deleting) {

            typingElement.textContent =
                currentRole.substring(0, charIndex++);

            if (charIndex > currentRole.length) {
                deleting = true;
                setTimeout(type, 1200);
                return;
            }

        } else {

            typingElement.textContent =
                currentRole.substring(0, charIndex--);

            if (charIndex < 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }

        }

        setTimeout(type, deleting ? 60 : 120);

    }

    type();

}


// ==============================
// Back To Top Button
// ==============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#38bdf8";
topButton.style.color = "#fff";
topButton.style.fontSize = "24px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "1000";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==============================
// Button Hover Animation
// ==============================

const buttons = document.querySelectorAll(".btn, .btn2");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });

});


// ==============================
// Image Hover Effect
// ==============================

const profile = document.querySelector(".home-img img");

if (profile) {

    profile.addEventListener("mouseenter", () => {
        profile.style.transform = "scale(1.05)";
        profile.style.transition = ".4s";
    });

    profile.addEventListener("mouseleave", () => {
        profile.style.transform = "scale(1)";
    });

}