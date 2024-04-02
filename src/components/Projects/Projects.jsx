import styles from "./style.module.scss";
import { useState, useEffect, useRef } from "react";
import Project from "./Project/Project";
import { motion } from "framer-motion";
import gsap from "gsap";

const projects = [
  {
    title: "Portfolio",
    src: "/Images/background.webp",
    color: "#000000",
    icon: {
      html: "/Images/html.svg",
      css: "/Images/css.svg",
      react: "/Images/react.svg",
      tailwind: "/Images/tailwind.svg",
      sass: "/Images/sass.svg",
    },
    href: "https://fullstack-development.netlify.app/",
  },
  {
    title: "Workout App",
    src: "/Images/workout-app.webp",
    color: "#8C8C8C",
    icon: {
      html: "/Images/html.svg",
      css: "/Images/css.svg",
      react: "/Images/react.svg",
      tailwind: "/Images/tailwind.svg",
    },
    href: "https://my-workout-app.netlify.app/",
  },
  {
    title: "Group Work",
    src: "/Images/group.webp",
    color: "#EFE8D3",
    icon: {
      html: "/Images/html.svg",
      css: "/Images/css.svg",
      react: "/Images/react.svg",
      sass: "/Images/sass.svg",
    },
    href: "https://fitalytics.netlify.app/",
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      id="projects"
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={styles.projects}
    >
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              manageModal={manageModal}
              key={index}
              icon={project.icon}
              href={project.href}
            />
          );
        })}
      </div>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}
        >
          <div
            style={{ top: index * -100 + "%" }}
            className={styles.modalSlider}
          >
            {projects.map((project, index) => {
              const { src, color } = project;
              return (
                <div
                  className={styles.modal}
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  <img src={src} width={400} height={0} alt="" />
                </div>
              );
            })}
          </div>
        </motion.div>
      </>
    </main>
  );
}
