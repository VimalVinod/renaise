import React from "react";
import styles from "@styles/about.module.css";
import Image from "next/image";

function About({
  aboutRef,
  bannerRef,
  textContainerRef,
  secondaryTextRef,
  boxRef,
}) {
  return (
    <div className={styles.container} ref={aboutRef}>
      <div className={styles.banner} ref={bannerRef}></div>
      <div className={styles.textContainer} ref={textContainerRef}>
        <h1 className={styles.textWords}>
          A Decade
          <Image
            src="/stuff/exodia.jpeg"
            alt="Renaise Logo"
            width={100}
            height={100}
            className={styles.logoImageBox}
            ref={boxRef}
          />{" "}
          Of
        </h1>
        <h1 className={styles.textWords} style={{ color: "var(--color-teal)" }}>
          <Image
            src="/stuff/empowa.jpeg"
            alt="Renaise Logo"
            width={100}
            height={100}
            className={styles.logoImageBox}
            ref={boxRef}
          />
          Empowering
        </h1>
        <h1 className={styles.textWords} style={{ color: "var(--color-red)" }}>
          Innovation{" "}
          <Image
            src="/stuff/inovo.jpeg"
            alt="Renaise Logo"
            width={100}
            height={100}
            className={styles.logoImageBox}
            ref={boxRef}
          />
        </h1>
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
