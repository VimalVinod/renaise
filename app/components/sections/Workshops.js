import styles from "../../page.module.css";

export default function Workshops() {
  return (
    <section id="workshops" className={`${styles.section} ${styles.workshopSection} animate-section`}>
      <div className={styles.sectionContainer}>
        <h2 className={`${styles.sectionTitle} animate-item`}>Workshop Zone</h2>
        <div className={styles.workshopGrid}>
          <div className={`${styles.workshopCard} animate-item`}>
            <h3>MVP Development</h3>
            <p>Learn how to build a minimum viable product that validates your business idea effectively.</p>
          </div>
          <div className={`${styles.workshopCard} animate-item`}>
            <h3>UI/UX Design</h3>
            <p>Create user interfaces that are both beautiful and functional with industry best practices.</p>
          </div>
          <div className={`${styles.workshopCard} animate-item`}>
            <h3>Pitch Perfect</h3>
            <p>Master the art of pitching your startup to investors and potential business partners.</p>
          </div>
          <div className={`${styles.workshopCard} animate-item`}>
            <h3>Funding Strategies</h3>
            <p>Explore various funding options from bootstrapping to venture capital for your startup.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
