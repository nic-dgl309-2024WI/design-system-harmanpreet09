document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const topNavLinks = document.querySelector('.nav-links');
    const sideNav = document.querySelector('.side-nav');

    hamburger.addEventListener('click', () => {
        topNavLinks.classList.toggle('open');
        sideNav.classList.toggle('open'); // Toggle side-nav visibility as well
    });
});
