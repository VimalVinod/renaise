"use client";

import styles from "./components/styles/Page.module.css";
import Animation from "./components/Animation";

// Layout components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Section components
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Moments from "./components/sections/Moments";
import Scope from "./components/sections/Scope";
import ChiefGuest from "./components/sections/ChiefGuest";
import Workshops from "./components/sections/Workshops";
import Sponsorship from "./components/sections/Sponsorship";
import Tiers from "./components/sections/Tiers";
import Partners from "./components/sections/Partners";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Animation component to handle all animations */}
      <Animation />
      
      {/* Layout and section components */}
      <Header />
      <Hero />
      <About />
      <Moments />
      <Scope />
      <ChiefGuest />
      <Workshops />
      <Sponsorship />
      <Tiers />
      <Partners />
      <Footer />
    </div>
  );
}
