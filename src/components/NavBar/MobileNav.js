import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = ({ location, renderLinkBasedOnPath }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const hamburgerLine = `h-1 w-6 my-1 rounded-full bg-secondary transition ease transform duration-300`;

  return (
    <section className="mobile-menu flex lg:hidden ">
      <button
        className="flex flex-col h-12 w-12 border-1 rounded justify-center items-center group"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <div
          className={`${hamburgerLine} ${
            isNavOpen
              ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${hamburgerLine} ${
            isNavOpen
              ? "opacity-0"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${hamburgerLine} ${
            isNavOpen
              ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>

      <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        {" "}
        <div
          className="menu-link-mobile-open flex flex-col items-center justify-between "
          onClick={() => setIsNavOpen(false)}
        ></div>
        <ul
          className="menu-link-mobile-open flex flex-col items-center justify-between "
          onClick={() => setIsNavOpen(false)}
        >
          {/* If the page the user is on is /contact or /resume, we want to hide the projects link 
                because the projects link just navigates to the project id on the / main page, it doesn't
                have any routing */}
          {renderLinkBasedOnPath(
            location.pathname,
            "#projects",
            "Projects"
          )}

          {renderLinkBasedOnPath(location.pathname, "/", "Home")}
          {renderLinkBasedOnPath(
            location.pathname,
            "/resume",
            "Resume"
          )}
          {renderLinkBasedOnPath(
            location.pathname,
            "/contact",
            "Contact"
          )}
        </ul>
      </div>
    </section>
  );
};

export default MobileNav;
