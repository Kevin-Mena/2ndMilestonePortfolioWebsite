const hamburger = document.querySelector('#menu');
const disappear = document.querySelector('#disappear');
const rotateRight = document.querySelector('#rotate-right');
const rotateLeft = document.querySelector('#rotate-left');
const menuList = document.querySelector('#menuList');
 const menuButton1 = document.querySelector('#menuButton1');
 const menuButton2 = document.querySelector('#menuButton2');
 const menuButton3 = document.querySelector('#menuButton3');
 const mainSection = document.querySelector('#main-section');
 const section = document.querySelectorAll('section')
 const nav = document.querySelector('header')
 const x = document.querySelector('#x')
 x.style.display = 'none'
let menubuttonslist = ''
let activeMenu = false;
hamburger.addEventListener('click', () => {
  if (activeMenu === false) {
    menuList.style.marginTop = '0';
    disappear.style.display = 'none';
    rotateRight.style.transform = 'rotate(45deg) translateX(20%) translateY(250%)';
    rotateLeft.style.transform = 'rotate(-45deg) translateX(-20%)';
    rotateRight.style.backgroundColor = '#fff';
    rotateLeft.style.backgroundColor = '#fff';
    rotateRight.style.borderColor = '#fff';
    rotateLeft.style.borderColor = '#fff';
    activeMenu = true;
    x.style.display = 'block'
    hamburger.style.display = 'none'
    nav.style.backdropFilter = 'blur(8px)';
    nav.style.webkitBackdropFilter = 'blur(8px)'
  }
   else {
    menuList.style.marginTop = '-200vh';
    disappear.style.display = 'block';
    rotateRight.style.transform = 'rotate(0deg) translateX(0%) translateY(0%)';
    rotateLeft.style.transform = 'rotate(0deg) translateX(0%)';
    rotateRight.style.backgroundColor = '#6070ff';
    rotateLeft.style.backgroundColor = '#6070ff';
    rotateRight.style.borderColor = '#6070ff';
    rotateLeft.style.borderColor = '#6070ff';
    activeMenu = false;
  }
});

 menuButton1.addEventListener('click', () => {
    menuList.style.marginTop = '-200vh';
    disappear.style.display = 'block';
    rotateRight.style.transform = 'rotate(0deg) translateX(0%) translateY(0%)';
    rotateLeft.style.transform = 'rotate(0deg) translateX(0%)';
    rotateRight.style.backgroundColor = '#6070ff';
    rotateLeft.style.backgroundColor = '#6070ff';
    rotateRight.style.borderColor = '#6070ff';
    rotateLeft.style.borderColor = '#6070ff';
    activeMenu = false;
  }
)

 menuButton2.addEventListener('click', () => {
   menuList.style.marginTop = '-200vh';
   disappear.style.display = 'block';
   rotateRight.style.transform = 'rotate(0deg) translateX(0%) translateY(0%)';
   rotateLeft.style.transform = 'rotate(0deg) translateX(0%)';
   rotateRight.style.backgroundColor = '#6070ff';
   rotateLeft.style.backgroundColor = '#6070ff';
   rotateRight.style.borderColor = '#6070ff';
   rotateLeft.style.borderColor = '#6070ff';
   activeMenu = false;
 }
 )
 menuButton3.addEventListener('click', () => {
   menuList.style.marginTop = '-200vh';
   disappear.style.display = 'block';
   rotateRight.style.transform = 'rotate(0deg) translateX(0%) translateY(0%)';
   rotateLeft.style.transform = 'rotate(0deg) translateX(0%)';
   rotateRight.style.backgroundColor = '#6070ff';
   rotateLeft.style.backgroundColor = '#6070ff';
   rotateRight.style.borderColor = '#6070ff';
   rotateLeft.style.borderColor = '#6070ff';
   activeMenu = false;
 }
 )