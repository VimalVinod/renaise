"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Lenis from "lenis";
import styles from "@styles/hero.module.css";
import aboutStyles from "@styles/about.module.css"; // Kept for selecting .circle elements
import Sparkie from "@components/sparkie";
import Navbar from "@components/Navbar";
import MainContent from "@components/MainContent";
import About from "@sections/about"; // Import the About component
import ScopeOfEvent from "@sections/scope"; // Import the ScopeOfEvent component
import Chief from "@sections/chiefGuest"; // Import the Chief component\
import Sponsor from "@sections/sponsor"; // Import the Sponsor component

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Hero() {
  const logoRef = useRef(null);
  const taglineRef = useRef(null);
  const heroRef = useRef(null);
  const sparkieRef = useRef(null);
  const navRef = useRef(null);
  const mainContentRef = useRef(null);
  const logoTextRef = useRef(null);
  const sparkieContainerRef = useRef(null);

  //time line ref
  const timelineRef = useRef(null);

  // Refs for About component's elements
  const aboutSectionRef = useRef(null); // This will be passed to About for its main container
  const circleContainerRefForAbout = useRef(null); // For the circle container in About
  const bannerRefForAbout = useRef(null); // For the banner in About
  const textContainerRefForAbout = useRef(null); // For the text container in About
  const secondaryTextRefForAbout = useRef(null); // For the secondary text in About

  //refs for scope section
  const scopeTitleRef = useRef(null);
  const scopeSubtitleRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const scopeSectionRef = useRef(null); // This will be passed to ScopeOfEvent for its main container

  // refs for chief guest section
  const topTitleRef = useRef(null);
  const bottomTitleRef = useRef(null);
  const chiefMinisterRef = useRef(null);
  const ceoRef = useRef(null);
  const chiefSectionRef = useRef(null);

  //refs for sponsor section
  const sponsorSectionRef = useRef(null);
  const sponsorTitleRef = useRef(null);
  const whyHeadingRef = useRef(null);
  const whyCardsRef = useRef(null);
  const whatHeadingRef = useRef(null);
  const whatCardsRef = useRef(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function scrollToSection(sectionName) {
    const tl = timelineRef.current;
    if (!tl.labels[sectionName]) {
    console.warn(`Section '${sectionName}' not found in GSAP labels`);
    return;
  }

  const sectionTime = tl.labels[sectionName];
  const progress = sectionTime / tl.duration();
  const scrollLength = ScrollTrigger.maxScroll(window);
  const scrollTo = scrollLength * progress;

  gsap.to(window, {
    scrollTo: { y: scrollTo },
    duration: 0.5,
    ease: "power2.out"
  });
  }

  // useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //     console.log("isMobile:", window.innerWidth <= 768);
  //   };

  //   checkMobile();
  //   window.addEventListener("resize", checkMobile);

  //   return () => window.removeEventListener("resize", checkMobile);
  // }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      if (!prev) {
        // Disable scrolling when the mobile menu is open
        document.body.style.overflow = "hidden";
      } else {
        // Re-enable scrolling when the mobile menu is closed
        document.body.style.overflow = "auto";
      }
      return !prev;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 5, // Higher = slower scrolling
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      mouseMultiplier: 0.4, // Reduce mouse wheel speed
      touchMultiplier: 1.2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const anim = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(anim);
    };
  }, []);

  useEffect(() => {
    // Clear any existing animations
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    const isMobile = window.innerWidth <= 768;

    // Initial animation timeline setup
    const logoTl = gsap.timeline();
    const sparkieTl = gsap.timeline();

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

        // Single scroll timeline that handles all phases over 300vh
        const mainScrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom -=300vh", // 300vh total scroll distance
            scrub: 5,
            pin: true,
            // markers: true, // Set to true for debugging
          },
        });
        timelineRef.current = mainScrollTl;

        // Phase 1: Entry animations (0-100vh of scroll)
        mainScrollTl
          .to(
            logoRef.current,
            {
              y: isMobile ? "-=41vh" : "-=35vh",
              x: isMobile ? "-30vw" : "-=40vw",
              height: "auto",
              width: isMobile ? "30%" : "11%",
              duration: 3,
              ease: "power2.out",
            },
            0
          )
          .to(
            taglineRef.current,
            {
              opacity: 0,
              x: "-=50vh",
              duration: 1,
              ease: "power2.out",
            },
            0
          )
          .to(
            sparkieRef.current,
            {
              x: isMobile ? "+=45vw" : "+=60vw",
              scale: isMobile ? "+=0.5" : "+=1.2",
              duration: 5,
              ease: "power2.out",
            },
            0
          )
          .to(
            sparkieContainerRef.current,
            {
              bottom: isMobile ? "-=15%" : "-=0",
              duration: 5,
              ease: "power2.inOut",
            },
            0
          )
          .to(
            navRef.current,
            { opacity: 1, y: 0, duration: 5, ease: "power2.inOut" },
            0
          )
          .to(
            mainContentRef.current,
            {
              opacity: 1,
              x: 0,
              duration: 5,
              ease: "power2.inOut",
            },
            0
          )
          .to({}, { duration: 5 })
          .to(sparkieRef.current, {
            x: "+=50vw",
            opacity: 0,
            duration: 5,
            ease: "power2.in",
          })
          .to(
            mainContentRef.current,
            {
              x: "-=100vw",
              opacity: 0,
              duration: 5,
              ease: "power2.in",
            },
            "-=2" // Start this 2 seconds before the end of the previous animation
          )
          .to({}, { duration: 3 })
          .addLabel("aboutSection", "+=11") // Add a label for the About section
          .to(
            textContainerRefForAbout.current,
            {
              y: "-50%",
              fontSize: isMobile ? "2rem" : "4rem",
              opacity: 1,
              duration: 3,
              ease: "power2.out",
            },
            "-=3"
          )
          .to({}, { duration: 3 })
          .to(textContainerRefForAbout.current, {
            y: isMobile ? "-=100%" : "-=50%",
            x: isMobile ? "-=6%" : "-=30%",
            fontSize: isMobile ? "1.8rem" : "2rem",
            justifyContent: "flex-start",
            duration: 3,
            ease: "power2.out",
          })
          .to(secondaryTextRefForAbout.current, {
            y: isMobile ? "-13vh" : 0,
            x: isMobile ? "-=5%" : "-=30%",
            duration: 3,
            ease: "power2.out",
          })
          .to(
            sparkieRef.current,
            {
              bottom: isMobile ? "-=15%" : "-=0",
              x: isMobile ? "-=45vw" : "-=50vw",
              opacity: 1,
              duration: 3,
              ease: "power2.inOut",
            },
            "-=2"
          )
          .to({}, { duration: 5 })
          .to(sparkieRef.current, {
            x: "-=100vw",
            opacity: 0,
            duration: 5,
            ease: "power2.in",
            delay: 1,
          })
          .to(
            textContainerRefForAbout.current,
            {
              x: "-=50%",
              opacity: 0,
              duration: 3,
              ease: "power2.in",
            },
            "-=2"
          )
          .to(
            secondaryTextRefForAbout.current,
            {
              x: "-=50%",
              opacity: 0,
              duration: 3,
              ease: "power2.in",
            },
            "-=2"
          )
          .to({}, { duration: 5 })
          .addLabel("scopeSection", "+=5") // Add a label for the Scope section
          .to(
            scopeTitleRef.current,
            {
              x: 0,
              opacity: 1,
              duration: 3,
              ease: "power2.out",
            },
            "-=3"
          )
          .to(
            scopeSubtitleRef.current,
            {
              y: 0,
              opacity: 1,
              duration: 3,
              ease: "power2.out",
            },
            "-=2"
          )
          .to(
            scopeSectionRef.current,
            {
              zIndex: 100,
              duration: 0,
            },
            "-=2"
          )
          .to(
            cardsContainerRef.current,
            {
              y: 0,
              x: 0,
              opacity: 1,
              duration: 3,
              ease: "power2.out",
            },
            "-=2"
          )
          .to({}, { duration: 5 })
          .to(scopeSectionRef.current, {
            zIndex: -1,
            duration: 0,
          })
          .to(
            scopeTitleRef.current,
            {
              x: "-=50vw",
              opacity: 0,
              duration: 3,
              ease: "power2.in",
            },
            "-=2"
          )
          .to(
            scopeSubtitleRef.current,
            {
              x: "-=50vw",
              opacity: 0,
              duration: 3,
              ease: "power2.in",
            },
            "-=2"
          )
          .to(
            cardsContainerRef.current,
            {
              y: "-=50vh",
              x: "-=50vw",
              opacity: 0,
              duration: 3,
              ease: "power2.in",
            },
            "-=2"
          )
          .to({}, { duration: 5 })
          .addLabel("chiefSection", "+=5") // Add a label for the Chief section
          .to(
            topTitleRef.current,
            {
              x: "-10vw",
              opacity: 1,
              duration: 3,
              ease: "power2.out",
            },
            "-=3"
          )
          .to(
            bottomTitleRef.current,
            {
              x: isMobile ? "10vw" : 0,
              opacity: 1,
              duration: 3,
              ease: "power2.out",
            },
            "-=1"
          )
          .to(
            chiefSectionRef.current,
            {
              zIndex: 100,
              duration: 0,
            },
            "-=3"
          )
          .to(
            chiefMinisterRef.current,
            {
              y: isMobile ? "25vh" : 0,
              x: isMobile ? "-20vw" : "-10vw",
              rotateY: 15,
              opacity: 1,
              duration: 3,
              stagger: 0.5,
              ease: "power2.out",
            },
            "-=2"
          )
          .to(
            ceoRef.current,
            {
              opacity: 1,
              y: isMobile ? "20vh" : 0,
              x: isMobile ? "20vw" : "10vw",
              rotateY: -15,
              duration: 5,
              stagger: 0.5,
              ease: "power2.out",
            },
            "-=2"
          )
          .to({}, { duration: 5 })
          .to(chiefSectionRef.current, {
            zIndex: -1,
            duration: 0,
          })
          .to(bottomTitleRef.current, {
            x: "+=50vw",
            opacity: 0,
            duration: 3,
            ease: "power2.in",
          })
          .to(
            topTitleRef.current,
            {
              x: "+=50vw",
              opacity: 0,
              duration: 3,
              ease: "power2.in",
            },
            "-=2"
          )
          .to(
            chiefMinisterRef.current,
            {
              y: "-=50vh",
              x: "+=50vw",
              opacity: 0,
              duration: 3,
              ease: "power2.in",
            },
            "-=3"
          )
          .to(
            ceoRef.current,
            {
              y: "+=50vh",
              x: "-=50vw",
              opacity: 0,
              duration: 3,
              ease: "power2.in",
            },
            "-=2"
          )
          .to({}, { duration: 5 });
        // .to(
        //   sponsorTitleRef.current,
        //   {
        //     x: 0,
        //     opacity: 1,
        //     duration: 3,
        //     ease: "power2.out",
        //   },
        //   "-=3"
        // );
      },
    });

    return () => {
      // Cleanup animations
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      logoTl.kill();
      sparkieTl.kill();
      if (textContainerRefForAbout.current)
        gsap.killTweensOf(textContainerRefForAbout.current);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <section ref={heroRef} className={styles.heroContainer}>
        {" "}
        {/* Removed aboutStyles.container */}
        <Navbar
          ref={navRef}
          logoTextRef={logoTextRef}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          closeMobileMenu={closeMobileMenu}
          scrollToSection={scrollToSection}
        />
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
        <MainContent ref={mainContentRef} />
        <Sparkie ref={sparkieRef} conatinerRef={sparkieContainerRef} />
        {/* Render About component and pass refs */}
        <About
          aboutRef={aboutSectionRef}
          circleContainerRef={circleContainerRefForAbout}
          bannerRef={bannerRefForAbout}
          textContainerRef={textContainerRefForAbout}
          secondaryTextRef={secondaryTextRefForAbout}
        />
        <ScopeOfEvent
          scopeTitleRef={scopeTitleRef}
          scopeSubtitleRef={scopeSubtitleRef}
          cardsContainerRef={cardsContainerRef}
          scopeSectionRef={scopeSectionRef}
        />
        <Chief
          topTitleRef={topTitleRef}
          bottomTitleRef={bottomTitleRef}
          chiefMinisterRef={chiefMinisterRef}
          ceoRef={ceoRef}
          chiefSectionRef={chiefSectionRef}
        />
        {/* <Sponsor
          sponsorSectionRef={sponsorSectionRef}
          sponsorTitleRef={sponsorTitleRef}
          whyHeadingRef={whyHeadingRef}
          whyCardsRef={whyCardsRef}
          whatHeadingRef={whatHeadingRef}
          whatCardsRef={whatCardsRef}
        /> */}
      </section>
    </>
  );
}

export default Hero;
