const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navlink');
const divHeader = document.querySelector('.divHeader');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('show');
  divHeader.style.filter = 'blur(7px)';
});

document.querySelectorAll('.navlink').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('show');
  divHeader.style.filter = 'blur(0)';
}));
