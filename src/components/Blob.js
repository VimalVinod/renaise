import styles from "@styles/Blob.module.css";
import { useState, useEffect } from "react";

const Blob = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const gridMove = -scrollY * 0.003; // More subtle movement
  const textParallaxFactor = 0.0015; // More subtle parallax
  const mouseMoveFactor = 1.5; // Reduced mouse interaction for more professional feel

  return (
    <div className={styles.blueprintContainer}>
      {/* Subtle grid background */}
      <div
        className={styles.grid}
        style={{ transform: `translateY(${gridMove}px)` }}
      ></div>

      {/* Logo watermark */}
      <div
        className={styles.logoWatermark}
        style={{
          transform: `translate(-50%, -50%) translate(${
            mousePosition.x * mouseMoveFactor
          }px, ${mousePosition.y * mouseMoveFactor}px)`,
        }}
      ></div>

      {/* Gradient overlay for depth */}
      <div className={styles.gradientOverlay}></div>

      {/* Subtle dot pattern */}
      <div className={styles.dotPattern}></div>

      {/* Brand text elements */}
      <div
        className={`${styles.brandElement} ${styles.iedcText}`}
        style={{
          transform: `translateY(${-scrollY * textParallaxFactor}px)`,
        }}
      >
        NEXUS
      </div>
      <div
        className={`${styles.brandElement} ${styles.innovationText}`}
        style={{
          transform: `translateY(${scrollY * textParallaxFactor}px)`,
        }}
      >
        INNOVATION
      </div>
      <div
        className={`${styles.brandElement} ${styles.entrepreneurshipText}`}
        style={{
          transform: `translateY(${scrollY * textParallaxFactor * 0.6}px)`,
        }}
      >
        ENTREPRENEURSHIP
      </div>
      <div
        className={`${styles.brandElement} ${styles.cecText}`}
        style={{
          transform: `translateY(${-scrollY * textParallaxFactor * 0.4}px)`,
        }}
      >
        CEC
      </div>

      {/* Professional circular design elements with subtle interactions */}
      <div
        className={`${styles.designElement} ${styles.circle1}`}
        style={{
          transform: `scale(${1 + scrollY * 0.0002}) translate(${
            mousePosition.x * 3
          }px, ${mousePosition.y * 3}px)`,
        }}
      ></div>

      <div
        className={`${styles.designElement} ${styles.circle2}`}
        style={{
          transform: `scale(${1 - scrollY * 0.0001}) translate(${
            -mousePosition.x * 2
          }px, ${-mousePosition.y * 2}px)`,
        }}
      ></div>

      <div
        className={`${styles.designElement} ${styles.circle3}`}
        style={{
          transform: `translate(${mousePosition.x * 4}px, ${mousePosition.y * 4}px)`,
        }}
      ></div>

      <div
        className={`${styles.arc} ${styles.arc1}`}
        style={{
          transform: `rotate(${45 + scrollY * 0.01}deg)`,
        }}
      ></div>

      <div
        className={`${styles.arc} ${styles.arc2}`}
        style={{
          transform: `rotate(${135 - scrollY * 0.005}deg)`,
        }}
      ></div>
    </div>
  );
};

export default Blob;
