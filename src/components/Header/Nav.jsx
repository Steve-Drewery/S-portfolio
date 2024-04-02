import React from "react";
import { Link } from "react-scroll";

export const Nav = () => {
  const Links = [
    {
      name: "Contact",
      link: "contact",
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
      name: "Home",
      link: "home",
    },
  ];
  return (
    <div className="sm:flex items-center flex-row-reverse relative hidden">
      {Links.map(({ link, name }, id) => {
        return (
          <div className="ml-8 text-xl hover:cursor-pointer" key={id}>
            <Link
              to={link}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              {name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
