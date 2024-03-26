document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.navbar__hamburger');
    const topNavLinks = document.querySelector('.navbar__links');
    const sideNav = document.querySelector('.side-nav'); // Assuming side-nav doesn't follow BEM for open state

    hamburger.addEventListener('click', () => {
        // Toggle BEM modifier class for showing the top navigation links
        topNavLinks.classList.toggle('navbar__links--open');
        // Assuming side-nav uses a similar BEM modifier for the open state
        sideNav.classList.toggle('side-nav--open'); // Adjust if your BEM naming for open state is different
    });
});

document.getElementById('navToggle').addEventListener('click', function() {
    var navList = document.getElementById('navList');
    if (navList.style.display === 'block') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'block';
    }
});
document.getElementById('navToggle').addEventListener('click', function() {
    var navList = document.getElementById('navList');
    navList.classList.toggle('active'); // This will add/remove the 'active' class
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll(".carousel-slide");
    const paginationContainer = document.querySelector(".carousel-pagination");
    let currentSlideIndex = 0;
    let autoSlideInterval;

    // Create and update pagination dots
    function createPagination() {
        slides.forEach((_, index) => {
            let dot = document.createElement("span");
            dot.classList.add("carousel-pagination-dot");
            dot.addEventListener("click", () => {
                moveToSlide(index);
            });
            paginationContainer.appendChild(dot);
        });
        updatePagination();
    }

    function updatePagination() {
        const dots = document.querySelectorAll(".carousel-pagination-dot");
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentSlideIndex].classList.add("active");
    }

    function moveToSlide(index) {
        if (index >= slides.length) {
            index = 0;
        } else if (index < 0) {
            index = slides.length - 1;
        }
        currentSlideIndex = index;
        const offset = -currentSlideIndex * 100; // Assuming each slide is 100% of the viewport width
        const slideContainer = document.querySelector(".carousel-container");
        slideContainer.style.transform = `translateX(${offset}%)`;
        updatePagination();
    }

    // Set up the auto-slide functionality
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            moveToSlide(currentSlideIndex + 1);
        }, 3000); // Change slide every 3 seconds
    }

    // Reset auto-slide when user interacts
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Attach the reset function to window for global access in the inline onclick HTML attribute
    window.moveSlide = function(direction) {
        moveToSlide(currentSlideIndex + direction);
        resetAutoSlide();
    };

    // Initialize the carousel
    createPagination();
    startAutoSlide();
});






  
  

