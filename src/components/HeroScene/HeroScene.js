"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from '@components/Navbar/Navbar';
import styles from './HeroScene.module.css';

const HeroScene = ({ isActive, onAnimationComplete }) => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!isActive || !heroRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }
    });

    // Animate headline from left
    tl.fromTo(
      headlineRef.current,
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power2.out'
      },
      0.3
    );

    // Animate button from left (slightly delayed)
    tl.fromTo(
      buttonRef.current,
      {
        x: -50,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      },
      0.5
    );

    // Animate character image from right
    tl.fromTo(
      imageRef.current,
      {
        x: 100,
        opacity: 0,
        scale: 0.9
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power2.out'
      },
      0.4
    );

    return () => {
      tl.kill();
    };
  }, [isActive, onAnimationComplete]);

  if (!isActive) return null;

  return (
    <div ref={heroRef} className={styles.heroScene}>
      <Navbar isActive={isActive} />
      
      <div className={styles.heroContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftColumn}>
            <h1 ref={headlineRef} className={styles.headline}>
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <button ref={buttonRef} className={styles.exploreButton}>
              Explore &gt;
            </button>
          </div>
          
          <div className={styles.rightColumn}>
            <img
              ref={imageRef}
              src="/images/character_beside_rocket.png"
              alt="Character beside rocket"
              className={styles.characterImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroScene;
