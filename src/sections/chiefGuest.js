import React from 'react';
import styles from '../styles/cheif.module.css';

function Chief() {
  return (
    <section className={styles.chiefGuestSection} id="chiefGuests">
      <div className={styles.chiefGuestContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.titleTop}>In the esteemed</h2>
          <h2 className={styles.titleBottom}>presence of</h2>
        </div>
        
        <div className={styles.guestsContainer}>
          <div className={styles.guest}>
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <img 
                  src="/images/pinarayi.jpg" 
                  alt="Shri Pinarayi Vijayan" 
                  className={styles.guestImage}
                />
              </div>
            </div>
            <div className={styles.guestInfo}>
              <h3 className={styles.guestName}>Shri Pinarayi Vijayan</h3>
              <p className={styles.guestDesignation}>Chief Minister of Kerala</p>
            </div>
          </div>
          
          <div className={styles.guest}>
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <img 
                  src="/images/anoop.jpg" 
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