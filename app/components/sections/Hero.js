import styles from "../styles/sections/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={`${styles.title} animate-title`}>RENAISE 2025</h1>
        <p className={`${styles.subtitle} animate-subtitle`}>All Kerala Entrepreneurship Meetup</p>
        <p className={`${styles.date} animate-date`}>Coming Soon • College of Engineering Chengannur</p>
        <div className={styles.ctaButtons}>
          <a href="#register" className={`button button-primary animate-cta`}>Register Now</a>
          <a href="#sponsorship" className={`button button-secondary animate-cta`}>Sponsor Us</a>
        </div>
      </div>
    </section>
  );
}
