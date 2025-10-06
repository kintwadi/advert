/**
 * Modern MGP Angola JavaScript
 * Handles modern UI interactions and animations
 */

(function() {
  'use strict';

  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      this.classList.toggle('active');
      
      // Animate toggle button
      const spans = this.querySelectorAll('span');
      if (this.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (navMenu && mobileToggle) {
      if (!navMenu.contains(event.target) && 
          !mobileToggle.contains(event.target) && 
          navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
        
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Lazy loading for images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Add fade-in animation on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.single-bottom, .card');
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });

      elements.forEach(el => observer.observe(el));
    } else {
      // Fallback for browsers without IntersectionObserver
      elements.forEach(el => el.classList.add('fade-in'));
    }
  };

  // Initialize animations when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateOnScroll);
  } else {
    animateOnScroll();
  }

  // Sticky header shadow on scroll
  let lastScroll = 0;
  const navbar = document.querySelector('.modern-navbar');
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
      } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
      }
      
      lastScroll = currentScroll;
    });
  }

  // Search input enhancements
  const searchInputs = document.querySelectorAll('.search input');
  searchInputs.forEach(input => {
    // Add search icon dynamically
    const wrapper = input.parentElement;
    if (!wrapper.querySelector('.search-icon')) {
      const icon = document.createElement('i');
      icon.className = 'fa fa-search search-icon';
      icon.style.position = 'absolute';
      icon.style.left = '1rem';
      icon.style.top = '50%';
      icon.style.transform = 'translateY(-50%)';
      icon.style.color = '#9ca3af';
      icon.style.pointerEvents = 'none';
      
      wrapper.style.position = 'relative';
      wrapper.appendChild(icon);
      input.style.paddingLeft = '2.5rem';
    }

    // Clear button
    input.addEventListener('input', function() {
      const clearBtn = wrapper.querySelector('.clear-search');
      if (this.value && !clearBtn) {
        const btn = document.createElement('button');
        btn.className = 'clear-search';
        btn.innerHTML = '×';
        btn.style.cssText = `
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #9ca3af;
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        `;
        btn.addEventListener('click', () => {
          input.value = '';
          btn.remove();
          input.focus();
        });
        wrapper.appendChild(btn);
      } else if (!this.value && clearBtn) {
        clearBtn.remove();
      }
    });
  });

  // Card hover effects enhancement
  document.querySelectorAll('.single-bottom').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
  });

  // Add loading state management
  window.showLoader = function() {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.display = 'flex';
    }
  };

  window.hideLoader = function() {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.display = 'none';
    }
  };

  // Handle dynamic content loading
  const observeNewContent = () => {
    const targetNode = document.querySelector('.listings-grid');
    if (!targetNode) return;

    const config = { childList: true, subtree: true };
    const callback = function(mutationsList) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1 && node.classList.contains('single-bottom')) {
              node.classList.add('fade-in');
            }
          });
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  };

  observeNewContent();

  // Enhanced category tree interactions
  document.addEventListener('click', function(e) {
    if (e.target.closest('#treeview_container li a')) {
      const link = e.target.closest('a');
      const listItem = link.parentElement;
      
      // Add ripple effect
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(37, 99, 235, 0.3);
        width: 100px;
        height: 100px;
        margin-left: -50px;
        margin-top: -50px;
        pointer-events: none;
        animation: ripple 0.6s ease-out;
      `;
      
      const rect = link.getBoundingClientRect();
      ripple.style.left = (e.clientX - rect.left) + 'px';
      ripple.style.top = (e.clientY - rect.top) + 'px';
      
      link.style.position = 'relative';
      link.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    }
  });

  // Add ripple animation keyframes
  if (!document.querySelector('#ripple-animation')) {
    const style = document.createElement('style');
    style.id = 'ripple-animation';
    style.textContent = `
      @keyframes ripple {
        0% {
          transform: scale(0);
          opacity: 1;
        }
        100% {
          transform: scale(2);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Performance optimization: Debounce scroll events
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Initialize tooltips if using Bootstrap
  if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  // Console welcome message
  console.log('%cMGP Angola', 'font-size: 24px; font-weight: bold; color: #2563eb;');
  console.log('%cPlataforma Moderna de Classificados', 'font-size: 14px; color: #6b7280;');

})();
