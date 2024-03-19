document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  menuToggle.addEventListener('click', function() {
      navList.classList.toggle('show');
  });

  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          nav.style.backgroundColor = '#555';
      } else {
          nav.style.backgroundColor = '#333';
      }
  });

  const menuItems = document.querySelectorAll('.nav-list a');
  menuItems.forEach(function(item) {
      item.addEventListener('mouseover', function() {
          this.style.color = '#c21212';
      });

      item.addEventListener('mouseout', function() {
          this.style.color = 'white';
      });
  });
});
