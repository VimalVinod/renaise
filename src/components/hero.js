"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@styles/hero.module.css";
import Sparkie from "@components/sparkie";
import Navbar from "@components/Navbar";
import MainContent from "@components/MainContent";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const logoRef = useRef(null);
  const taglineRef = useRef(null);
  const heroRef = useRef(null);
  const sparkieRef = useRef(null);
  const navRef = useRef(null);
  const mainContentRef = useRef(null);
  const logoTextRef = useRef(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    // Clear any existing animations
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Initial animation timeline setup
    const logoTl = gsap.timeline();
    const sparkieTl = gsap.timeline();
    const contentTl = gsap.timeline();
     const mainContentTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "25% top",
            scrub: 1.5,
          },
        });

    sparkieTl.set(sparkieRef.current, {
      opacity: 0,
      x: isMobile ? -100 : -150,
    });

    gsap.set(mainContentRef.current, {
      x: "-=50vw",
    });
    gsap.set(navRef.current, {
      y: "-=5vh",
    });
    // Initial logo animation
    logoTl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8, y: -30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.2,
      }
    );

    // Tagline animation
    gsap.to(taglineRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.8,
    });

    // Sparkie animation
    sparkieTl.to(sparkieRef.current, {
      opacity: 1,
      x: isMobile ? 100 : 150,
      duration: 1,
      delay: 1.5,
      ease: "power2.out",
      onComplete: () => {
        // Re-enable scrolling
        document.body.style.overflow = "auto";

        //Create scroll-based animation for logo
        const logoScrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "20% top",
            scrub: 1.5,
          },
        });
        logoScrollTl.to(logoRef.current, {
          y: isMobile ? "-=41vh" : "-=35vh",
          x: "-=40vw",
          height: "auto",
          width: isMobile ? "18%" : "11%",
        });

        gsap.to(taglineRef.current, {
          opacity: 0,
          y: "-=50vh",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "20% top",
            scrub: 1.5,
          },
        });

        gsap.to(sparkieRef.current, {
          x: isMobile ? "+=45vw" : "+=60vw",
          scale: isMobile ? 1.5 : 2.2,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "25% top",
            scrub: 1.5,
          },
        });

        // Reveal main content and navbar
        mainContentTl.to(navRef.current, { opacity: 1, y: 0 },0)
        .to(mainContentRef.current, { opacity: 1, x: 0}, 0) 
          

        ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          pin: true,
        });
      },
    });

    return () => {
      // Cleanup animations
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      logoTl.kill();
      sparkieTl.kill();
      contentTl.kill();
      mainContentTl.kill();
      document.body.style.overflow = "auto";
    };
  }, [isMobile]);

  return (
    <section ref={heroRef} className={styles.heroContainer}>
      {/* Initial centered content */}
      <div className={styles.contentWrapper}>
        <div className={styles.logoContainer}>
          <img
            ref={logoRef}
            src="/img/logo.svg"
            alt="RenAISE Logo"
            className={styles.logo}
          />
        </div>
        <p ref={taglineRef} className={styles.tagline}>
          Celebrating 10 Years of IEDC Bootcamp CEC
        </p>
      </div>

      {/* Navbar Component */}
      <Navbar
        ref={navRef}
        logoTextRef={logoTextRef}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />

      {/* Main Content Component */}
      <MainContent ref={mainContentRef} />

      {/* Sparkie Component */}
      <Sparkie ref={sparkieRef} />
    </section>
  );
}

export default Hero;
