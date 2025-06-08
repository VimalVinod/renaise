import React from "react";
import styles from "@styles/about.module.css";

function About({ aboutRef, bannerRef, textContainerRef, secondaryTextRef }) {
  return (
    <div className={styles.container} ref={aboutRef}>
      <div className={styles.banner} ref={bannerRef}>
        <img src="/img/banner.svg" alt="About Banner" loading="lazy" />
      </div>
      <div className={styles.textContainer} ref={textContainerRef}>
        <h1 className={styles.textWords}>A Decade Of</h1>
        <h1 className={styles.textWords}> Empowering</h1>
        <h1 className={styles.textWords}>Innovation</h1>
      </div>
      <p className={styles.secondaryTextContainer} ref={secondaryTextRef}>
        Renaise is Kerala&apos;s largest student-led entrepreneurship meetup,
        bringing together innovators, entrepreneurs, and industry leaders to
        foster innovation and collaboration. Since its inception, Renaise has
        been a platform for students to connect with established entrepreneurs,
        learn from their experiences, and showcase their ideas to potential
        investors.
      </p>
    </div>
  );
}

export default About;
