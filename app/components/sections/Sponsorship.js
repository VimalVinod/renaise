import styles from "../../page.module.css";

export default function Sponsorship() {
  return (
    <section id="sponsorship" className={`${styles.section} ${styles.sponsorshipSection} animate-section`}>
      <div className={styles.sectionContainer}>
        <h2 className={`${styles.sectionTitle} animate-item`}>Sponsorship Opportunities</h2>
        <div className={styles.sponsorshipContent}>
          <div className="animate-item">
            <h3>Why Sponsor?</h3>
            <ul>
              <li>Connect with 1000+ tech enthusiasts and potential recruits</li>
              <li>Showcase your products and services to a targeted audience</li>
              <li>Support the student entrepreneurship ecosystem in Kerala</li>
              <li>Brand visibility across colleges in Kerala</li>
              <li>Network with industry leaders and academics</li>
            </ul>
          </div>
          <div className="animate-item">
            <h3>What You Get</h3>
            <ul>
              <li>Brand placement in all event materials and venue</li>
              <li>Speaking slots in panels or workshops</li>
              <li>Exhibition space at the venue</li>
              <li>Direct interaction with participants</li>
              <li>Media coverage and social media mentions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
