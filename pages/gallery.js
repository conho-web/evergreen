let buttons = document.querySelectorAll('.btn');
let buttonsText = document.querySelectorAll('.btn-text');
let photoshoot = document.querySelectorAll('.photoshoot');

buttons.forEach(btn => {
    let btnAnimate = gsap.to(btn, {
        maxWidth: '480px',
        duration: 0.5,
    });

    buttonsText.forEach(text => {
        let check = btn.contains(text);

        if (check == true) {
            let textAnimate = gsap.to(text, {
                letterSpacing: '2px',
                duration: 0.5,
            });

            textAnimate.reverse();
            btn.addEventListener("mouseenter", () => textAnimate.play());
            btn.addEventListener("mouseleave", () => textAnimate.reverse());
        }
    });

    btnAnimate.reverse();
    btn.addEventListener("mouseenter", () => btnAnimate.play());
    btn.addEventListener("mouseleave", () => btnAnimate.reverse());

    btn.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = btn.getAttribute('href');
        
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
});



let showMore = document.querySelectorAll('.show-more');
let clmnMore = document.querySelectorAll('.clmn-more');

showMore.forEach(btn => {
    btn.onclick = function() {
        photoshoot.forEach(photoshoot => {
            let contains = photoshoot.contains(btn);

            if (contains == true) {
                clmnMore.forEach(clmnMore => {
                    let containsMore = photoshoot.contains(clmnMore);

                    if (containsMore == true) {
                        gsap.to(clmnMore, {
                            display: 'grid',
                            opacity: 1,
                        });

                        btn.remove();
                    }
                });
            }
        });
    }
});