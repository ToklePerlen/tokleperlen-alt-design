document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });

    // 2. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const firstMenuLink = mobileMenu.querySelector('a');

    function openMenu() {
        mobileBtn.classList.add('active');
        mobileMenu.classList.add('active');
        mobileBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        firstMenuLink?.focus();
    }

    function closeMenu() {
        mobileBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        mobileBtn.focus();
    }

    mobileBtn.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) closeMenu();
        else openMenu();
    });

    mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) closeMenu();
    });

    // 3. Scroll Reveal via IntersectionObserver (zero cost after each element reveals)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up')
        .forEach(el => observer.observe(el));

    // 4. Ad Tracking
    document.querySelectorAll('.track-ad-click').forEach(link => {
        link.addEventListener('click', () => {
            const adName = link.getAttribute('data-ad-name');
            // navigator.sendBeacon('/api/track-click', JSON.stringify({ ad: adName }));
            console.log(`[Ad Tracker] Clicked: ${adName}`);
        });
    });
});
