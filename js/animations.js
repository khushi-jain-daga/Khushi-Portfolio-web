/**
 * KHUSHI JAIN DAGA — KINETIC 3D CANVAS SCULPTURE & MOTION SYSTEM
 * Pure mathematical 3D projection, cursor physics, and scroll progress
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. Subtle 3D Perspective Parallax for Interactive Developer Workspace
  // ==========================================================================
  const workspaceCard = document.querySelector('.workspace-card');
  const heroSection = document.querySelector('#hero');

  if (workspaceCard && heroSection && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mouseX = 0;
    let mouseY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 8; // subtle tilt angle in deg
      mouseY = -y * 8;
    });

    heroSection.addEventListener('mouseleave', () => {
      mouseX = 0;
      mouseY = 0;
    });

    function renderParallax() {
      currentTiltX += (mouseY - currentTiltX) * 0.08;
      currentTiltY += (mouseX - currentTiltY) * 0.08;
      workspaceCard.style.transform = `rotateX(${currentTiltX.toFixed(2)}deg) rotateY(${currentTiltY.toFixed(2)}deg)`;
      requestAnimationFrame(renderParallax);
    }

    renderParallax();
  }

  // ==========================================================================
  // 2. Context-Sensitive Custom Cursor (Desktop Only)
  // ==========================================================================
  const cursorDot = document.querySelector('#cursor-dot');
  const cursorOutline = document.querySelector('#cursor-outline');

  if (cursorDot && cursorOutline && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mouseX = -100;
    let mouseY = -100;
    let outlineX = -100;
    let outlineY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.opacity = '1';
      cursorOutline.style.opacity = '1';
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    function animateCursor() {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;
      cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover scale effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .skill-tile, .showcase-visual-frame');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    window.addEventListener('mousedown', () => document.body.classList.add('cursor-active'));
    window.addEventListener('mouseup', () => document.body.classList.remove('cursor-active'));
  }

  // ==========================================================================
  // 3. Scroll Progress Indicator Bar
  // ==========================================================================
  const progressBar = document.querySelector('#scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = `${scrollPercent}%`;
    }, { passive: true });
  }

  // ==========================================================================
  // 4. Scroll Reveal Animations (IntersectionObserver)
  // ==========================================================================
  const revealElements = document.querySelectorAll('.showcase-item, .editorial-about-grid, .honor-panel, .cert-item, .timeline-card');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    });

    revealElements.forEach((el) => {
      el.classList.add('reveal-fade-up');
      revealObserver.observe(el);
    });
  }
})();
