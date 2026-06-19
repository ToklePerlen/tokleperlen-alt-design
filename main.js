document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    function toggleMenu() {
        mobileBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        const isOpen = mobileMenu.classList.contains('active');
        mobileBtn.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }

    mobileBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // 3. Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up');

    function reveal() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // when to reveal element

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    }

    // Trigger reveal on load and scroll
    window.addEventListener('scroll', reveal);
    reveal(); // Initial call

    // 4. Ad Tracking Logic
    const adLinks = document.querySelectorAll('.track-ad-click');
    
    adLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const adName = link.getAttribute('data-ad-name');
            const targetUrl = link.getAttribute('href');
            
            // Example of sending tracking data to a hypothetical analytics endpoint
            // navigator.sendBeacon('/api/track-click', JSON.stringify({ ad: adName, timestamp: Date.now() }));
            
            console.log(`[Ad Tracker] Clicked on: ${adName}. Redirecting to ${targetUrl}`);
            
            // Note: We don't prevent default here because we want the browser to open the link natively in the new tab (_blank).
            // If it wasn't a new tab, we might prevent default, track, then redirect.
        });
    });
});
