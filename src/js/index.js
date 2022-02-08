const menu = document.querySelector('#mobile-menu');
const toggle = document.querySelector('#menu-toggle');
const menuClose = document.querySelector('#menu-close');
const showcase = document.querySelector('.fa-arrow-circle-down');

const mobileMenu = () => {
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
}

toggle.addEventListener('click', mobileMenu);

menuClose.addEventListener('click', mobileMenu);

const showcaseScroll = () =>{
    window.scrollTo(0, 1000);
}

showcase.addEventListener('click', showcaseScroll);