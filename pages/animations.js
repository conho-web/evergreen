let headerContainer = document.querySelector(".header_container");
let mainBlock = document.querySelector(".main_block");

let array = [headerContainer, mainBlock];

array.forEach(element => {
    gsap.to(element, {
        opacity: 1,
    });
});