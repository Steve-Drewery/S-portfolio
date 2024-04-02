import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const Intro = () => {
  const container = useRef();
  useGSAP(
    () => {
      gsap
        .timeline()
        .from("#intro", {
          xPercent: "-100",
          duration: 1.3,
          delay: 0.5,
        })
        .from(["#title1", "#title2", "#title3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title1", "#title2", "#title3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from(["#welcome"], {
          opacity: 0,
          duration: 0.5,
        })
        .from(["#line1"], {
          opacity: 0,
          duration: 0.5,
        })
        .from(["#line2"], {
          opacity: 0,
          duration: 0.5,
        });
    },
    { scope: container }
  );
  return (
    <div className="relative" ref={container} id="home">
      <div
        id="intro"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight justify-around"
      >
        <h1 id="title1" className="sm:text-9xl text-3xl">
          Web Developer
        </h1>
        <h1 id="title2" className="sm:text-9xl text-center text-3xl">
          Designer
        </h1>
        <h1 id="title3" className="sm:text-9xl text-right text-3xl">
          Freelancer
        </h1>
      </div>
      <div className="h-screen flex bg-yellow-900 justify-around flex-col w-full opacity-60">
        <div />
        <h1
          id="welcome"
          className="sm:text-9xl text-3xl text-center font-bold text-gray-100 font-spaceGrotesk sm:max-w-m "
        >
          <p>Hi, I'm Steve Drewery</p>
          <p> from Australia.</p>
        </h1>
        <p
          id="line1"
          className="sm:text-3xl text-xl font-bold text-gray-100 text-right sm:text-center font-spaceGrotesk pr-4 sm:pr-96"
        >
          <p>As a Fullstack Developer, I specialize</p>
          <p> in creating Apps, Websites and</p>
          <p> Software in a minimalistic design.</p>
        </p>
        <p
          id="line2"
          className="sm:text-4xl text-xl font-bold text-gray-100 sm:text-center font-spaceGrotesk sm:pl-96 text-left pl-4"
        >
          <p>Everything I create is tailored to</p>
          <p> my clients needs to provide the </p>
          <p>desired end product.</p>
        </p>
        <div />
      </div>
    </div>
  );
};
