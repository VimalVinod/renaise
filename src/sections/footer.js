import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/footer.module.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaDownload,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";

const Footer = ({ scrollToSectionRef }) => {
  const scrollToSection = (sectionId) => scrollToSectionRef.current(sectionId);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Top Section with Logos */}
        <div className={styles.topSection}>
          <div className={styles.logoContainer}>
            <Image
              src="/img/iedc_logo.svg"
              alt="IEDC CEC Logo"
              width={100}
              height={80}
              className={styles.logo}
            />
          </div>
          <div className={styles.logoContainer}>
            <Image
              src="/img/logo_light.svg"
              alt="ReNaise 2024 Logo"
              width={100}
              height={80}
              className={styles.logo}
            />
          </div>
        </div>
        <p className={styles.tagline}>
          Celebrating 10 Years of Innovation & Impact
        </p>

        {/* Middle Section with Contact and Social */}
        <div className={styles.middleSection}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt size={18} color="var(--color-teal)" />
              <p>College of Engineering Chengannur, Alappuzha, Kerala</p>
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope size={18} color="var(--color-teal)" />
              <a href="mailto:iedc@ceconline.edu">iedc@ceconline.edu</a>
            </div>
          </div>
          <div className={styles.socialLinks}>
            <a
              href="https://instagram.com/iedc_cec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className={styles.socialIcon} />
            </a>
            <a
              href="https://linkedin.com/company/iedc-cec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className={styles.socialIcon} />
            </a>
            <a
              href="https://twitter.com/iedc_cec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className={styles.socialIcon} />
            </a>
          </div>
        </div>
        <div className={styles.mapSection}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.942666130125!2d76.61491067450164!3d9.317330584410042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622ea027eb08f%3A0x41105b207db821c6!2sCollege%20of%20Engineering%20Chengannur!5e1!3m2!1sen!2sin!4v1749993520519!5m2!1sen!2sin"
            className={styles.mapFrame}
            title="College of Engineering Chengannur Location"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.navColumn}>
            <h3 className={styles.columnTitle}>Navigation</h3>
            <a
              onClick={() => scrollToSection("aboutSection")}
              className={styles.footerLink}
            >
              About IEDC
            </a>

            <a
              onClick={() => scrollToSection("momentsSection")}
              className={styles.footerLink}
            >
              Milestones
            </a>
            <a
              onClick={() => scrollToSection("scopeSection")}
              className={styles.footerLink}
            >
              Scope of Event
            </a>
            <a
              onClick={() => scrollToSection("sponsorSection")}
              className={styles.footerLink}
            >
              Sponsorship
            </a>
          </div>
          <div className={styles.actionColumn}>
            <h3 className={styles.columnTitle}>Quick Actions</h3>
            <Link
              href="/register"
              className={`${styles.footerLink} ${styles.actionLink}`}
            >
              <FaArrowRight size={14} /> Register for ReNaise
            </Link>
            <a
              href="/brochure.pdf"
              download
              className={`${styles.footerLink} ${styles.actionLink}`}
            >
              <FaDownload size={14} /> Download Brochure
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className={styles.copyright}>
          <p>
            Made with{" "}
            <span className={styles.heart}>
              <FaHeart size={14} color="red" />
            </span>{" "}
            by deelu
          </p>
        </div>

        {/* Sparkie Mascot */}
        <div className={styles.sparkieContainer}>
          <Image
            src="/img/spark.png"
            alt="Sparkie Mascot"
            width={60}
            height={60}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
