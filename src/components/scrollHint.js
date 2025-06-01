"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from "@styles/scrollHint.module.css";

function ScrollHint() {
  const hintRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(hintRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 2, ease: "power2.out" }
    );

    // Continuous bouncing animation for arrow
    gsap.to(arrowRef.current, {
      y: -8,
      duration: 1,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

  const handleClick = () => {
    // Smooth scroll to next section
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div ref={hintRef} className={styles.scrollHint} onClick={handleClick}>
      <div ref={arrowRef} className={styles.arrow}>↓</div>
      <span className={styles.text}>Scroll to Begin</span>
    </div>
  );
}

export default ScrollHint;
