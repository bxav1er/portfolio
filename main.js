/**
 * Main JavaScript for xavierbzz personal website
 * Handles shared functionality across all pages
 */

// Global configuration
const CONFIG = {
    animationDuration: 600,
    staggerDelay: 100,
    scrollOffset: 100,
    breakpoints: {
        mobile: 768,
        tablet: 1024,
        desktop: 1200
    }
};

// Utility functions
const utils = {
    // Debounce function for performance
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function for scroll events
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Check if element is in viewport
    isInViewport: function(element, offset = 0) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= -offset &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Get current breakpoint
    getBreakpoint: function() {
        const width = window.innerWidth;
        if (width < CONFIG.breakpoints.mobile) return 'mobile';
        if (width < CONFIG.breakpoints.tablet) return 'tablet';
        return 'desktop';
    },

    // Format date consistently
    formatDate: function(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    },

    // Smooth scroll to element
    scrollToElement: function(element, offset = 80) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

// Animation controller
const animations = {
    // Initialize scroll-triggered animations
    initScrollAnimations: function() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all elements with animation classes
        document.querySelectorAll('[data-animate], .animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    },

    // Stagger animation for multiple elements
    staggerAnimation: function(elements, delay = CONFIG.staggerDelay) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('animate-in');
            }, index * delay);
        });
    },

    // Animate page transition
    pageTransition: function(callback) {
        const overlay = document.createElement('div');
        overlay.className = 'page-transition-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #FEFEFE;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        document.body.appendChild(overlay);
        
        // Fade in
        requestAnimationFrame(() => {
            overlay.style.opacity = '1';
        });
        
        // Execute callback and fade out
        setTimeout(() => {
            if (callback) callback();
            
            setTimeout(() => {
                overlay.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(overlay);
                }, 300);
            }, 100);
        }, 300);
    }
};

// Navigation controller
const navigation = {
    init: function() {
        this.handleActiveState();
        this.handleMobileMenu();
        this.handleSmoothScroll();
    },

    handleActiveState: function() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    },

    handleMobileMenu: function() {
        // Mobile menu toggle (if needed in future)
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (navToggle && navLinks) {
            navToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }
    },

    handleSmoothScroll: function() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    utils.scrollToElement(target);
                }
            });
        });
    }
};

// Performance optimizations
const performance = {
    init: function() {
        this.lazyLoadImages();
        this.preloadCriticalResources();
        this.optimizeAnimations();
    },

    lazyLoadImages: function() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    },

    preloadCriticalResources: function() {
        const criticalImages = [
            'resources/hero-image.jpg',
            'resources/workspace-1.jpg'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    },

    optimizeAnimations: function() {
        // Reduce animations on mobile for better performance
        if (utils.getBreakpoint() === 'mobile') {
            document.documentElement.style.setProperty('--animation-duration', '0.3s');
        }
    }
};

// Accessibility enhancements
const accessibility = {
    init: function() {
        this.handleKeyboardNavigation();
        this.handleFocusManagement();
        this.announcePageChanges();
    },

    handleKeyboardNavigation: function() {
        // Enhanced keyboard navigation for interactive elements
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    },

    handleFocusManagement: function() {
        // Ensure focus is visible and properly managed
        const focusableElements = document.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );

        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.style.outline = '2px solid #7A8471';
                element.style.outlineOffset = '2px';
            });

            element.addEventListener('blur', () => {
                element.style.outline = '';
                element.style.outlineOffset = '';
            });
        });
    },

    announcePageChanges: function() {
        // Announce page changes to screen readers
        const announcer = document.createElement('div');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';
        announcer.style.cssText = `
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        `;
        document.body.appendChild(announcer);

        // Update announcer on page changes
        window.addEventListener('load', () => {
            const pageTitle = document.querySelector('title')?.textContent || 'Page loaded';
            announcer.textContent = pageTitle;
        });
    }
};

// Error handling and logging
const errorHandler = {
    init: function() {
        window.addEventListener('error', this.handleError);
        window.addEventListener('unhandledrejection', this.handlePromiseRejection);
    },

    handleError: function(event) {
        console.error('JavaScript Error:', event.error);
        // In production, you might want to send this to an error tracking service
    },

    handlePromiseRejection: function(event) {
        console.error('Unhandled Promise Rejection:', event.reason);
        event.preventDefault();
    }
};

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize core modules
    navigation.init();
    animations.initScrollAnimations();
    performance.init();
    accessibility.init();
    errorHandler.init();

    // Page-specific initializations
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'index.html':
        case '':
            initializeHomePage();
            break;
        case 'projects.html':
            initializeProjectsPage();
            break;
        case 'writing.html':
            initializeWritingPage();
            break;
        case 'visual.html':
            initializeVisualPage();
            break;
    }

    console.log('xavierbzz website initialized successfully');
});// Page-specific initialization functions
function initializeHomePage() {
    // Initialize typewriter effect
    if (typeof Typed !== 'undefined') {
        const typed = new Typed('#typed-text', {
            strings: [
                'Welcome, hang out for a bit?',
                'Learning day by day.',
                'One step at a time.',
                'Sit down and relax.'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // Animate hero elements
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-image, .hero-title, .hero-subtitle, .hero-description, .hero-cta');
        animations.staggerAnimation(heroElements, 200);
    }, 500);

    // Animate current focus cards
    setTimeout(() => {
        const focusCards = document.querySelectorAll('.focus-card');
        animations.staggerAnimation(focusCards, 150);
    }, 1000);
}

function initializeProjectsPage() {
    // Project-specific initialization handled in projects.html
    console.log('Projects page initialized');
}

function initializeWritingPage() {
    // Writing-specific initialization handled in writing.html
    console.log('Writing page initialized');
}

function initializeVisualPage() {
    // Visual-specific initialization handled in visual.html
    console.log('Visual page initialized');
}

// Export for use in other scripts
window.xavierbzz = {
    utils,
    animations,
    navigation,
    performance,
    accessibility,
    CONFIG
};