import React, { useRef, useEffect, useState } from "react";
import styles from "@styles/moments.module.css";
import Image from "next/image";
import milestones from "@data/milestones";
import { gsap } from "gsap";

function Moments({
  MomentsSectionRef,
  MomentsHeadingRef,
  MomentsTrackRef,
}) {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(milestones.length);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const infiniteData = [
    ...milestones,
    ...milestones,
    ...milestones,
    ...milestones,
    ...milestones,
  ].map((item, index) => ({
    ...item,
    id: `${item.id}-${Math.floor(index / milestones.length)}`,
    originalIndex: index % milestones.length,
  }));

  // Dynamic card width based on screen size
  const getCardWidth = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 480) return 280;
      if (window.innerWidth <= 600) return 300;
      if (window.innerWidth <= 768) return 320;
      return 350;
    }
    return 350;
  };

  const [cardWidth, setCardWidth] = useState(getCardWidth());
  const gap = 40;
  const totalCardWidth = cardWidth + gap;

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.set(card, {
          x: index * totalCardWidth,
          rotationY: 0,
          opacity: 0.3,
          scale: 0.8,
        });
      }
    });

    updateCardAnimations();

    return () => {
      // Cleanup GSAP animations
      gsap.killTweensOf(cardRefs.current);
    };
  }, []);

  // Update card width on resize
  useEffect(() => {
    const handleResize = () => {
      setCardWidth(getCardWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updateCardAnimations = () => {
    const centerIndex = currentIndex;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const distance = Math.abs(index - centerIndex);
      const isCenter = distance === 0;
      const isNear = distance === 1;
      const isFar = distance >= 2;

      // Calculate transform values
      let rotationY = 0;
      let opacity = 1;
      let scale = 1;
      let z = 0;

      if (isCenter) {
        rotationY = 0;
        opacity = 1;
        scale = 1.05;
        z = 100;
      } else if (isNear) {
        rotationY = index < centerIndex ? -25 : 25;
        opacity = 0.7;
        scale = 0.9;
        z = 50;
      } else if (isFar) {
        rotationY = index < centerIndex ? -60 : 60;
        opacity = 0.3;
        scale = 0.75;
        z = 0;
      }

      // Animate with GSAP
      gsap.to(card, {
        x: (index - centerIndex) * totalCardWidth + dragOffset,
        rotationY: rotationY,
        opacity: opacity,
        scale: scale,
        z: z,
        duration: 0.8,
        ease: "power3.out",
      });

      // Update active class
      if (isCenter) {
        card.classList.add(styles.active);
      } else {
        card.classList.remove(styles.active);
      }
    });
  };

  const goToSlide = (index, smooth = true) => {
    let newIndex = index;

    // Handle infinite loop wrapping
    if (newIndex < milestones.length) {
      newIndex = newIndex + milestones.length * 2;
    } else if (newIndex >= milestones.length * 4) {
      newIndex = newIndex - milestones.length * 2;
    }

    setCurrentIndex(newIndex);

    if (smooth) {
      updateCardAnimations();
    }
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  // Touch/Mouse drag handlers
  const handleStart = (e) => {
    setIsDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
    setDragOffset(0);
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    if(window.innerWidth > 768) return; // Disable dragging on desktop
    //e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = clientX - dragStart;
    setDragOffset(diff);

    // Update positions during drag
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.set(card, {
          x: (index - currentIndex) * totalCardWidth + diff,
        });
      }
    });
  };

  const handleEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);
    const threshold = totalCardWidth * 0.3;

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    } else {
      updateCardAnimations();
    }

    setDragOffset(0);
  };

  const handleDescriptionClick = (e, milestone) => {
    e.stopPropagation();
    setSelectedMilestone(milestone);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMilestone(null);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isDragging]);

  // Update animations when index changes
  useEffect(() => {
    updateCardAnimations();
  }, [currentIndex]);

  return (
    <div className={styles.wrapper} ref={MomentsSectionRef}>
      {/* Heading Section */}
      <div className={styles.header} ref={MomentsHeadingRef}>
        <h1 className={styles.heading}>
          Milestones
          <span className={styles.subheading}>10 years of IEDC</span>
        </h1>
      </div>

      <div
        className={styles.container}
        ref={containerRef}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        <div className={styles.track} ref={MomentsTrackRef}>
          {infiniteData.map((milestone, index) => (
            <div
              key={milestone.id}
              className={styles.card}
              ref={(el) => (cardRefs.current[index] = el)}
              onClick={() => goToSlide(index)}
            >
              <div className={styles.cardInner}>
                <div className={styles.imageContainer}>
                  <Image
                    src={milestone.image}
                    alt={milestone.title}
                    fill
                    className={styles.image}
                    sizes="350px"
                    priority={index < 5}
                  />
                  <div className={styles.imageOverlay} />
                </div>
                <div className={styles.content}>
                  <div className={styles.year}>{milestone.year}</div>
                  <h3 className={styles.title}>{milestone.title}</h3>
                  <div className={styles.descriptionContainer}>
                    <p className={styles.description}>
                      {milestone.description}
                    </p>
                    {milestone.description && milestone.description.length > 120 && (
                      <button
                        className={styles.expandButton}
                        onClick={(e) => handleDescriptionClick(e, milestone)}
                        aria-label="Read more"
                      >
                        ...
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      {/* <div className={styles.controls}>
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={prevSlide}
          aria-label="Previous milestone"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <div className={styles.pagination}>
          {milestones.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                (currentIndex % milestones.length) === index ? styles.activeDot : ""
              }`}
              onClick={() => goToSlide(index + milestones.length * 2)}
            />
          ))}
        </div>

        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={nextSlide}
          aria-label="Next milestone"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div> */}

      {/* Modal for expanded description */}
      {showModal && selectedMilestone && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m18 6-12 12" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <div className={styles.modalHeader}>
              <div className={styles.modalYear}>{selectedMilestone.year}</div>
              <h2 className={styles.modalTitle}>{selectedMilestone.title}</h2>
            </div>
            <div className={styles.modalBody}>
              <p className={styles.modalDescription}>{selectedMilestone.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Moments;
