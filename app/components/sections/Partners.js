import styles from "../../page.module.css";

export default function Partners() {
  return (
    <section id="partners" className={`${styles.section} ${styles.partnersSection} animate-section`}>
      <div className={styles.sectionContainer}>
        <h2 className={`${styles.sectionTitle} animate-item`}>Our Partners</h2>
        <div className={styles.partnersGrid}>
          {/* Placeholder for partner logos - would be replaced with actual Image components */}
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className={`${styles.partnerLogo} animate-item`} style={{ 
              width: "100px", 
              height: "50px", 
              backgroundColor: "#ddd",
              borderRadius: "4px" 
            }}></div>
          ))}
        </div>
      </div>
    </section>
  );
}
