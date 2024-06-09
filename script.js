const navMenu = document.getElementById('nav-menu');
const menuToggle = document.getElementById('menu-icon');
const menuClose = document.getElementById('menu-close');


if (menuToggle){
    menuToggle.addEventListener('click' , () => {
        navMenu.classList.add('show-menu')
    })
}


if (menuClose){
    menuClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu')
    })
}