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
  FaUsers,
  FaWhatsapp,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
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

        <div className={styles.bottomSection}>
          <div className={styles.navColumn}>
            <h3 className={styles.columnTitle}>Navigation</h3>
            <Link href="/about" className={styles.footerLink}>
              About IEDC
            </Link>
            <Link href="/timeline" className={styles.footerLink}>
              Timeline / Journey
            </Link>
            <Link href="/gallery" className={styles.footerLink}>
              Gallery / Moments
            </Link>
            <Link href="/schedule" className={styles.footerLink}>
              Event Schedule
            </Link>
          </div>
          <div className={styles.actionColumn}>
            <h3 className={styles.columnTitle}>Quick Actions</h3>
            <Link
              href="/register"
              className={`${styles.footerLink} ${styles.actionLink}`}
            >
              <FaArrowRight size={14} /> Register for ReNaise
            </Link>
            <Link
              href="/volunteer"
              className={`${styles.footerLink} ${styles.actionLink}`}
            >
              <FaUsers size={14} /> Volunteer
            </Link>
            <a
              href="https://chat.whatsapp.com/your-whatsapp-group-link"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.footerLink} ${styles.actionLink}`}
            >
              <FaWhatsapp size={14} /> Join WhatsApp Group
            </a>
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
