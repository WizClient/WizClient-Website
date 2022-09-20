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


window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("fondu-out");
    setTimeout(() => {
        document.querySelector(".loader").remove();
    }, 400);

});