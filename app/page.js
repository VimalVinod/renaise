"use client";

import React from "react";
import styles from "@styles/main.module.css";
import Hero from "@sections/hero";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
}
