
document.addEventListener('DOMContentLoaded', function () {

    let btns = document.querySelectorAll('.btns-select-colors');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.style.border = '1px solid white';
            btn.style.boxShadow = '3px 2px black';
        });
    });

    const navbar = document.querySelector('.box-navbar-change-color');
    const changeColor = document.querySelectorAll('.change-color');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.style.backgroundColor = 'white';
            changeColor.forEach(element => {
                element.classList.add('inverted-image');
            });
        } else {
            navbar.style.backgroundColor = 'transparent';
            changeColor.forEach(element => {
                element.classList.remove('inverted-image');
            });
        }
    });

});
