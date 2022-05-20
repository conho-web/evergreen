let buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    let btnAnimate = gsap.to(btn, {
        margin: 0,
        duration: 0.5,
    });
    
    btnAnimate.reverse();
    btn.addEventListener("mouseenter", () => btnAnimate.play());
    btn.addEventListener("mouseleave", () => btnAnimate.reverse());
});



let photoshoot = document.querySelectorAll('.photoshoot');
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