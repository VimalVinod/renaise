import styles from "../../page.module.css";

export default function Scope() {
  return (
    <section id="scope" className={`${styles.section} ${styles.scopeSection} animate-section`}>
      <div className={styles.sectionContainer}>
        <h2 className={`${styles.sectionTitle} animate-item`}>Scope of Event</h2>
        <div className={`${styles.statsGrid} statsGrid`}>
          <div className={`${styles.statCard} animate-item`}>
            <span className="statNumber" data-target="1000">0</span>
            <h3>Attendees</h3>
            <p>From colleges across Kerala</p>
          </div>
          <div className={`${styles.statCard} animate-item`}>
            <span className="statNumber" data-target="30">0</span>
            <h3>Startups</h3>
            <p>Showcasing innovative solutions</p>
          </div>
          <div className={`${styles.statCard} animate-item`}>
            <span className="statNumber" data-target="50">0</span>
            <h3>Mentors</h3>
            <p>Industry experts providing guidance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
