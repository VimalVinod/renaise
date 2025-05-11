"use client";

import { useEffect, useRef } from "react";
import { animate, createScope } from 'animejs';

export default function Animation() {
  const rootRef = useRef(null);
  const scopeRef = useRef(null);

  useEffect(() => {
    // Create a scope for all animations
    scopeRef.current = createScope({ root: rootRef }).add(self => {
      // Hero section animations
      animate('.animate-title', {
        opacity: [0, 1],
        translateY: [50, 0],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: 300
      });

      animate('.animate-subtitle', {
        opacity: [0, 1],
        translateY: [30, 0],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: 500
      });

      animate('.animate-date', {
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: 700
      });

      animate('.animate-cta', {
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: (el, i) => 900 + (i * 100)
      });

      // Register methods for scroll animations
      self.add('animateSection', (section) => {
        animate(section.querySelectorAll('.animate-item'), {
          opacity: [0, 1],
          translateY: [50, 0],
          easing: 'easeOutExpo',
          duration: 800,
          delay: (el, i) => i * 100
        });
      });

      // Register methods for stat counter animations
      self.add('animateCounters', (statElements) => {
        statElements.forEach(el => {
          const target = parseInt(el.getAttribute('data-target'));
          animate(el, {
            innerHTML: [0, target],
            round: 1,
            easing: 'easeInOutExpo',
            duration: 2000
          });
        });
      });
    });

    // Set up intersection observers
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    // Sections observer
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          scopeRef.current.methods.animateSection(entry.target);
          sectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Stats observer
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statElements = entry.target.querySelectorAll('.statNumber');
          scopeRef.current.methods.animateCounters(statElements);
          statObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Register all sections for observation
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => {
      sectionObserver.observe(section);
    });

    // Register stats section for observation
    const statsSection = document.querySelector('.statsGrid');
    if (statsSection) {
      statObserver.observe(statsSection);
    }

    // Cleanup function
    return () => {
      scopeRef.current.revert();
      sectionObserver.disconnect();
      statObserver.disconnect();
    };
  }, []);

  return <div ref={rootRef} className="animation-scope"></div>;
}
