const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.navbar__links');
let menuOpen = false;


menuBtn.addEventListener('click', () => {    
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true
    } else {
        menuBtn.classList.remove('open')
        menuOpen = false;
    }
    navLinks.classList.toggle('mobile-menu')
});
