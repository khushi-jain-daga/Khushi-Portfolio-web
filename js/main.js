/**
 * KHUSHI JAIN DAGA — CORE APPLICATION CONTROLLER
 * Roll: 23bcon1665 | JECRC University
 * Experiment 01: Responsive Personal Portfolio Website
 */

(function () {
  'use strict';

  const root = document.documentElement;
  const themeToggleBtn = document.querySelector('#theme-toggle');
  const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
  const mobileDrawer = document.querySelector('#mobile-drawer');
  const drawerCloseBtn = document.querySelector('#mobile-drawer-close');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  const liveTimeEl = document.querySelector('#live-time');

  // ==========================================================================
  // 1. Theme Management (Obsidian Dark / Warm Ivory Light)
  // ==========================================================================
  function applyTheme(themeName) {
    const isDark = themeName === 'dark';
    root.dataset.theme = isDark ? 'dark' : 'light';

    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDark ? '#111111' : '#F4F1E8');
    }

    try {
      localStorage.setItem('kjd-theme', themeName);
    } catch (e) {
      console.warn('LocalStorage unavailable for theme storage:', e);
    }
  }

  // Initial Theme Resolution: Saved pref -> OS preference fallback
  let initialTheme = 'light';
  try {
    const saved = localStorage.getItem('kjd-theme');
    if (saved === 'dark' || saved === 'light') {
      initialTheme = saved;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      initialTheme = 'dark';
    }
  } catch (e) {}

  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = root.dataset.theme === 'dark' ? 'dark' : 'light';
      applyTheme(activeTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // System theme change listener
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      try {
        if (!localStorage.getItem('kjd-theme')) {
          applyTheme(e.matches ? 'dark' : 'light');
        }
      } catch (err) {}
    });
  }

  // ==========================================================================
  // 2. Fullscreen Mobile Navigation Drawer
  // ==========================================================================
  function openMobileDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileDrawer);
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeMobileDrawer);
  }

  drawerLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileDrawer();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeMobileDrawer();
      if (mobileMenuBtn) mobileMenuBtn.focus();
    }
  });

  // ==========================================================================
  // 3. Navigation ScrollSpy (IntersectionObserver)
  // ==========================================================================
  const sections = document.querySelectorAll('main > section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-links .nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            desktopNavLinks.forEach((link) => {
              const href = link.getAttribute('href');
              if (href === `#${currentId}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0
      }
    );

    sections.forEach((sec) => observer.observe(sec));
  }

  // ==========================================================================
  // 4. Live Jaipur / Indian Standard Time Clock
  // ==========================================================================
  function updateLiveClock() {
    if (!liveTimeEl) return;
    try {
      const now = new Date();
      // Format time in Asia/Kolkata timezone
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      });
      liveTimeEl.textContent = `${timeStr} IST`;
    } catch (e) {
      liveTimeEl.textContent = 'JAIPUR / IST';
    }
  }

  updateLiveClock();
  setInterval(updateLiveClock, 30000);
})();
