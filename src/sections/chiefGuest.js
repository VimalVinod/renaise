import React from "react";
import styles from "../styles/cheif.module.css";
import Image from "next/image";

function Chief({ topTitleRef, bottomTitleRef, chiefMinisterRef, ceoRef,chiefSectionRef }) {
  return (
    <section className={styles.chiefGuestSection} id="chiefGuests" ref={chiefSectionRef}>
      <div className={styles.chiefGuestContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.titleTop} ref={topTitleRef}>In the esteemed</h2>
          <h2 className={styles.titleBottom} ref={bottomTitleRef}>presence of</h2>
        </div>

        <div className={styles.guestsContainer}>
          <div className={`${styles.guest} ${styles.chief}`} ref={chiefMinisterRef} >
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <Image
                  width={200} 
                  height={170}
                  src="/img/hoomans/cheif-minister.png"
                  alt="Shri Pinarayi Vijayan"
                  className={styles.guestImage}
                />
              </div>
            </div>
            <div className={styles.guestInfo}>
              <h3 className={styles.guestName}>Shri Pinarayi Vijayan</h3>
              <p className={styles.guestDesignation}>
                Chief Minister of Kerala
              </p>
            </div>
          </div>

          <div className={`${styles.guest} ${styles.ceo}`} ref={ceoRef} id="ceo">
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <Image
                  width={200}
                  height={170}
                  src="/img/hoomans/ceo-ksum.png"
                  alt="Anoop Ambika"
                  className={styles.guestImage}
                />
              </div>
            </div>
            <div className={styles.guestInfo}>
              <h3 className={styles.guestName}>Anoop Ambika</h3>
              <p className={styles.guestDesignation}>CEO of KSUM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chief;
