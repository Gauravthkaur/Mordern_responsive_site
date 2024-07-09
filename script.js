const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink",{ 
stagger: .1,
y:10,
opacity: 0
});
Shery.textAnimate("#headings h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,  
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    
  });