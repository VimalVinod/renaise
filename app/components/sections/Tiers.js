import styles from "../../page.module.css";

export default function Tiers() {
  return (
    <section className={`${styles.section} ${styles.tiersSection} animate-section`}>
      <div className={styles.sectionContainer}>
        <h2 className={`${styles.sectionTitle} animate-item`}>Sponsorship Tiers</h2>
        <div className={styles.tiersGrid}>
          <div className={`${styles.tierCard} animate-item`}>
            <h3>Platinum</h3>
            <p>Prime visibility with maximum brand exposure across all channels.</p>
            <ul>
              <li>Keynote speaking opportunity</li>
              <li>Premium exhibition space</li>
              <li>Logo on all event materials</li>
              <li>Social media campaign</li>
            </ul>
          </div>
          <div className={`${styles.tierCard} animate-item`}>
            <h3>Gold</h3>
            <p>Excellent visibility with prominent branding throughout the event.</p>
            <ul>
              <li>Panel participation</li>
              <li>Exhibition space</li>
              <li>Logo on event website and materials</li>
              <li>Social media mentions</li>
            </ul>
          </div>
          <div className={`${styles.tierCard} animate-item`}>
            <h3>Silver</h3>
            <p>Good visibility with branding opportunities.</p>
            <ul>
              <li>Workshop sponsorship</li>
              <li>Logo on event website</li>
              <li>Promotional material in participant kits</li>
              <li>Social media mentions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
