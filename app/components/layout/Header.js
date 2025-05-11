"use client";

import { useState, useEffect } from "react";
import styles from "../styles/layout/Header.module.css";
import classNames from "classnames";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={classNames(styles.header, { [styles.headerShrink]: scrolled })}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>RENAISE</div>
        <nav className={styles.nav}>
          <div className={classNames(styles.navLinks, { [styles.open]: menuOpen })}>
            <a href="#about" className={styles.navLink}>About</a>
            <a href="#moments" className={styles.navLink}>Moments</a>
            <a href="#scope" className={styles.navLink}>Scope</a>
            <a href="#chiefguest" className={styles.navLink}>Chief Guest</a>
            <a href="#workshops" className={styles.navLink}>Workshops</a>
            <a href="#sponsorship" className={styles.navLink}>Sponsorship</a>
            <a href="#partners" className={styles.navLink}>Partners</a>
          </div>
          <a href="#register" className={`${styles.regBtn}`}>Register</a>
          <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </nav>
      </div>
    </header>
  );
}
