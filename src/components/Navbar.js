import React, { forwardRef } from "react";
import styles from "@styles/navbar.module.css";

const Navbar = forwardRef(
  (
    {
      logoTextRef,
      isMobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu,
      scrollToSection,
    },
    ref
  ) => {
    return (
      <>
        <nav ref={ref} className={styles.navbar}>
          <div className={styles.navContent}>
            <div ref={logoTextRef} className={styles.logoText}></div>

            <div className={styles.navMenu}>
              <a
                className={styles.navItem}
                onClick={() => scrollToSection("aboutSection")}
              >
                About
              </a>
              <a className={styles.navItem}>Moments</a>
              <a
                className={styles.navItem}
                onClick={() => scrollToSection("scopeSection")}
              >
                Scope
              </a>
              <a
                className={styles.navItem}
                onClick={() => scrollToSection("chiefSection")}
              >
                Chief Guest
              </a>
              <a className={styles.navItem}>Sponsorship</a>
            </div>

            <button className={styles.registerBtn}>Register Now</button>

            <button
              className={`${styles.hamburger} ${
                isMobileMenuOpen ? styles.active : ""
              }`}
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
          className={`${styles.overlay} ${
            isMobileMenuOpen ? styles.active : ""
          }`}
          onClick={closeMobileMenu}
        ></div>

        {/* Mobile Menu */}
        <div
          className={`${styles.mobileMenu} ${
            isMobileMenuOpen ? styles.active : ""
          }`}
        >
          <div className={styles.mobileMenuHeader}>
            <span className={styles.mobileMenuTitle}>Menu</span>
          </div>

          <a
            className={styles.mobileNavItem}
            onClick={() => {
              closeMobileMenu();
              scrollToSection("aboutSection");
            }}
          >
            About
          </a>
          <a
            className={styles.mobileNavItem}
            onClick={() => {
              closeMobileMenu();
            }}
          >
            Moments
          </a>
          <a
            className={styles.mobileNavItem}
            onClick={() => {
              closeMobileMenu();
              scrollToSection("scopeSection");
            }}
          >
            Scope
          </a>
          <a
            className={styles.mobileNavItem}
            onClick={() => {
              closeMobileMenu();
              scrollToSection("chiefSection");
            }}
          >
            Chief Guest
          </a>
          <a className={styles.mobileNavItem} onClick={closeMobileMenu}>
            Sponsorship
          </a>

          <div className={styles.mobileRegisterContainer}>
            <button
              className={styles.mobileRegisterBtn}
              onClick={closeMobileMenu}
            >
              Register Now
            </button>
          </div>
        </div>
      </>
    );
  }
);

Navbar.displayName = "Navbar";
export default Navbar;
