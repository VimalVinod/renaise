import styles from "@styles/Blob.module.css";
import { useState, useEffect } from "react";

const Blob = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const moveCircle = scrollY * 0.005;
  const moveSquare = scrollY * 0.003;
  const rotateSquare = scrollY * 0.01;
  const moveTop = scrollY * 0.002;
  const moveBottom = -scrollY * 0.002;
  const moveConnector = scrollY * 0.004;
  const moveDots = -scrollY * 0.003;
  const moveText = scrollY * 0.004;
  const moveGrid = -scrollY * 0.001;

  return (
    <div className={styles.blueprintContainer}>
      <div
        className={styles.grid}
        style={{ transform: `translateY(${moveGrid}px)` }}
      ></div>

      <div
        className={`${styles.anniversary} ${styles.anniversaryTop}`}
        style={{ transform: `rotate(15deg) translateY(${moveTop}px)` }}
      >
        10
      </div>
      <div
        className={`${styles.anniversary} ${styles.anniversaryBottom}`}
        style={{ transform: `rotate(-5deg) translateY(${moveBottom}px)` }}
      >
        10
      </div>
      <div
        className={styles.circle}
        style={{ transform: `translateY(${moveCircle}px)` }}
      ></div>
      <div
        className={styles.square}
        style={{
          transform: `rotate(${rotateSquare}deg) translateY(${moveSquare}px)`,
        }}
      ></div>
      <div
        className={styles.connector}
        style={{ transform: `rotate(-30deg) translateY(${moveConnector}px)` }}
      ></div>
      <div
        className={styles.dots}
        style={{ transform: `translateY(${moveDots}px)` }}
      ></div>
      <div
        className={styles.circuit1}
        style={{ transform: `translateX(${-moveCircle}px)` }}
      ></div>
      <div
        className={styles.circuit2}
        style={{ transform: `translateX(${moveCircle}px)` }}
      ></div>

      {/* IEDC text elements */}
      <div
        className={styles.iedcText}
        style={{ transform: `rotate(-15deg) translateY(${-moveText}px)` }}
      >
        IEDC
      </div>
      <div
        className={styles.innovationText}
        style={{ transform: `translateY(${moveText}px)` }}
      >
        INNOVATION
      </div>
      <div
        className={styles.entrepreneurshipText}
        style={{ transform: `rotate(15deg) translateY(${moveText}px)` }}
      >
        ENTREPRENEURSHIP
      </div>
      <div
      className={styles.cecText}
        style={{ transform: `rotate(-15deg) translateY(${moveText}px)` }}
      >
        CEC
      </div>
    </div>
  );
};

export default Blob;
