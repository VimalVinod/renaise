import styles from "../styles/layout/Footer.module.css";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Renaise 2025</h3>
          <p>Kerala's largest student-led entrepreneurship meetup organized by IEDC Bootcamp CEC.</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <div className={styles.footerLinks}>
            <a href="#about">About</a>
            <a href="#scope">Scope</a>
            <a href="#workshops">Workshops</a>
            <a href="#sponsorship">Sponsorship</a>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p>College of Engineering Chengannur</p>
          <p>Alappuzha, Kerala</p>
          <p>contact@renaise.in</p>
          <div className={styles.socialIcons}>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2025 Renaise. All rights reserved.</p>
      </div>
    </footer>
  );
}
