let headerContainer = document.querySelector(".header_container");
let mainBlock = document.querySelector(".main_block");

let array = [headerContainer, mainBlock];

array.forEach(element => {
    gsap.to(element, {
        opacity: 1,
    });
});



// window.onload = () => {
//     const options = {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.3
//     }

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const lazyImg = entry.target;
                
//                 gsap.to(lazyImg, {
//                     opacity: 1,
//                 });

//                 observer.unobserve(lazyImg);
//             }
//         })
//     }, options)


//     const arr = document.querySelectorAll("section");
//     const arr2 = document.querySelectorAll("img");

//     arr.forEach(i => {
//         observer.observe(i)
//     })

//     arr2.forEach(i => {
//         observer.observe(i)
//     })
// }