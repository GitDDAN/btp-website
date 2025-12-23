/**
 * Dropdown Menu Navigation
 * Handles dropdown menu interactions for main navigation
 */

(function() {
    'use strict';

    const DropdownMenu = {
        /**
         * Initialize all dropdown menus
         */
        init: function() {
            this.setupDropdowns();
            this.setupClickOutside();
        },

        /**
         * Setup dropdown toggle functionality
         */
        setupDropdowns: function() {
            const dropdowns = document.querySelectorAll('.nav-dropdown');

            dropdowns.forEach(dropdown => {
                const toggle = dropdown.querySelector('.nav-dropdown-toggle');

                if (!toggle) return;

                // Click to toggle
                toggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.toggleDropdown(dropdown);
                });

                // Hover to open (desktop only)
                if (window.innerWidth > 768) {
                    dropdown.addEventListener('mouseenter', () => {
                        this.openDropdown(dropdown);
                    });

                    dropdown.addEventListener('mouseleave', () => {
                        this.closeDropdown(dropdown);
                    });
                }
            });
        },

        /**
         * Toggle dropdown open/closed
         */
        toggleDropdown: function(dropdown) {
            const isActive = dropdown.classList.contains('active');

            // Close all other dropdowns
            this.closeAllDropdowns();

            // Toggle this dropdown
            if (!isActive) {
                dropdown.classList.add('active');
            }
        },

        /**
         * Open a specific dropdown
         */
        openDropdown: function(dropdown) {
            dropdown.classList.add('active');
        },

        /**
         * Close a specific dropdown
         */
        closeDropdown: function(dropdown) {
            dropdown.classList.remove('active');
        },

        /**
         * Close all dropdowns
         */
        closeAllDropdowns: function() {
            const dropdowns = document.querySelectorAll('.nav-dropdown');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        },

        /**
         * Close dropdowns when clicking outside
         */
        setupClickOutside: function() {
            document.addEventListener('click', (e) => {
                const isDropdownClick = e.target.closest('.nav-dropdown');
                if (!isDropdownClick) {
                    this.closeAllDropdowns();
                }
            });
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            DropdownMenu.init();
        });
    } else {
        DropdownMenu.init();
    }

    // Re-initialize on window resize (for mobile/desktop switch)
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            DropdownMenu.init();
        }, 250);
    });

    // Expose globally for dynamic navigation updates
    window.DropdownMenu = DropdownMenu;

})();
