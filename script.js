
//select elements
const menu=document.querySelector('.menu');
const menuItems=document.querySelector('.menuItem');
const hamburger=document.querySelector('.hamburger');
const closeIcon=document.querySelector('.closeIcon');
const menuIcon=document.querySelector('.menuIcon');
//condition
function toggleMenu() {
    if(menu.classList.contains("showmenu")) {
        menu.classList.remove("showmenu");
        closeIcon.style.display="none";
        menuIcon.style.display="block";
    } else {
       menu.classList.add("showmenu");
       closeIcon.style.display="block";
       menuIcon.style.display="none"; 
    }
}
hamburger.addEventListener("click",toggleMenu);
//hide menu if user clicks on the menu links
menuItems.forEach(function(menuItem) {
    menuItem.addEventListener("click",toggleMenu);
}
)
 
