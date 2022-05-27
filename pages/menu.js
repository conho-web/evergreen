let menuIcon = document.querySelector('.menu-icon');
let menu = document.querySelector('.menu');

menuIcon.onclick = function () {
    if (menuIcon.classList.contains('active')) {
        menu.classList.remove('active');
        menuIcon.classList.remove('active');
    }

    else {
        menu.classList.add('active');
        menuIcon.classList.add('active');
    }
}