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
// --- Typing Animation Logic ---
// This should be added inside the DOMContentLoaded event listener,
// replacing the previous typing animation function.
document.addEventListener('DOMContentLoaded', () => {

    // (Your existing code for mobile nav and scroll animations should be here)
    
    // New Cumulative Typing Animation Code
    const typingTextElement = document.querySelector("#typing-text");
    const phrasesToType = ["Builders", ", Dreamers", ", and Coders."];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        if (!typingTextElement) return; // Stop if element doesn't exist

        const typingSpeed = 120;
        const deletingSpeed = 60;
        const delayBetweenPhrases = 500;
        const delayAtEnd = 2500; // Pause after the full sentence is typed

        if (isDeleting) {
            // Deleting the whole sentence
            if (typingTextElement.textContent.length > 0) {
                typingTextElement.textContent = typingTextElement.textContent.slice(0, -1);
                setTimeout(type, deletingSpeed);
            } else {
                isDeleting = false;
                phraseIndex = 0;
                setTimeout(type, typingSpeed);
            }
        } else {
            // Typing out the sentence part-by-part
            if (phraseIndex < phrasesToType.length) {
                const currentPhrase = phrasesToType[phraseIndex];
                if (charIndex < currentPhrase.length) {
                    typingTextElement.textContent += currentPhrase.charAt(charIndex);
                    charIndex++;
                    setTimeout(type, typingSpeed);
                } else {
                    // Finished a phrase, move to the next
                    phraseIndex++;
                    charIndex = 0;
                    setTimeout(type, delayBetweenPhrases);
                }
            } else {
                // Finished the whole sentence, pause then start deleting
                isDeleting = true;
                setTimeout(type, delayAtEnd);
            }
        }
    }
    
    // Start the animation
    type();

});
