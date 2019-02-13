$('.carousel').carousel();

document.addEventListener('DOMContentLoaded', function() {
    const navIcoOpen = document.querySelector('.menu-open');
    const navIconClose = document.querySelector('.menu-close');
    const nav = document.querySelector('.navigator-menu');
    
    navIcoOpen.addEventListener('click', function() {
        nav.classList.add('active');
    });
    
    navIconClose.addEventListener('click', function() {
        nav.classList.remove('active');
    });
});


comprarCupcake = () => {
    location.assign('product.html');
}