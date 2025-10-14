document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Toggle ---
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuIcon.querySelector('i');
            
            // Toggle icon between bars and times (X) for better UX
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                menuIcon.setAttribute('aria-label', 'Close navigation menu');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                menuIcon.setAttribute('aria-label', 'Open navigation menu');
            }
        });
    }

    // --- Intersection Observer for Scroll Animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Create an observer with a callback function
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible)
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Stop observing the element after it has become visible to prevent re-animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger the animation when 10% of the element is visible
    });

    // Observe each animated element
    animatedElements.forEach(element => {
        observer.observe(element);
    });

});