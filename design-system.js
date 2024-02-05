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

// document.addEventListener('DOMContentLoaded', () => {
//     // Get current page URL
//     const currentPage = window.location.pathname;
    
//     // Query all side navigation links
//     const links = document.querySelectorAll('.side-nav__link');

//     links.forEach(link => {
//         if (link.href.includes(currentPage)) {
//             // Add --active modifier class to the current page link
//             link.classList.add('side-nav__link--active');
//         }
//     });
// });
