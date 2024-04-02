import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./style.module.scss";

const Circle = () => {
  const container2 = useRef();

  const { scrollYProgress } = useScroll({
    target: container2,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  return (
    <div>
      <motion.div
        style={{ height }}
        className={styles.circleContainer}
        ref={container2}
      >
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
};

export default Circle;
