import styles from "../../page.module.css";

export default function About() {
  return (
    <section id="about" className={`${styles.section} ${styles.aboutSection} animate-section`}>
      <div className={styles.sectionContainer}>
        <h2 className={`${styles.sectionTitle} animate-item`}>A Decade of Empowering Innovation</h2>
        <div className={styles.aboutContent}>
          <div className="animate-item">
            <p>Renaise is Kerala&apos;s largest student-led entrepreneurship meetup, bringing together innovators, entrepreneurs, and industry leaders to foster innovation and collaboration.</p>
            <p>Since its inception, Renaise has been a platform for students to connect with established entrepreneurs, learn from their experiences, and showcase their ideas to potential investors.</p>
            <p className={styles.quote}>&quot;Turning students into changemakers.&quot;</p>
          </div>
          <div className="animate-item">
            <h3>Key Milestones</h3>
            <ul>
              <li>2015: First Renaise event with 200+ attendees</li>
              <li>2018: Expanded to include startup exhibitions</li>
              <li>2020: Virtual edition reached 5000+ online participants</li>
              <li>2022: Introduced specialized tracks and workshops</li>
              <li>2025: Celebrating 10 years with our biggest event yet</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
