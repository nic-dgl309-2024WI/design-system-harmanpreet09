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


