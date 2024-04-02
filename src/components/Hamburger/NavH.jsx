import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menuSlide } from "./anim";
import Curve from "./Curve/Curve";
import { Link } from "react-scroll";

const NavH = (props) => {
  const { isActive, setIsActive } = props;
  const Links = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "Projects",
      link: "projects",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="flex items-center flex-col text-white fixed right-0 h-lvh bg-neutral-900"
      >
        <div className="h-full box-border p-24 flex flex-col justify-between">
          <div>
            <p className="text-xl border-b-2">Navigation</p>
            {Links.map(({ link, name }, id) => {
              return (
                <div
                  className="flex flex-col-reverse text-5xl gap-3 mt-10 hover:cursor-pointer"
                  key={id}
                >
                  <Link
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                    onClick={() => {
                      setIsActive(isActive);
                    }}
                  >
                    {name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <Curve />
      </motion.div>
    </AnimatePresence>
  );
};

export default NavH;
