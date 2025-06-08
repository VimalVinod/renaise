import React, { forwardRef } from "react";
import styles from "@styles/navbar.module.css";

const Navbar = forwardRef(({ logoTextRef, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu }, ref) => {
  return (
    <>
      <nav ref={ref} className={styles.navbar}>
        <div className={styles.navContent}>
          <div ref={logoTextRef} className={styles.logoText}>
          </div>

          <div className={styles.navMenu}>
            <a href="#about" className={styles.navItem}>
              About
            </a>
            <a href="#moments" className={styles.navItem}>
              Moments
            </a>
            <a href="#scope" className={styles.navItem}>
              Scope
            </a>
            <a href="#chief-guest" className={styles.navItem}>
              Chief Guest
            </a>
            <a href="#sponsorship" className={styles.navItem}>
              Sponsorship
            </a>
          </div>

          <button className={styles.registerBtn}>
            Register Now
          </button>

          <button 
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`${styles.overlay} ${isMobileMenuOpen ? styles.active : ''}`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
        <div className={styles.mobileMenuHeader}>
          <span className={styles.mobileMenuTitle}>Menu</span>
        </div>
        
        <a href="#about" className={styles.mobileNavItem} onClick={closeMobileMenu}>
          About
        </a>
        <a href="#moments" className={styles.mobileNavItem} onClick={closeMobileMenu}>
          Moments
        </a>
        <a href="#scope" className={styles.mobileNavItem} onClick={closeMobileMenu}>
          Scope
        </a>
        <a href="#chief-guest" className={styles.mobileNavItem} onClick={closeMobileMenu}>
          Chief Guest
        </a>
        <a href="#sponsorship" className={styles.mobileNavItem} onClick={closeMobileMenu}>
          Sponsorship
        </a>
        
        <div className={styles.mobileRegisterContainer}>
          <button className={styles.mobileRegisterBtn} onClick={closeMobileMenu}>
            Register Now
          </button>
        </div>
      </div>
    </>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
