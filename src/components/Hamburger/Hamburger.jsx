import React, { useLayoutEffect, useRef, useState } from "react";
import NavH from "./NavH";
import styles from "./style.module.scss";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);

  const burger = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(burger.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(burger.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            burger.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false)
          );
        },
      },
    });
  }, []);
  return (
    <div>
      <div className={styles.header} ref={burger}>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.button}
        >
          <div
            className={`${styles.burger} ${
              isActive || window.screen.width < 780
                ? styles.burgerActive && console.log("true")
                : ""
            }`}
          ></div>
        </div>
      </div>
      {isActive && <NavH setIsActive={setIsActive} />}
    </div>
  );
};

export default Hamburger;
