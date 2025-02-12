window.addEventListener('scroll', function() {
    let nav = document.getElementById('mainNav');
    let headerHeight = document.querySelector('.header-fondo').offsetHeight; // Altura del header

    if (window.pageYOffset >= headerHeight) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
});