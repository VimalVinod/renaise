import React, { forwardRef } from "react";
import styles from "@styles/mainContent.module.css";

const MainContent = forwardRef((props, ref) => {
  return (
    <main ref={ref} className={styles.mainContent}>
      <div className={styles.contentGrid}>
        <div className={styles.textColumn}>
          <h1 className={styles.mainHeading}>
            All Kerala Entrepreneurship Meetup
          </h1>
          <h2 className={styles.subHeading}>
            College of Engineering Chengannur
          </h2>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryBtn}>
              Register Now
              <span className={styles.arrow}>→</span>
            </button>
            <button className={styles.secondaryBtn}>Sponsor Us</button>
          </div>
        </div>
        <div className={styles.illustrationColumn}>
          {/* Sparkie will be positioned in the Hero component */}
        </div>
      </div>
    </main>
  );
});

MainContent.displayName = "MainContent";
export default MainContent;
