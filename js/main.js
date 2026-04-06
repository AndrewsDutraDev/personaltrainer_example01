document.addEventListener("DOMContentLoaded", () => {
    // Header Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(8, 8, 10, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.8)';
            header.style.borderBottom = '1px solid rgba(206, 230, 27, 0.2)';
        } else {
            header.style.backgroundColor = 'rgba(8, 8, 10, 0.9)';
            header.style.boxShadow = 'none';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        }
    });

    // Add fade-in class to all major sections
    const sectionsToAnimate = [
        '.system-box', 
        '.services-grid', 
        '.transform-grid', 
        '.trainer-wrapper', 
        '.app-container',
        '.reviews-grid'
    ];
    
    sectionsToAnimate.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.classList.add('fade-in');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            }
        });
    });
});
