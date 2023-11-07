document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 10) {
            navbar.style.backgroundColor = 'white';
        }
        else {
            navbar.style.backgroundColor = 'transparent';
        }
    });
});