"use client";

import React, { useState } from 'react';
import LoadingScreenScene from '@components/LoadingScreenScene/LoadingScreenScene';
import HeroScene from '@components/HeroScene/HeroScene';
import styles from "./page.module.css";


export default function Home() {
  const [currentScene, setCurrentScene] = useState(0);

  const handleLoadingComplete = () => {
    console.log("Loading Scene Complete! Transitioning to Hero Scene...");
    setCurrentScene(1);
  };

  const handleHeroComplete = () => {
    console.log("Hero Scene animations complete!");
    // Ready for next scene or user interactions
  };

  return (
    <div className={styles.container}>
      {currentScene === 0 && (
        <LoadingScreenScene onAnimationComplete={handleLoadingComplete} />
      )}
      {currentScene === 1 && (
        <HeroScene 
          isActive={currentScene === 1} 
          onAnimationComplete={handleHeroComplete} 
        />
      )}
    </div>
  );
};