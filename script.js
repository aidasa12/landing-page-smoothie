// script.js

// HERO SLIDESHOW
let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000);
showSlide(currentSlide);

// HAMBURGER MENU
const toggleBtn = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// MENU ITEM POPUP
const menuItems = document.querySelectorAll(".menu-item");

// Buat container popup jika belum ada
let popup = document.querySelector(".menu-popup");
if (!popup) {
  popup = document.createElement("div");
  popup.className = "menu-popup";
  popup.innerHTML = `
    <div class="popup-content">
      <img src="" alt="Menu Image">
      <h3></h3>
      <p class="komposisi"></p>
      <p class="manfaat"></p>
      <button>Tutup</button>
    </div>
  `;
  document.body.appendChild(popup);
}

const popupImg = popup.querySelector("img");
const popupTitle = popup.querySelector("h3");
const popupKomposisi = popup.querySelector(".komposisi");
const popupManfaat = popup.querySelector(".manfaat");
const popupClose = popup.querySelector("button");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const imgSrc = item.querySelector("img").src;
    const title = item.querySelector("h3").textContent;
    const komposisi = item.querySelector("p").textContent;
    const manfaat = item.querySelector(".manfaat").textContent;

    popupImg.src = imgSrc;
    popupTitle.textContent = title;
    popupKomposisi.textContent = komposisi;
    popupManfaat.textContent = manfaat;
    popup.classList.add("active");
  });
});

popupClose.addEventListener("click", () => {
  popup.classList.remove("active");
});

// FORM HANDLER
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.querySelector("input[type='text']").value;
  const email = this.querySelector("input[type='email']").value;
  const message = this.querySelector("textarea").value;

  const output = `
    <h3>Hasil Form:</h3>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;

  document.getElementById("formOutput").innerHTML = output;

  this.reset();
});
