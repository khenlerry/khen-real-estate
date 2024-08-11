// servicepage.js

let slideIndex = 0;

const showSlides = (n) => {
    const slides = document.querySelectorAll('.slides img');
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
};

const plusSlides = (n) => {
    showSlides(slideIndex += n);
};

document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
document.querySelector('.next').addEventListener('click', () => plusSlides(1));

// Initialize the slider
showSlides(slideIndex);
