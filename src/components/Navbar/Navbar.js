"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import styles from './Navbar.module.css';

const Navbar = ({ isActive }) => {
  const navRef = useRef(null);

  useEffect(() => {
    if (!navRef.current) return;

    if (isActive) {
      gsap.fromTo(
        navRef.current,
        {
          y: -100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out'
        }
      );
    }
  }, [isActive]);

  return (
    <nav ref={navRef} className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.brand}>
          <Link href="/" className={styles.brandLink}>
            RENAISE
          </Link>
        </div>
        
        <div className={styles.navLinks}>
          <Link href="#" className={styles.navLink}>text</Link>
          <Link href="#" className={styles.navLink}>text</Link>
          <Link href="#" className={styles.navLink}>text</Link>
          <Link href="#" className={styles.navLink}>text</Link>
        </div>
        
        <div className={styles.navButtons}>
          <button className={styles.secondaryButton}>Lorem</button>
          <button className={styles.primaryButton}>lets connect &gt;</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
