import React from "react";
import styles from "@styles/what.module.css";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaRocket,
  FaMicrophone,
  FaLaptop,
} from "react-icons/fa";

function What({ whatsectionRef,whatSectionTitleRef, whatSectionContentRef }) {
  return (
    <div className={styles.whatSection} ref={whatsectionRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader} ref={whatSectionTitleRef}>
          <h2 className={styles.title}>
            What is <span>Renaise?</span>
          </h2>
        </div>

        <div className={styles.content} ref={whatSectionContentRef}>
          <div className={styles.description}>
            <p>
              <span className={styles.highlight}>Renaise</span> – All Kerala
              Entrepreneurs Meetup is a flagship one-day, student-led
              entrepreneurial festival hosted by{" "}
              <span className={styles.highlight}>IEDC BOOTCAMP CEC</span>.
              Taking place on{" "}
              <span className={styles.inlineInfo}>
                <FaCalendarAlt className={styles.inlineIcon} /> August 23, 2025
              </span>{" "}
              at the{" "}
              <span className={styles.inlineInfo}>
                <FaMapMarkerAlt className={styles.inlineIcon} /> College of
                Engineering Chengannur
              </span>
              , the event brings together{" "}
              <span className={styles.inlineInfo}>
                <FaUsers className={styles.inlineIcon} /> over 1000 innovators
              </span>{" "}
              from across the state.
            </p>
            <p>
              With a primary{" "}
              <span className={styles.inlineInfo}>
                <FaRocket className={styles.inlineIcon} /> focus on student
                entrepreneurship
              </span>
              , Renaise connects Kerala&apos;s brightest student innovators,
              early-stage startups, mentors, and ecosystem enablers. The event
              features{" "}
              <span className={styles.inlineInfo}>
                <FaMicrophone className={styles.inlineIcon} /> power-packed
                panel discussions
              </span>{" "}
              and talk sessions led by premium speakers from across Kerala,
              alongside startup showcases, a vibrant expo zone, and{" "}
              <span className={styles.inlineInfo}>
                <FaLaptop className={styles.inlineIcon} /> hands-on workshop
                tracks
              </span>
              .
            </p>
            <p>
              Designed as a starter kit for aspiring entrepreneurs, Renaise is
              backed by active community partners and sponsors across all
              domains of tech and entrepreneurship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default What;
