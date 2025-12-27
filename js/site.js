/**
 * BTP Site Core JavaScript
 *
 * Centralizes all shared site functionality:
 * - Component loading (nav, footer)
 * - Favicon injection
 * - Mobile menu controls
 * - Daily verse integration
 *
 * Usage: Add this to your page:
 *   <script src="/js/site.js"></script>
 *
 * For pages using component system, also add:
 *   <div id="nav-placeholder"></div>
 *   <div id="footer-placeholder"></div>
 */

(function() {
    'use strict';

    // =========================================
    // CONFIGURATION
    // =========================================

    var CONFIG = {
        navPath: '/components/nav.html',
        footerPath: '/components/footer.html',
        faviconPath: '/favicon.svg',
        brandCssPath: '/css/brand.css',
        dailyVersePath: '/js/daily-verse.js',
        // Google Analytics - UPDATE THIS ID TO CHANGE TRACKING
        gaTrackingId: 'G-2B24Z400JN'
    };

    // =========================================
    // GOOGLE ANALYTICS INJECTION
    // =========================================

    function injectGoogleAnalytics() {
        if (!CONFIG.gaTrackingId) return;

        // Skip if already loaded
        if (window.gtag) return;

        // Load gtag.js
        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + CONFIG.gaTrackingId;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() { dataLayer.push(arguments); };
        gtag('js', new Date());
        gtag('config', CONFIG.gaTrackingId);
    }

    // Load GA immediately
    injectGoogleAnalytics();

    // =========================================
    // SCROLL MANAGEMENT
    // =========================================

    // Disable browser's automatic scroll restoration to prevent page jump
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    // Force scroll to top immediately
    window.scrollTo(0, 0);

    // =========================================
    // FAVICON INJECTION
    // =========================================

    function injectFavicon() {
        // Check if favicon already exists
        var existingFavicon = document.querySelector('link[rel="icon"]');
        if (existingFavicon) return;

        // Create and inject favicon
        var favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.type = 'image/svg+xml';
        favicon.href = CONFIG.faviconPath;
        document.head.appendChild(favicon);
    }

    // =========================================
    // BRAND CSS INJECTION
    // =========================================

    function injectBrandCSS() {
        // Check if brand.css already exists
        var existingCSS = document.querySelector('link[href*="brand.css"]');
        if (existingCSS) return;

        // Create and inject brand CSS
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = CONFIG.brandCssPath;
        document.head.appendChild(link);
    }

    // =========================================
    // COMPONENT LOADING
    // =========================================

    function loadComponent(path, placeholderId, callback) {
        var placeholder = document.getElementById(placeholderId);
        if (!placeholder) return;

        var xhr = new XMLHttpRequest();
        xhr.open('GET', path, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    placeholder.outerHTML = xhr.responseText;
                    if (callback) callback();
                } else {
                    console.error('BTP: Failed to load component:', path);
                }
            }
        };
        xhr.send();
    }

    function loadNavigation(callback) {
        var shouldScrollTop = window.scrollY < 200;

        loadComponent(CONFIG.navPath, 'nav-placeholder', function() {
            // Scroll to top to prevent page jumping
            if (shouldScrollTop) {
                window.scrollTo(0, 0);
            }
            if (callback) callback();
        });
    }

    function loadFooter(callback) {
        loadComponent(CONFIG.footerPath, 'footer-placeholder', function() {
            // Initialize daily verse after footer loads
            initDailyVerseAfterLoad();
            if (callback) callback();
        });
    }

    // =========================================
    // DAILY VERSE INTEGRATION
    // =========================================

    function initDailyVerseAfterLoad() {
        // Use setTimeout to ensure daily-verse.js has fully loaded
        setTimeout(function() {
            if (typeof window.initDailyVerse === 'function') {
                window.initDailyVerse();
            } else if (typeof window.renderDailyVerse === 'function') {
                window.renderDailyVerse();
            }
        }, 50);
    }

    // =========================================
    // MOBILE MENU CONTROLS
    // =========================================

    window.openMobileMenu = function() {
        var overlay = document.getElementById('mobileMenuOverlay');
        if (overlay) {
            overlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeMobileMenu = function() {
        var overlay = document.getElementById('mobileMenuOverlay');
        if (overlay) {
            overlay.classList.add('hidden');
            document.body.style.overflow = '';
        }
    };

    window.toggleMenuAccordion = function(button) {
        var content = button.nextElementSibling;
        var arrow = button.querySelector('.menu-accordion-arrow');
        if (content) content.classList.toggle('open');
        if (arrow) arrow.classList.toggle('open');
    };

    // =========================================
    // SCROLL TO TOP BUTTON
    // =========================================

    window.scrollToTop = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return false;
    };

    // =========================================
    // ACTIVE NAV HIGHLIGHTING
    // =========================================

    function highlightActiveNavItem() {
        var currentPath = window.location.pathname;
        var navLinks = document.querySelectorAll('nav a[href]');

        navLinks.forEach(function(link) {
            var href = link.getAttribute('href');
            if (href && currentPath.indexOf(href) !== -1) {
                link.classList.add('text-heritage-gold');
            }
        });
    }

    // =========================================
    // INITIALIZATION
    // =========================================

    function init() {
        // Always inject favicon and brand CSS
        injectFavicon();
        injectBrandCSS();

        // Load components if placeholders exist
        var hasNavPlaceholder = document.getElementById('nav-placeholder');
        var hasFooterPlaceholder = document.getElementById('footer-placeholder');

        if (hasNavPlaceholder) {
            loadNavigation(function() {
                highlightActiveNavItem();
            });
        }

        if (hasFooterPlaceholder) {
            loadFooter();
        }

        // For pages without component placeholders but with daily verse container
        if (!hasFooterPlaceholder) {
            var verseContainer = document.getElementById('daily-verse-container');
            if (verseContainer) {
                initDailyVerseAfterLoad();
            }
        }
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // =========================================
    // PUBLIC API
    // =========================================

    // Expose functions for manual use
    window.BTP = {
        loadComponent: loadComponent,
        loadNavigation: loadNavigation,
        loadFooter: loadFooter,
        injectFavicon: injectFavicon,
        injectBrandCSS: injectBrandCSS,
        highlightActiveNavItem: highlightActiveNavItem,
        config: CONFIG
    };

})();
