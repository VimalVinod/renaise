"use client";
import React, { use, useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./LoadingScreenScene.module.css";

const LoadingScreenScene = ({ onAnimationComplete }) => {
  const sceneRef = useRef(null);
  const characterRef = useRef(null);
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!characterRef.current || !textRef.current || !sceneRef.current) {
      console.warn("GSAP Animation Aborted: Refs not available.");
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        if (onAnimationComplete) {
          //onAnimationComplete();
          nextScene();
        }
      },
    });

    if (cursorRef.current) {
      tl.fromTo(
        cursorRef.current,
        { opacity: 1, scale: 1 },
        { opacity: 0, scale: 0.8, duration: 0.3, ease: "power1.in" },
        "start"
      );
    }
    tl.fromTo(
      characterRef.current,
      {
        xPercent: -100,
        yPercent: 100,
        opacity: 0,
        scale: 0.8,
        rotation: -15,
      },
      {
        xPercent: -50,
        yPercent: -35,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: "power2.out",
      },
      cursorRef.current ? ">-=0.1" : "start"
    );
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: window.innerWidth > 768 ? -285 : -200,
        duration: 0.8,
        ease: "power1.out",
      },
      ">-0.5"
    );

    return () => {
      tl.kill();
    };
  }, [onAnimationComplete]);

  const nextScene = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onAnimationComplete) onAnimationComplete();
        tl.kill();
      },
    });

    tl.to(
      characterRef.current,
      {
        xPercent: 100,
        yPercent: -100,
        opacity: 0,
        scale: 0.8,
        rotation: -15,
        duration: 0.8,
        ease: "power2.in",
      },
      cursorRef.current ? ">-=0.1" : "start"
    );
    tl.to(
      textRef.current,
      {
        opacity: 0,
        y: -400,
        x: -250,
        duration: 0.8,
        ease: "power1.in",
      },
      ">-0.5"
    );
  };

  return (
    <div ref={sceneRef} className={styles.loadingSceneContainer}>
      <div ref={cursorRef} className={styles.cursorIcon}>
        ❖
      </div>

      <div className={styles.animationElements}>
        <img
          ref={characterRef}
          src="/images/character_on_rocket.png"
          alt="Character on rocket"
          className={styles.characterImage}
        />
        <h1 ref={textRef} className={styles.brandName}>
          RENAISE&nbsp;
          <span className={styles.brandYear}>2025</span>
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreenScene;
