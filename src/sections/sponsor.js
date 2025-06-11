import React from "react";
import styles from "@styles/sponsor.module.css";
import {
  FaEye,
  FaNetworkWired,
  FaUserTie,
  FaLightbulb,
  FaAd,
  FaStore,
  FaMicrophone,
  FaIdCardAlt,
  FaHandshake
} from "react-icons/fa";

function Sponsor({
  sponsorSectionRef,
  sponsorTitleRef,
  whyHeadingRef,
  whyCardsRef,
  whatHeadingRef,
  whatCardsRef,
  partnersHeadingRef,
  partnersGridRef
}) {
  return (
    <section
      className={styles.sponsorSection}
      id="sponsors"
      ref={sponsorSectionRef}
    >
      <div className={styles.sponsorContainer}>
        <h2 className={styles.sponsorTitle} ref={sponsorTitleRef}>
          Sponsorship Opportunities
        </h2>

        <div className={styles.sponsorContent}>
          {/* Why Sponsor Section */}
          <div className={styles.sponsorSubsection}>
            <h3 className={styles.sponsorSubheading} ref={whyHeadingRef}>
              Why Sponsor Us?
            </h3>

            <div className={styles.cardsGrid} ref={whyCardsRef}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <FaEye />
                </div>
                <h4 className={styles.cardTitle}>Brand Visibility</h4>
                <p className={styles.cardText}>
                  Gain exposure to 1000+ tech enthusiasts and industry
                  professionals
                </p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <FaNetworkWired />
                </div>
                <h4 className={styles.cardTitle}>Networking</h4>
                <p className={styles.cardText}>
                  Connect with talented students and professionals from across
                  Kerala
                </p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <FaUserTie />
                </div>
                <h4 className={styles.cardTitle}>Talent Acquisition</h4>
                <p className={styles.cardText}>
                  Identify and recruit top talent for your organization
                </p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <FaLightbulb />
                </div>
                <h4 className={styles.cardTitle}>Drive Innovation</h4>
                <p className={styles.cardText}>
                  Support and engage with cutting-edge ideas and solutions
                </p>
              </div>
            </div>
          </div>

          {/* What You Get Section */}
          <div className={styles.sponsorSubsection}>
            <h3 className={styles.sponsorSubheading} ref={whatHeadingRef}>
              What You Get
            </h3>

            <div className={styles.cardsGrid} ref={whatCardsRef}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <FaAd />
                </div>
                <h4 className={styles.cardTitle}>Brand Promotion</h4>
                <p className={styles.cardText}>
                  Logo placement on event materials, website, and venue
                </p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <FaStore />
                </div>
                <h4 className={styles.cardTitle}>Exhibition Space</h4>
                <p className={styles.cardText}>
                  Dedicated booth space to showcase your products and services
                </p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <FaMicrophone />
                </div>
                <h4 className={styles.cardTitle}>Speaking Opportunity</h4>
                <p className={styles.cardText}>
                  Address the audience during key moments of the event
                </p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <FaIdCardAlt />
                </div>
                <h4 className={styles.cardTitle}>VIP Access</h4>
                <p className={styles.cardText}>
                  Exclusive access to networking sessions and special events
                </p>
              </div>
            </div>
          </div>

          {/* Our Partners Section */}
          <div className={styles.sponsorSubsection}>
            <h3 className={styles.sponsorSubheading} ref={partnersHeadingRef}>
              <FaHandshake className={styles.partnerIcon} /> Our Partners
            </h3>
            
            <div className={styles.partnersGrid} ref={partnersGridRef}>
              {/* Platinum Tier */}
              <div className={styles.sponsorTier}>
                <h4 className={styles.tierTitle}>Platinum Partners</h4>
                <div className={styles.sponsorLogos}>
                  <div className={styles.sponsorLogo}>
                    <img src="/img/sponsors/placeholder-1.webp" alt="Platinum Sponsor 1" />
                  </div>
                  <div className={styles.sponsorLogo}>
                    <img src="/img/sponsors/placeholder-1.webp" alt="Platinum Sponsor 2" />
                  </div>
                </div>
              </div>
              
              {/* Gold Tier */}
              <div className={styles.sponsorTier}>
                <h4 className={styles.tierTitle}>Gold Partners</h4>
                <div className={styles.sponsorLogos}>
                  <div className={styles.sponsorLogo}>
                    <img src="/img/sponsors/placeholder-1.webp" alt="Gold Sponsor 1" />
                  </div>
                  <div className={styles.sponsorLogo}>
                    <img src="/img/sponsors/placeholder-1.webp" alt="Gold Sponsor 2" />
                  </div>
                  <div className={styles.sponsorLogo}>
                    <img src="/img/sponsors/placeholder-1.webp" alt="Gold Sponsor 3" />
                  </div>
                </div>
              </div>
              
              {/* Silver Tier */}
              <div className={styles.sponsorTier}>
                <h4 className={styles.tierTitle}>Silver Partners</h4>
                <div className={styles.sponsorLogos}>
                  <div className={styles.sponsorLogo}>
                    <img src="/img/sponsors/placeholder-1.webp" alt="Silver Sponsor 1" />
                  </div>
                  <div className={styles.sponsorLogo}>
                    <img src="/img/sponsors/placeholder-1.webp" alt="Silver Sponsor 2" />
                  </div>
                  <div className={styles.sponsorLogo}>
                    <img src="/img/sponsors/placeholder-1.webp" alt="Silver Sponsor 3" />
                  </div>
                  <div className={styles.sponsorLogo}>
                    <img src="/img/sponsors/placeholder-1.webp" alt="Silver Sponsor 4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsor;
