import React from "react";
import styles from "@styles/partners.module.css";
import { FaHandshake } from "react-icons/fa";
import Image from "next/image";

function Partners({
    partnerSectionRef,
    partnerTitleRef,
    partnerChainRef,
}) {
  const partnersData = {
    platinum: [
      "/img/sponsors/placeholder-1.webp",
      "/img/sponsors/placeholder-1.webp",
    ],
    gold: [
      "/img/sponsors/placeholder-1.webp",
      "/img/sponsors/placeholder-1.webp",
      "/img/sponsors/placeholder-1.webp",
    ],
    silver: [
      "/img/sponsors/placeholder-1.webp",
      "/img/sponsors/placeholder-1.webp",
      "/img/sponsors/placeholder-1.webp",
      "/img/sponsors/placeholder-1.webp",
    ],
  };

  return (
    <div className={styles.sponsorSubsection} ref={partnerSectionRef}>
      <h3 className={styles.sponsorSubheading} ref={partnerTitleRef}>
        <FaHandshake className={styles.partnerIcon} /> Our Partners
      </h3>

      <div className={styles.partnerChainContainer} ref={partnerChainRef}>
        <div className={styles.partnerChain}>
          <PartnerChainContent partnersData={partnersData} />
          <PartnerChainContent partnersData={partnersData} />
        </div>
      </div>
    </div>
  );
}

// Separate component for the chain content that gets duplicated
function PartnerChainContent({ partnersData }) {
  return (
    <div className={styles.chainContent}>
      {/* Platinum partners */}
      <div className={`${styles.tierLabel} ${styles.platinumTier}`}>
        PLATINUM PARTNERS
      </div>
      {partnersData.platinum.map((src, index) => (
        <div key={`platinum-${index}`} className={styles.partnerLogo}>
          <Image
            width={180}
            height={100}
            src={src}
            alt={`Platinum Partner ${index + 1}`}
          />
        </div>
      ))}

      {/* Gold partners */}
      <div className={`${styles.tierLabel} ${styles.goldTier}`}>
        GOLD PARTNERS
      </div>
      {partnersData.gold.map((src, index) => (
        <div key={`gold-${index}`} className={styles.partnerLogo}>
          <Image
            width={160}
            height={90}
            src={src}
            alt={`Gold Partner ${index + 1}`}
          />
        </div>
      ))}

      {/* Silver partners */}
      <div className={`${styles.tierLabel} ${styles.silverTier}`}>
        SILVER PARTNERS
      </div>
      {partnersData.silver.map((src, index) => (
        <div key={`silver-${index}`} className={styles.partnerLogo}>
          <Image
            width={140}
            height={80}
            src={src}
            alt={`Silver Partner ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}

export default Partners;
