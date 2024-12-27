// Website Visitors Counter Animation
document.addEventListener('DOMContentLoaded', () => {
    const counter = document.querySelector('.count');
    let count = 0;
    const target = +counter.getAttribute('data-target'); // Get target count from data attribute

    const countInterval = setInterval(() => {
        count++;
        counter.innerText = count;

        if (count === target) {
            clearInterval(countInterval);
        }
    }, 1000 / target); // Adjust interval for speed
});

let currentSlide = 0;

function openSlider(index) {
    currentSlide = index;
    const sliderModal = document.getElementById('sliderModal');
    sliderModal.style.display = 'flex';
    showSlide(currentSlide);
}

function closeSlider() {
    const sliderModal = document.getElementById('sliderModal');
    sliderModal.style.display = 'none';
}

function changeSlide(direction) {
    currentSlide += direction;
    const slides = document.querySelectorAll('.slide');
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Loop to last slide
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Loop to first slide
    }
    showSlide(currentSlide);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}