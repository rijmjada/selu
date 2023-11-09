
document.addEventListener('DOMContentLoaded', function () {

    let btns = document.querySelectorAll('.btns-select-colors');


    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.style.border = '1px solid white';
            btn.style.boxShadow = '3px 2px black';
        });
    });



    const navbar = document.querySelector('.navbar');
    const imgNavbar = document.querySelector('#logo-selu-navbar');
    const biPersonCircle = document.querySelector('#bi-person-circle');
    const biHandbag = document.querySelector('#bi-handbag');
    const biSearch = document.querySelector('#bi-search');
    const navbarTogglerIcon = document.querySelector('#navbar-toggler-icon');



    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.style.backgroundColor = 'white';
            imgNavbar.classList.add('inverted-image');
            biPersonCircle.classList.add('inverted-image');
            biHandbag.classList.add('inverted-image');
            biSearch.classList.add('inverted-image');
            navbarTogglerIcon.classList.add('inverted-image');

        } else {
            navbar.style.backgroundColor = 'transparent';
            imgNavbar.classList.remove('inverted-image');
            biPersonCircle.classList.remove('inverted-image');
            biHandbag.classList.remove('inverted-image');
            biSearch.classList.remove('inverted-image');
            navbarTogglerIcon.classList.remove('inverted-image');

        }
    });

});
