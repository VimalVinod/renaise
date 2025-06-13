import { useState, useEffect } from "react";
import styles from "@styles/Blob.module.css";

const Blob = () => {
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const [maxScrollThreshold, setMaxScrollThreshold] = useState(8000);

  useEffect(() => {

    const updateViewport = () => {
      setViewportHeight(window.innerHeight);
      setIsMobile(window.innerWidth <= 768);

      const threshold = window.innerHeight * 15; 
      setMaxScrollThreshold(threshold);
    };

    updateViewport();

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  const effectiveScrollY = Math.min(scrollY, maxScrollThreshold);

  const baseMultiplier = viewportHeight / 8000;
  const deviceAdjustment = isMobile ? 6 : 20;
  const moveTimelineX = -effectiveScrollY * (0.08 * baseMultiplier * deviceAdjustment);
  const moveCircuit1 = effectiveScrollY * (0.02 * baseMultiplier * deviceAdjustment);
  const moveCircuit2 = -effectiveScrollY * (0.015 * baseMultiplier * deviceAdjustment);
  const moveText = effectiveScrollY * (0.02 * baseMultiplier * deviceAdjustment);
  const moveHex1 = effectiveScrollY * (0.01 * baseMultiplier * deviceAdjustment);
  const moveHex2 = -effectiveScrollY * (0.015 * baseMultiplier * deviceAdjustment);


  const scaleBase = 0.00001 * baseMultiplier * deviceAdjustment;
  const scaleEffect = effectiveScrollY * scaleBase;

  return (
    <div className={styles.mixedContainer}>
      {/* Circuit grid background */}
      <div className={styles.circuitGrid}></div>

      {/* Geometric hex pattern elements */}
      <div
        className={styles.hexGroup1}
        style={{ transform: `translateY(${moveHex1}px)` }}
      ></div>

      <div
        className={styles.hexGroup2}
        style={{ transform: `translateY(${moveHex2}px)` }}
      ></div>

      {/* Timeline elements */}
      <div
        className={styles.timelineTrack}
        style={{ transform: `translateX(${moveTimelineX}px)` }}
      >
        <div className={`${styles.timelineNode} ${styles.node2015}`}>
          <div className={styles.year}>2015</div>
          <div className={styles.dot}></div>
          <div className={styles.label}>Founded</div>
        </div>

        <div className={`${styles.timelineNode} ${styles.node2018}`}>
          <div className={styles.year}>2018</div>
          <div className={styles.dot}></div>
          <div className={styles.label}>Growth</div>
        </div>

        <div className={`${styles.timelineNode} ${styles.node2020}`}>
          <div className={styles.year}>2020</div>
          <div className={styles.dot}></div>
          <div className={styles.label}>Innovation Hub</div>
        </div>

        <div className={`${styles.timelineNode} ${styles.node2022}`}>
          <div className={styles.year}>2022</div>
          <div className={styles.dot}></div>
          <div className={styles.label}>Expansion</div>
        </div>

        <div className={`${styles.timelineNode} ${styles.node2025}`}>
          <div className={styles.year}>2025</div>
          <div className={styles.dot}></div>
          <div className={styles.label}>10th Anniversary</div>
        </div>
      </div>

      {/* Circuit elements */}
      <div
        className={`${styles.circuitPath} ${styles.circuitPath1}`}
        style={{ transform: `translateY(${moveCircuit1}px)` }}
      ></div>

      <div
        className={`${styles.circuitPath} ${styles.circuitPath2}`}
        style={{ transform: `translateY(${moveCircuit2}px)` }}
      ></div>

      <div
        className={`${styles.circuitNode} ${styles.circuitNode1}`}
        style={{ transform: `scale(${1 + scaleEffect})` }}
      ></div>

      <div
        className={`${styles.circuitNode} ${styles.circuitNode2}`}
        style={{ transform: `scale(${1 - scaleEffect})` }}
      ></div>

      {/* Anniversary and text elements */}
      <div
        className={styles.anniversary10}
        style={{ transform: `translateY(${-moveText}px)` }}
      >
        10
      </div>

      <div
        className={styles.iedcText}
        style={{ transform: `translateY(${moveText}px)` }}
      >
        IEDC
      </div>

      <div
        className={styles.innovationText}
        style={{ transform: `translateY(${-moveText * 0.8}px)` }}
      >
        INNOVATION
      </div>

      <div className={styles.yearRange}>2015-2025</div>
    </div>
  );
};

export default Blob;
