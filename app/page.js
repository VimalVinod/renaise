"use client";

import React from "react";
import styles from "@styles/main.module.css";
import Hero from "@sections/hero";
import Blob from "@components/Blob";
import Footer from "@sections/footer";
import HowToReach from "@sections/howToReach";

let sparkieTimeout;

function spawnSparkie(x, y) {
  if (sparkieTimeout) {
    clearTimeout(sparkieTimeout);
    const existingSparkie = document.getElementById("sparkie");
    if (existingSparkie) {
      existingSparkie.remove();
    }
  }
  const { innerWidth, innerHeight } = window;
  const sparkie = document.createElement("img");
  sparkie.src = "/img/sparkie.svg";
  sparkie.className = styles.sparkie;
  const offsetX = x >= innerWidth ? innerWidth - 100 : x - 50;
  const offsetY = y >= innerHeight ? innerHeight - 100 : y - 50;
  sparkie.style.left = `${offsetX}px`;
  sparkie.style.top = `${offsetY}px`;
  sparkie.id = "sparkie";
  document.body.appendChild(sparkie);
  sparkieTimeout = setTimeout(() => {
    if (sparkie) {
      sparkie.remove();
    }
  }, 1000);
}

export default function Home() {
  const scrollToSectionRef = React.useRef(null);
  
  const [loadFooter, setLoadFooter] = React.useState(false);
  const startEndRef = React.useRef({
    start: () => setLoadFooter(true),
    end: () => setLoadFooter(false),
  });
  const addToRef = (ref) => (scrollToSectionRef.current = ref);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.overflow = "hidden";

    return () => {
      // cleanup function to reset overflow
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  React.useEffect(() => {
    const handlerRightClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      spawnSparkie(e.clientX, e.clientY);
      return false;
    };
    document.addEventListener("contextmenu", handlerRightClick);
    return () => {
      document.removeEventListener("contextmenu", handlerRightClick);
    };
  }, []);

  return (
    <>
      <Blob />
      <div className={styles.container}>
        <Hero
          scrollToSectionRef={addToRef}
          startEndRef={startEndRef}
        />
      </div>
      {loadFooter && (
        <>
          <HowToReach />
          <Footer
            scrollToSectionRef={scrollToSectionRef}
            hasStarted={true}
          />
        </>
      )}
    </>
  );
}
