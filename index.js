// initialization

const RESPONSIVE_WIDTH = 1024

let headerWhiteBg = false
let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH
const collapseBtn = document.getElementById("collapse-btn")
const collapseHeaderItems = document.getElementById("collapsed-header-items")



function onHeaderClickOutside(e) {

    if (!collapseHeaderItems.contains(e.target)) {
        toggleHeader()
    }

}


function toggleHeader() {
    if (isHeaderCollapsed) {
        // collapseHeaderItems.classList.remove("max-md:tw-opacity-0")
        collapseHeaderItems.classList.add("opacity-100",)
        collapseHeaderItems.style.width = "60vw"
        collapseBtn.classList.remove("bi-list")
        collapseBtn.classList.add("bi-x", "max-lg:tw-fixed")
        isHeaderCollapsed = false

        setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1)

    } else {
        collapseHeaderItems.classList.remove("opacity-100")
        collapseHeaderItems.style.width = "0vw"
        collapseBtn.classList.remove("bi-x", "max-lg:tw-fixed")
        collapseBtn.classList.add("bi-list")
        isHeaderCollapsed = true
        window.removeEventListener("click", onHeaderClickOutside)

    }
}

function responsive() {
    if (window.innerWidth > RESPONSIVE_WIDTH) {
        collapseHeaderItems.style.width = ""

    } else {
        isHeaderCollapsed = true
    }
}

window.addEventListener("resize", responsive)


/**
 * Animations
 */

gsap.registerPlugin(ScrollTrigger)

gsap.to(".reveal-hero-text", {
    opacity: 0,
    y: "100%",
})

gsap.to(".reveal-hero-img", {
    opacity: 0,
    y: "100%",
})


gsap.set(".reveal-up", {
    opacity: 0,
    y: "30px", // Start from 30px below for smoother transition
})


window.addEventListener("load", () => {
    // animate from initial position
    gsap.to(".reveal-hero-text", {
        opacity: 1,
        y: "0%",
        duration: 0.8,
        // ease: "power3.out",
        stagger: 0.5, // Delay between each word's reveal,
        // delay: 3
    })

    gsap.to(".reveal-hero-img", {
        opacity: 1,
        y: "0%",
    })

    
})


// ------------- reveal section animations ---------------

const sections = gsap.utils.toArray("section")

sections.forEach((sec) => {
    const revealElements = sec.querySelectorAll(".reveal-up")
    
    if (revealElements.length === 0) return

    // Ensure initial state is set for each element
    gsap.set(revealElements, {
        opacity: 0,
        y: 300, // Start from 300px below for dramatic effect
        force3D: true, // Enable hardware acceleration
    })

    const revealUptimeline = gsap.timeline({paused: true, 
                                            scrollTrigger: {
                                                            trigger: sec,
                                                            start: "top 85%", // Start animation when section top reaches 85% of viewport
                                                            end: "top 50%", // End when section top reaches 50% of viewport
                                                            toggleActions: "play none none none", // Only play once when scrolled to
                                                            once: true, // Only trigger once
                                                            // markers: true, // Uncomment to debug
                                                        }})

    revealUptimeline.to(revealElements, {
        opacity: 1,
        y: 0,
        duration: 0.5, // Half the previous time (0.5s instead of 1.0s)
        ease: "power2.out", // Smooth easing function
        stagger: 0.1, // Reduced stagger for faster sequence
        force3D: true, // Keep hardware acceleration
    })
})

// Refresh ScrollTrigger after page load to ensure proper calculation
window.addEventListener("load", () => {
    setTimeout(() => {
        ScrollTrigger.refresh()
    }, 100)
})

// Smooth scroll with offset for navigation links
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.header-links').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                e.stopPropagation();
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const offset = 150; // 150px offset for visible scroll effect
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});


