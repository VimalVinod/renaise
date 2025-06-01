"use client";

import React, { forwardRef, useRef } from 'react';
import styles from "@styles/sparkie.module.css";

const Sparkie = forwardRef((_, ref) => {
  const sparkieRef = useRef(null);
  React.useImperativeHandle(ref, () => sparkieRef.current);

  return (
    <div className={styles.sparkieContainer}>
      <img 
        ref={sparkieRef}
        src="/img/sparkie.png" 
        alt="Sparkie Mascot" 
        className={styles.sparkie}
      />
    </div>
  );
});

Sparkie.displayName = 'Sparkie';

export default Sparkie;
