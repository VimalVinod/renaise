"use client";

import React, { forwardRef, useRef } from "react";
import styles from "@styles/sparkie.module.css";

const Sparkie = forwardRef(({ conatinerRef }, ref) => {
  const sparkieRef = useRef(null);
  React.useImperativeHandle(ref, () => sparkieRef.current);
  React.useImperativeHandle(conatinerRef, () => sparkieRef.current.parentElement);

  return (
    <div className={styles.sparkieContainer} ref={conatinerRef}>
      <img
        ref={sparkieRef}
        src="/img/spark.png"
        alt="Sparkie Mascot"
        className={styles.sparkie}
      />
    </div>
  );
});

Sparkie.displayName = "Sparkie";

export default Sparkie;
