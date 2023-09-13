// Get the carousel container and slides
const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
    // Hide all slides
    carouselSlides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // Show the current slide
    carouselSlides[index].style.display = 'block';
}

// Function to advance to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    showSlide(currentIndex);
}

// Automatically advance to the next slide every 3 seconds (3000 milliseconds)
setInterval(nextSlide, 3000);

// Initially show the first slide
showSlide(currentIndex);

// JavaScript to handle active tab indication
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach((navLink) => {
            navLink.classList.remove('active');
        });

        // Add active class to the clicked link
        link.classList.add('active');
    });
});

// JavaScript to trigger animation for the About the Company section and images
window.addEventListener('load', () => {
    const companyInfo = document.querySelector('.company-info');
    const companyPhotos = document.querySelectorAll('.company-photos img');

    companyInfo.style.opacity = '1';
    companyInfo.style.transform = 'translateY(0)';

    companyPhotos.forEach((photo) => {
        photo.style.opacity = '1';
        photo.style.transform = 'translateY(0)';
    });
});

