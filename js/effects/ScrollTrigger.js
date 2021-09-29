
export function startScrollTrigger() {
    
    document.querySelectorAll("[data-parallax]").forEach(el => {
        var y;
        const options = {
            scrub: true,
            // markers: true,
            toggleActions: "play none none reset",
            trigger: el,
        };
        if (el.dataset.from) {
            options.from = el.dataset.from;
        }
        if (el.dataset.start) {
            options.start = el.dataset.start;
        }
        if (el.dataset.end) {
            options.end = el.dataset.end;
        }
        if (el.dataset.pin) {
            options.pin = el.dataset.pin;
        }
        if (el.dataset.y) {
            y = el.dataset.y
        }
        if (el.dataset.markers) {
            options.markers = el.dataset.markers
        }
        if (el.dataset.speed) {
            options.speed = el.dataset.speed;
            y = (i, target) => ScrollTrigger.maxScroll(window) * target.dataset.speed
        }
        var anim = !el.dataset.from ? gsap.to : gsap.from;
        anim(el, {
            scrollTrigger: options,
            y: y,
            ease: "none"
        });
    });
    
}