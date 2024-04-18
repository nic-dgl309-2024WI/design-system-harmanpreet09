// Outback nursary toogle
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