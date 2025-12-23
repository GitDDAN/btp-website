/**
 * Session-based Breadcrumb Navigation
 * Tracks user's actual navigation path and displays breadcrumbs
 */

(function() {
    'use strict';

    const BreadcrumbTracker = {
        maxTrailLength: 5, // Maximum number of pages to show in breadcrumb trail
        storageKey: 'navigationTrail',

        /**
         * Initialize breadcrumb tracking
         */
        init: function() {
            this.recordCurrentPage();
            this.displayBreadcrumbs();
        },

        /**
         * Get friendly page title from document or filename
         */
        getPageTitle: function() {
            // Try to get title from page
            let title = document.title;

            // If title is generic or empty, use a friendly name from the URL
            if (!title || title === 'Bible Teaching Program.' || title.trim() === '') {
                const path = window.location.pathname;
                const filename = path.split('/').pop().replace('.html', '').replace('.htm', '');

                // Create friendly names for common pages
                const friendlyNames = {
                    'index': 'Home',
                    'courses': 'Teaching & Courses',
                    'courses1': 'Teaching & Courses',
                    'contact': 'Contact',
                    'about': 'About',
                    'btpprogram': 'BTP Program',
                    'powerpoint': 'PowerPoint Presentations',
                    'dailyverses': 'Daily Verses',
                    'dailyverses2013': 'Daily Verses 2013',
                    'biblehist': 'Bible History',
                    'biblent': 'New Testament',
                    'bibleot': 'Old Testament',
                    'ntarmour': 'Armour of God',
                    'ntverses': 'New Testament Verses',
                    'foundation': 'Foundation Courses',
                    'cfsal': 'Salvation Course',
                    'salindex': 'Salvation Course',
                    'cfeternal': 'Eternal Life Course',
                    'cfcross': 'The Cross',
                    'fruitweb': 'Fruit of the Spirit',
                    'giftsweb': 'Gifts of the Spirit',
                    'greekweb': 'Greek Words',
                    'greekweb2': 'Greek Words',
                    'worship1web': 'Worship',
                    'worship2web': 'Worship',
                    'prayer2web': 'Prayer',
                    'clntc': 'New Testament Church',
                    'arppt1': 'Armour - PowerPoint',
                    'arweb': 'Armour - Web',
                    'otppt1': 'Old Testament - PowerPoint',
                    'otppt2': 'Minor Prophets - PowerPoint',
                    'otweb1': 'Old Testament Studies',
                    'otweb2': 'Old Testament Studies',
                    'otwebgen': 'Genesis Studies',
                    'otwebgen2': 'Genesis Studies',
                    'chppt1': 'Church History - PowerPoint',
                    'chweb1': 'Church History',
                    'jhppt1': 'Jewish History - PowerPoint',
                    'jhweb1': 'Jewish History',
                    'mmweb': 'Missions History',
                    'epistles': 'Epistles',
                    'books': 'Books and Messages',
                    'messages': 'Messages',
                    'link': 'Links',
                    'support': 'Support',
                    'leadership': 'Leadership',
                    'leadership2': 'Leadership',
                    'leadership3': 'Leadership'
                };

                title = friendlyNames[filename] || this.titleCase(filename.replace(/[-_]/g, ' '));
            }

            return title;
        },

        /**
         * Convert string to title case
         */
        titleCase: function(str) {
            return str.toLowerCase().split(' ').map(word => {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }).join(' ');
        },

        /**
         * Get current page URL (relative)
         * Normalizes both file:// and http:// URLs to work consistently
         */
        getCurrentUrl: function() {
            let url = window.location.pathname;

            // For file:// protocol, extract just the filename
            if (window.location.protocol === 'file:') {
                const parts = url.split('/');
                url = '/' + parts[parts.length - 1];
            }

            // Add query string if present
            if (window.location.search) {
                url += window.location.search;
            }

            return url;
        },

        /**
         * Get navigation trail from sessionStorage
         */
        getTrail: function() {
            try {
                const trail = sessionStorage.getItem(this.storageKey);
                return trail ? JSON.parse(trail) : [];
            } catch (e) {
                console.error('Error reading navigation trail:', e);
                return [];
            }
        },

        /**
         * Save navigation trail to sessionStorage
         */
        saveTrail: function(trail) {
            try {
                sessionStorage.setItem(this.storageKey, JSON.stringify(trail));
            } catch (e) {
                console.error('Error saving navigation trail:', e);
            }
        },

        /**
         * Record current page in navigation trail
         */
        recordCurrentPage: function() {
            const currentUrl = this.getCurrentUrl();
            const currentTitle = this.getPageTitle();
            let trail = this.getTrail();

            console.log('[Breadcrumbs] Recording page:', currentTitle, 'URL:', currentUrl);
            console.log('[Breadcrumbs] Current trail before:', trail.map(p => p.title).join(' > '));

            // Don't record if this is the same as the last page (prevents duplicate on refresh)
            if (trail.length > 0 && trail[trail.length - 1].url === currentUrl) {
                console.log('[Breadcrumbs] Skipping - same as last page');
                return;
            }

            // Add current page to trail
            trail.push({
                url: currentUrl,
                title: currentTitle,
                timestamp: Date.now()
            });

            // Limit trail length
            if (trail.length > this.maxTrailLength) {
                trail = trail.slice(-this.maxTrailLength);
            }

            this.saveTrail(trail);
            console.log('[Breadcrumbs] Trail updated:', trail.map(p => p.title).join(' > '));
        },

        /**
         * Clear navigation trail
         */
        clearTrail: function() {
            sessionStorage.removeItem(this.storageKey);
        },

        /**
         * Display breadcrumbs on the page
         */
        displayBreadcrumbs: function() {
            const container = document.getElementById('breadcrumbs');
            if (!container) {
                console.log('[Breadcrumbs] No breadcrumb container found on this page');
                return; // No breadcrumb container on this page
            }

            const trail = this.getTrail();
            console.log('[Breadcrumbs] Displaying breadcrumbs, trail length:', trail.length);

            // Don't show breadcrumbs if only one page in trail
            if (trail.length <= 1) {
                container.style.display = 'none';
                console.log('[Breadcrumbs] Hiding breadcrumbs - only one page in trail');
                return;
            }

            container.style.display = 'block';
            console.log('[Breadcrumbs] Showing breadcrumbs:', trail.map(p => p.title).join(' > '));

            // Build breadcrumb HTML
            let html = '<nav class="breadcrumb-nav" aria-label="Breadcrumb">';
            html += '<ol class="breadcrumb-list">';

            // Show all pages except the current one
            for (let i = 0; i < trail.length - 1; i++) {
                const page = trail[i];
                html += '<li class="breadcrumb-item">';
                html += `<a href="${this.escapeHtml(page.url)}" class="breadcrumb-link">${this.escapeHtml(page.title)}</a>`;
                html += '</li>';
                html += '<li class="breadcrumb-separator" aria-hidden="true">›</li>';
            }

            // Add current page (not linked)
            const currentPage = trail[trail.length - 1];
            html += '<li class="breadcrumb-item breadcrumb-current" aria-current="page">';
            html += this.escapeHtml(currentPage.title);
            html += '</li>';

            html += '</ol>';
            html += '</nav>';

            container.innerHTML = html;
        },

        /**
         * Escape HTML to prevent XSS
         */
        escapeHtml: function(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            BreadcrumbTracker.init();
        });
    } else {
        BreadcrumbTracker.init();
    }

    // Expose clearTrail function globally for debugging or reset button
    window.clearBreadcrumbs = function() {
        BreadcrumbTracker.clearTrail();
        location.reload();
    };

})();
