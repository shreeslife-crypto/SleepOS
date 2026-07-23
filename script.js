/**
 * Sleep OS — Interactive Case Study
 * Vanilla JS — No dependencies
 */

(function() {
    'use strict';

    // ===== NAVIGATION =====

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const sideNav = document.getElementById('sideNav');
    const navToggle = document.getElementById('navToggle');

    // Smooth scroll navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            // Close mobile nav
            if (window.innerWidth <= 768) {
                sideNav.classList.remove('open');
            }
        });
    });

    // Active section highlighting on scroll
    function updateActiveNav() {
        const scrollPos = window.scrollY + 120;

        let currentSection = '';
        sections.forEach(section => {
            if (section.offsetTop <= scrollPos) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Throttled scroll handler
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) return;
        scrollTimeout = setTimeout(function() {
            updateActiveNav();
            scrollTimeout = null;
        }, 50);
    });

    // Mobile nav toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            sideNav.classList.toggle('open');
        });

        // Close nav when clicking outside
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768 &&
                !sideNav.contains(e.target) &&
                !navToggle.contains(e.target)) {
                sideNav.classList.remove('open');
            }
        });
    }

    // ===== WIREFRAME TAB NAVIGATION =====

    const wfTabs = document.querySelectorAll('.wf-tab');
    const wfScreens = document.querySelectorAll('.wireframe-screen');

    wfTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetScreen = this.getAttribute('data-screen');

            // Update active tab
            wfTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Show target screen
            wfScreens.forEach(screen => {
                screen.classList.remove('active');
            });

            const target = document.getElementById('screen-' + targetScreen);
            if (target) {
                target.classList.add('active');
            }
        });
    });

    // ===== DEVICE TAB NAVIGATION =====

    const deviceTabs = document.querySelectorAll('.wf-tab-device');
    const deviceScreens = document.querySelectorAll('.device-screen');

    deviceTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetDevice = this.getAttribute('data-device');

            // Update active tab
            deviceTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Show target device screen
            deviceScreens.forEach(screen => {
                screen.classList.remove('active');
            });

            const target = document.getElementById('device-' + targetDevice);
            if (target) {
                target.classList.add('active');
            }
        });
    });

    // ===== INITIAL STATE =====
    updateActiveNav();

})();
