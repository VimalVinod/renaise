import React, { forwardRef } from "react";
import styles from "@styles/navbar.module.css";
import Image from "next/image";

const sections = [
  { id: "aboutSection", label: "About" },
  { id: "momentsSection", label: "Milestones" },
  { id: "scopeSection", label: "Scope" },
  // { id: "chiefSection", label: "Chief Guest" },
  { id: "sponsorSection", label: "Sponsorship" },
];

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
    const openSection = (sectionId) => {
      closeMobileMenu();
      scrollToSection(sectionId);
    };

    return (
      <>
        <nav ref={ref} className={styles.navbar}>
          <div className={styles.navContent}>
            <Image
              src="/img/logo.svg"
              alt="Logo"
              width={50}
              height={50}
              className={styles.logoImage}
              ref={logoTextRef}
              onClick={() => scrollToSection("heroSection")}
            />

            <div className={styles.navMenu}>
              {sections.map((section, index) => (
                <a
                  key={index}
                  className={styles.navItem}
                  onClick={() => {
                    closeMobileMenu();
                    scrollToSection(section.id);
                  }}
                >
                  {section.label}
                </a>
              ))}
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
              {sections.map((section, index) => (
                <a
                  key={index}
                  className={styles.mobileNavItem}
                  onClick={() => openSection(section.id)}
                >
                  {section.label}
                </a>
              ))}
              <div className={styles.mobileRegisterContainer}>
                <button
                  className={styles.mobileRegisterBtn}
                  onClick={closeMobileMenu}
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
      </>
    );
  }
);

Navbar.displayName = "Navbar";
export default Navbar;
