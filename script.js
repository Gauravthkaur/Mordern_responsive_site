const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Navbar animation
gsap.from(".nav", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
});

gsap.from(".nlink", { 
    stagger: .1,
    y: 10,
    opacity: 0,
    duration: 0.8
});

// Hero section animations
Shery.textAnimate("#headings h1", {
    style: 1,
    y: 10,  
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
});

gsap.from(".sustain", {
    scrollTrigger: {
        trigger: ".sustain",
        scroller: "#main",
        start: "top 80%"
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
});

gsap.from("#empharel img", {
    scrollTrigger: {
        trigger: "#empharel",
        scroller: "#main",
        start: "top 60%"
    },
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out"
});

// Motive section animation
gsap.from("#motive", {
    scrollTrigger: {
        trigger: "#motive",
        scroller: "#main",
        start: "top 70%"
    },
    y: 50,
    opacity: 0,
    duration: 1
});

// Pictures section animations
gsap.from(".firstpic, .secpic", {
    scrollTrigger: {
        trigger: ".pictures",
        scroller: "#main",
        start: "top 60%"
    },
    y: 100,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    ease: "power4.out"
});

// Large picture section animation
gsap.from("#largepic .Lpic", {
    scrollTrigger: {
        trigger: "#largepic",
        scroller: "#main",
        start: "top 60%"
    },
    x: -100,
    opacity: 0,
    duration: 1.2
});

gsap.from("#largepic .textpic", {
    scrollTrigger: {
        trigger: "#largepic",
        scroller: "#main",
        start: "top 60%"
    },
    x: 100,
    opacity: 0,
    duration: 1.2
});

// Future section animations
gsap.from(".ftext", {
    scrollTrigger: {
        trigger: ".future",
        scroller: "#main",
        start: "top 70%"
    },
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
});