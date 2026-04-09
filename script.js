document.addEventListener('DOMContentLoaded', () => {
    // Nav Bar Scroll Effect
    const nav = document.querySelector('.floating-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
            nav.style.padding = '5px 30px';
        } else {
            nav.style.background = 'var(--glass-bg)';
            nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
            nav.style.padding = '10px 30px';
        }
    });

    // Parallax Effect for Backgrounds and Floating Elements
    const blueprintBg = document.querySelector('.bg-blueprint');
    const neuralBg = document.querySelector('.bg-neural');
    const mechanicalIcon = document.querySelector('.mechanical-model');
    const digitalIcon = document.querySelector('.digital-model');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        // Background slow scroll
        if (blueprintBg && neuralBg) {
            blueprintBg.style.transform = `translateY(${scrolled * 0.15}px)`;
            neuralBg.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
