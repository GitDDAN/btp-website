/**
 * Structured Breadcrumb Navigation
 * Uses predefined hierarchy from breadcrumb-config.js
 */

(function() {
    'use strict';

    const StructuredBreadcrumbs = {
        /**
         * Initialize breadcrumb display
         */
        init: function() {
            this.displayBreadcrumbs();
        },

        /**
         * Display breadcrumbs on the page
         */
        displayBreadcrumbs: function() {
            const container = document.getElementById('breadcrumbs');
            if (!container) {
                console.log('[Breadcrumbs] No breadcrumb container found');
                return;
            }

            // Get breadcrumb trail from config
            const trail = getBreadcrumbTrail();

            console.log('[Breadcrumbs] Trail:', trail.map(p => p.title).join(' > '));

            // Don't show breadcrumbs on home page
            if (trail.length <= 1) {
                container.style.display = 'none';
                return;
            }

            container.style.display = 'block';

            // Build breadcrumb HTML
            let html = '<nav class="breadcrumb-nav" aria-label="Breadcrumb">';
            html += '<ol class="breadcrumb-list">';

            // Show all pages except the current one
            for (let i = 0; i < trail.length - 1; i++) {
                const page = trail[i];
                html += '<li class="breadcrumb-item">';
                html += `<a href="${this.escapeHtml(page.url)}" class="breadcrumb-link">${this.escapeHtml(page.title)}</a>`;
                html += '</li>';
                if (i < trail.length - 2) {
                    html += '<li class="breadcrumb-separator" aria-hidden="true">›</li>';
                }
            }

            // Add separator before current page
            if (trail.length > 1) {
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
            StructuredBreadcrumbs.init();
        });
    } else {
        StructuredBreadcrumbs.init();
    }

})();
