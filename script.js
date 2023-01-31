// select elements
const menu = document.querySelector('.mobile-menu');
const menuItems = document.querySelector('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const headerSection = document.querySelector('.div-header');

// condition
function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    headerSection.style.filter = 'blur(0)';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    headerSection.style.filter = 'blur(5px)';
  }
}

hamburger.addEventListener('click', toggleMenu);
// hide menu if user clicks on the menu links
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});
