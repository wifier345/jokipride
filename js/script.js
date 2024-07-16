// toggle
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const searchForm = document.querySelector('.search-after');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    searchBox.focus();
};

// click diluar nav
const hamburger = document.querySelector('#hamburger-menu');
const search = document.querySelector('#search-btn')

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

document.addEventListener('click', function (e) {
    if (!search.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});

// slider
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto move slides every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);

// modal
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButton = document.querySelectorAll('.item-detail-button');

itemDetailButton.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
});



// cllose
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none'
    e.preventDefault()
}

document.querySelector('.to-order').onclick = (e) => {
    itemDetailModal.style.display = 'none'
}

// click diluar
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
}