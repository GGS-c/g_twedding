// ================= GLOBAL LIGHTBOX =================

const images = [
    "images/sample1.jpg",
    "images/sample2.webp",
    "images/sample3.avif",
    "images/sample4.jpeg",
    "images/sample5.jpg",
    "images/sample6.jpeg",
    "images/sample7.jpg",
    "images/sample8.jpeg",
    "images/sample9.avif",
    "images/sample10.avif",
    "images/sample8.webp",
    "images/sample8.webp"
];

function openLightbox(index) {
    const lightbox = document.getElementById("lightbox");
    const container = document.getElementById("lightbox-img");

    lightbox.style.display = "block";
    container.innerHTML = "";

    for (let i = index; i < images.length; i++) {
        let img = document.createElement("img");
        img.src = images[i];
        container.appendChild(img);
    }
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// ================= MAIN SCRIPT =================

document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navigation Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navUl = document.getElementById('nav-ul');

    if (mobileBtn && navUl) {
        mobileBtn.addEventListener('click', () => {
            navUl.classList.toggle('show');
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    const snapContainer = document.querySelector('.snap-container');

    if (snapContainer) {
        snapContainer.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', snapContainer.scrollTop > 50);
        });
    } else {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // Fade-in animation
    const focusSections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.15 });

    focusSections.forEach(section => {
        observer.observe(section);
    });

});
// ================= HEADER SLIDESHOW =================

// const headerImages = [
//     "images/sample1.jpg",
//     "images/sample2.webp",
//     "images/sample3.avif",
//     "images/sample4.jpeg",
//     "images/sample5.jpg"
// ];

// let currentIndex = 0;

// const header = document.getElementById("gallery-header");

// if (header) {
//     // First image set
//     header.style.backgroundImage = `url('${headerImages[0]}')`;

//     setInterval(() => {
//         currentIndex = (currentIndex + 1) % headerImages.length;
//         header.style.backgroundImage = `url('${headerImages[currentIndex]}')`;
//     }, 2000); // 2 sec
// }
const slides = document.querySelectorAll(".header-slide");
let current = 0;

function showNextSlide() {
    slides[current].classList.remove("active");
    slides[current].classList.add("prev");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");

    // reset previous slides
    setTimeout(() => {
        slides.forEach(slide => slide.classList.remove("prev"));
    }, 1000);
}

// Auto slideshow (2 sec pause + slide)
setInterval(showNextSlide, 3000);