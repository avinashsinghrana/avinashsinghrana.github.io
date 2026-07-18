// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. Initial Load Animations
const initLoad = gsap.timeline();
initLoad.from(".navbar", { y: -50, opacity: 0, duration: 1, ease: "power3.out" })
        .from(".gsap-profile", { scale: 0.8, opacity: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.5")
        .from(".gsap-hero-title", { y: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8")
        .from(".gsap-hero-subtitle", { y: 30, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8")
        .from(".gsap-hero-desc", { y: 20, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8")
        .from(".gsap-hero-cta", { y: 20, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8");

// 2. Hero Section Apple-style Zoom & Fade on Scroll
gsap.to(".gsap-hero-content", {
    scrollTrigger: {
        trigger: ".hero-pin-container",
        start: "top top",
        end: "+=800",
        scrub: 1,
        pin: true,
    },
    scale: 3,
    opacity: 0,
    ease: "power1.inOut"
});

gsap.to(".hero", {
    scrollTrigger: {
        trigger: ".hero-pin-container",
        start: "top top",
        end: "+=800",
        scrub: 1,
    },
    backgroundPosition: "50% 100%",
    ease: "none"
});

// 3. About Section Pinned Scroll Sequence
ScrollTrigger.matchMedia({
    "(min-width: 768px)": function() {
        let aboutTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-container",
                start: "center center",
                end: "+=800",
                scrub: 1,
                pin: true,
            }
        });

        aboutTl.from(".gsap-about-stats .stat-card", {
            y: 100,
            opacity: 0,
            stagger: 0.2,
            ease: "power2.out"
        });
    }
});

// Mobile fallback for about section
gsap.from(".gsap-about-text", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// 4. Experience Timeline Animation
const timelineItems = gsap.utils.toArray('.gsap-timeline-item');
timelineItems.forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });
});

// 5. Projects Parallax
const projects = gsap.utils.toArray('.gsap-project');
projects.forEach((project, i) => {
    gsap.from(project, {
        scrollTrigger: {
            trigger: project,
            start: "top 90%",
            end: "bottom 80%",
            scrub: 1,
        },
        y: 100,
        opacity: 0,
        scale: 0.95
    });
});

// 6. Skills Section Staggered Reveal
gsap.from(".gsap-skill", {
    scrollTrigger: {
        trigger: ".skills-grid",
        start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "back.out(1.5)"
});

// 7. Education & Awards Reveal
gsap.from(".gsap-education > div > div", {
    scrollTrigger: {
        trigger: ".gsap-education",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

// 8. Contact Section Fade
gsap.from(".gsap-contact", {
    scrollTrigger: {
        trigger: ".contact",
        start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});
