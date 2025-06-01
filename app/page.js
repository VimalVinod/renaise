"use client";

import React, { useState } from 'react';
import styles from "@styles/main.module.css";
import Hero from '@components/hero';


export default function Home() {


  return (
    <div className={styles.container}>
      <Hero />
      <div className={styles.heroSpacer}></div>
      <div className={styles.nextScene}>
        <h2>Next Section</h2>
      </div>
    </div>
  );
};