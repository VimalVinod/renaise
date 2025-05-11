import styles from "../../page.module.css";

export default function ChiefGuest() {
  return (
    <section id="chiefguest" className={`${styles.section} ${styles.chiefGuestSection} animate-section`}>
      <div className={styles.sectionContainer}>
        <h2 className={`${styles.sectionTitle} animate-item`}>In the Esteemed Presence of</h2>
        <h3 className="animate-item">Shri Pinarayi Vijayan</h3>
        <p className="animate-item">Chief Minister, Kerala</p>
        <div className={`${styles.guestQuote} animate-item`}>
          <p>"The future of Kerala's economy lies in nurturing innovation and entrepreneurship among our youth. Initiatives like Renaise play a crucial role in building an ecosystem that supports young entrepreneurs to thrive."</p>
        </div>
      </div>
    </section>
  );
}
