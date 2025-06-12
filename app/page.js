"use client";

import React from "react";
import styles from "@styles/main.module.css";
import Hero from "@sections/hero";
import Blob from "@components/Blob";
import Footer from "@sections/footer";


export default function Home() {

  return (
    <>
      <Blob/>
      <div className={styles.container}>
        <Hero />
      </div>
      <Footer />
    </>
  );
}
