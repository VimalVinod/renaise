import React, { useState, useEffect } from "react";
import styles from "@styles/what.module.css";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaRocket,
  FaMicrophone,
  FaLaptop,
} from "react-icons/fa";

function What({ whatsectionRef, whatSectionTitleRef, whatSectionContentRef }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    // Initial check
    handleResize();
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.whatSection} ref={whatsectionRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader} ref={whatSectionTitleRef}>
          <h2 className={styles.title}>
            What is <span>Renaise?</span>
          </h2>
        </div>

        <div className={styles.content} ref={whatSectionContentRef}>
          {isMobile ? (
            // Mobile view with key facts as bullet points
            <div className={styles.description}>
              <p>
                <span className={styles.highlight}>Renaise</span> – All Kerala
                Entrepreneurs Meetup is a flagship one-day, student-led
                entrepreneurial festival hosted by{" "}
                <span className={styles.highlight}>IEDC BOOTCAMP CEC</span>.
              </p>
              
              <ul className={styles.mobileFactsList}>
                {/* <li className={styles.mobileFact}>
                  <FaCalendarAlt className={styles.mobileIcon} />
                  <span>August 23, 2025</span>
                </li> */}
                <li className={styles.mobileFact}>
                  <FaMapMarkerAlt className={styles.mobileIcon} />
                  <span>College of Engineering Chengannur</span>
                </li>
                <li className={styles.mobileFact}>
                  <FaUsers className={styles.mobileIcon} />
                  <span>1000+ innovators from across Kerala</span>
                </li>
                <li className={styles.mobileFact}>
                  <FaRocket className={styles.mobileIcon} />
                  <span>Focus on student entrepreneurship</span>
                </li>
                <li className={styles.mobileFact}>
                  <FaMicrophone className={styles.mobileIcon} />
                  <span>Talks & panel discussions by industry leaders</span>
                </li>
                <li className={styles.mobileFact}>
                  <FaLaptop className={styles.mobileIcon} />
                  <span>Hands-on workshops & startup showcase</span>
                </li>
              </ul>
              
              <p>
                Designed as a starter kit for aspiring entrepreneurs, Renaise is
                backed by active community partners and sponsors across all
                domains of tech and entrepreneurship.
              </p>
            </div>
          ) : (
            // Desktop view with cleaner, less cluttered text
            <div className={styles.description}>
              <p>
                <span className={styles.highlight}>Renaise</span> – All Kerala
                Entrepreneurs Meetup is a flagship one-day, student-led
                entrepreneurial festival hosted by{" "}
                <span className={styles.highlight}>IEDC BOOTCAMP CEC</span> 
                {/* on 
                August 23, 2025 at the College of Engineering Chengannur. */}
              </p>
              
              <div className={styles.desktopFactsRow}>
                {/* <div className={styles.desktopFact}>
                  <div className={styles.factIconBox}>
                    <FaCalendarAlt />
                  </div>
                  <p>August 23, 2025</p>
                </div> */}
                <div className={styles.desktopFact}>
                  <div className={styles.factIconBox}>
                    <FaMapMarkerAlt />
                  </div>
                  <p>CEC, Chengannur</p>
                </div>
                <div className={styles.desktopFact}>
                  <div className={styles.factIconBox}>
                    <FaUsers />
                  </div>
                  <p>1000+ participants</p>
                </div>
              </div>
              
              <p>
                Bringing together Kerala&apos;s brightest student innovators, early-stage startups, mentors, 
                and ecosystem enablers, the event features power-packed panel discussions and
                talk sessions led by premium speakers from across Kerala, alongside startup showcases, 
                a vibrant expo zone, and hands-on workshop tracks.
              </p>
              
              <p>
                Designed as a starter kit for aspiring entrepreneurs, Renaise is backed by active community partners
                and sponsors across all domains of tech and entrepreneurship.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default What;
