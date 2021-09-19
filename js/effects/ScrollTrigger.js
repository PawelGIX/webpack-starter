
document.querySelectorAll("[data-parallax]").forEach(el => {
    const options = {
        scrub: true,
    };
    // if (el.dataset.start) {
    //     options.start = el.dataset.start;
    // }
    // if (el.dataset.end) {
    //     options.end = el.dataset.end;
    // }
    // if (el.dataset.pin) {
    //     options.pin = el.dataset.pin;
    // }
    gsap.to(el, {
        scrollTrigger: options,
        y: (i, target) => ScrollTrigger.maxScroll(window) * target.dataset.speed,
        ease: "none"
    });
});
