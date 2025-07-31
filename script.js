// script.js

// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000);
showSlide(currentSlide);

// Hamburger menu toggle
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Menu item popup
const menuItems = document.querySelectorAll('.menu-item');
const popup = document.querySelector('.menu-popup');
const popupContent = document.querySelector('.popup-content');
const popupImg = popupContent.querySelector('img');
const popupTitle = popupContent.querySelector('h3');
const popupDesc = popupContent.querySelector('p');
const popupClose = popupContent.querySelector('button');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    const title = item.querySelector('h3').textContent;
    const desc = item.querySelector('p').textContent;

    popupImg.src = imgSrc;
    popupTitle.textContent = title;
    popupDesc.textContent = desc;
    popup.classList.add('active');
  });
});

popupClose.addEventListener('click', () => {
  popup.classList.remove('active');
});
