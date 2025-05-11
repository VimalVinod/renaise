import styles from "../../page.module.css";

export default function Moments() {
  return (
    <section id="moments" className={`${styles.section} ${styles.momentsSection} animate-section`}>
      <div className={styles.sectionContainer}>
        <h2 className={`${styles.sectionTitle} animate-item`}>Milestone Moments</h2>
        <div className={styles.momentsGrid}>
          {/* Placeholder content - would be replaced with actual image components */}
          <div className="animate-item">
            <div style={{ height: "200px", backgroundColor: "#ddd", borderRadius: "8px" }}></div>
            <p>Inauguration ceremony of Renaise 2022</p>
          </div>
          <div className="animate-item">
            <div style={{ height: "200px", backgroundColor: "#ddd", borderRadius: "8px" }}></div>
            <p>Panel discussion with industry leaders</p>
          </div>
          <div className="animate-item">
            <div style={{ height: "200px", backgroundColor: "#ddd", borderRadius: "8px" }}></div>
            <p>Student pitching competition finals</p>
          </div>
          <div className="animate-item">
            <div style={{ height: "200px", backgroundColor: "#ddd", borderRadius: "8px" }}></div>
            <p>Workshop on product development</p>
          </div>
        </div>
      </div>
    </section>
  );
}
