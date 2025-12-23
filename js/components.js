/**
 * BTP Component Loader
 * Loads shared navigation and footer components into pages
 *
 * Usage: Add these elements to your page:
 *   <div id="nav-placeholder"></div>
 *   <div id="footer-placeholder"></div>
 *   <script src="/js/components.js"></script>
 */

(function() {
    'use strict';

    // Disable browser's automatic scroll restoration to prevent page jump
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    // Force scroll to top immediately
    window.scrollTo(0, 0);

    // Component paths
    var NAV_PATH = '/components/nav.html';
    var FOOTER_PATH = '/components/footer.html';

    // Load a component into a placeholder
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
                    console.error('Failed to load component:', path);
                }
            }
        };
        xhr.send();
    }

    // Mobile menu functions (global)
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

    // Load components when DOM is ready
    function init() {
        // Remember if we should scroll to top (only if near top before nav loads)
        var shouldScrollTop = window.scrollY < 200;

        // Load navigation
        loadComponent(NAV_PATH, 'nav-placeholder', function() {
            // Navigation loaded - scroll to top to prevent page jumping
            if (shouldScrollTop) {
                window.scrollTo(0, 0);
            }
        });

        // Load footer
        loadComponent(FOOTER_PATH, 'footer-placeholder', function() {
            // Footer loaded - initialize daily verse if available
            // Use setTimeout to ensure daily-verse.js has fully loaded
            setTimeout(function() {
                if (typeof window.initDailyVerse === 'function') {
                    window.initDailyVerse();
                } else if (typeof window.renderDailyVerse === 'function') {
                    window.renderDailyVerse();
                }
            }, 50);
        });
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
