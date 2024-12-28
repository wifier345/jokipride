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

// animation
document.addEventListener("DOMContentLoaded", function() {
    const hiddenElements = document.querySelectorAll('.about');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('about-active');
                observer.unobserve(entry.target);
            }
        });
    });

    hiddenElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const hiddenElements = document.querySelectorAll('.judul');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('judul-active');
                observer.unobserve(entry.target);
            }
        });
    });

    hiddenElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const hiddenElements = document.querySelectorAll('.slider');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-active');
                observer.unobserve(entry.target);
            }
        });
    });

    hiddenElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const hiddenElements = document.querySelectorAll('.services');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('services-active');
                observer.unobserve(entry.target);
            }
        });
    });

    hiddenElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const hiddenElements = document.querySelectorAll('.contact');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('contact-active');
                observer.unobserve(entry.target);
            }
        });
    });

    hiddenElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const hiddenElements = document.querySelectorAll('.order');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('order-active');
                observer.unobserve(entry.target);
            }
        });
    });

    hiddenElements.forEach(element => {
        observer.observe(element);
    });
});


// slider
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides-ppt');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto move slides every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);

// modal
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButton = document.querySelector('.item-detail-button');

itemDetailButton.onclick = (e) => {
itemDetailModal.style.display = 'flex';
e.preventDefault();
};

const itemDetailModal1 = document.querySelector('#item-detail-modal-1');
const itemDetailButton1 = document.querySelector('.item-detail-button-1');

itemDetailButton1.onclick = (e) => {
itemDetailModal1.style.display = 'flex';
e.preventDefault();
};

const itemDetailModal2 = document.querySelector('#item-detail-modal-2');
const itemDetailButton2 = document.querySelector('.item-detail-button-2');

itemDetailButton2.onclick = (e) => {
itemDetailModal2.style.display = 'flex';
e.preventDefault();
};

const itemDetailModal3 = document.querySelector('#item-detail-modal-3');
const itemDetailButton3 = document.querySelector('.item-detail-button-3');

itemDetailButton3.onclick = (e) => {
itemDetailModal3.style.display = 'flex';
e.preventDefault();
};

// cllose
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none'
    e.preventDefault()
}

document.querySelector('.modal-1 .close-icon-1').onclick = (e) => {
    itemDetailModal1.style.display = 'none'
    e.preventDefault()
}

document.querySelector('.modal-2 .close-icon-2').onclick = (e) => {
    itemDetailModal2.style.display = 'none'
    e.preventDefault()
}

document.querySelector('.modal-3 .close-icon-3').onclick = (e) => {
    itemDetailModal3.style.display = 'none'
    e.preventDefault()
}

document.querySelector('.close-icon-0').onclick = (e) => {
    itemDetailModal0.style.display = 'none'
    e.preventDefault()
}

// to order and to-preview
document.querySelector('.to-order').onclick = (e) => {
    itemDetailModal.style.display = 'none'
};
document.querySelector('.to-preview').onclick = (e) => {
    itemDetailModal.style.display = 'none'
};

document.querySelector('.to-order-1').onclick = (e) => {
    itemDetailModal1.style.display = 'none'
    
};
document.querySelector('.to-preview-1').onclick = (e) => {
    itemDetailModal1.style.display = 'none'
};

document.querySelector('.to-order-2').onclick = (e) => {
    itemDetailModal2.style.display = 'none'
    
};
document.querySelector('.to-preview-2').onclick = (e) => {
    itemDetailModal2.style.display = 'none'
};


document.querySelector('.to-order-3').onclick = (e) => {
    itemDetailModal3.style.display = 'none'
};
document.querySelector('.to-preview-3').onclick = (e) => {
    itemDetailModal3.style.display = 'none'
};

// btn order
const itemDetailModal0 = document.querySelector('#item-detail-modal-0');
const itemDetailButton0 = document.querySelector('.item-detail-button-0');

itemDetailButton0.onclick = (e) => {
itemDetailModal0.style.display = 'flex';
e.preventDefault();
};

// click diluar
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }

    if (e.target === itemDetailModal1) {
        itemDetailModal1.style.display = 'none';
    }

    if (e.target === itemDetailModal2) {
        itemDetailModal2.style.display = 'none';
    }

    if (e.target === itemDetailModal3) {
        itemDetailModal3.style.display = 'none';
    }

    if (e.target === itemDetailModal0) {
        itemDetailModal0.style.display = 'none';
    }
};
