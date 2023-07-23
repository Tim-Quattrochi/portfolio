import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const hamburgerLine = `h-1 w-6 my-1 rounded-full bg-secondary transition ease transform duration-300`;

  return (
    <>
      <div
        id="navigation"
        className="font-neueMachina flex items-center bg-primary w-full justify-between lg:justify-around border-b shadow-md py-8 pb-0  "
      >
        <Link to="/">
          <span className="text-white text-lg bg-gradient-to-r from-twitter to-linkedIn hover:bg-gradient-to-l p-4 rounded-lg">
            Tim Quattrochi{" "}
            <span className="text-accent">407-486-9261</span>
          </span>
        </Link>
        <nav>
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

            <div
              className={isNavOpen ? "showMenuNav" : "hideMenuNav"}
            >
              {" "}
              <div
                className="menu-link-mobile-open flex flex-col items-center justify-between "
                onClick={() => setIsNavOpen(false)}
              ></div>
              <ul
                className="menu-link-mobile-open flex flex-col items-center justify-between "
                onClick={() => setIsNavOpen(false)}
              >
                <li className="text-text-gray-dark rounded  p-1  hover:text-secondary my-4 uppercase">
                  <a href="#projects">
                    {location.pathname === "/contact"
                      ? null
                      : "Projects"}
                  </a>
                </li>
                {location.pathname !== "/" && (
                  <li className=" text-text-gray-dark rounded  p-1  hover:text-secondary my-4 uppercase">
                    <Link to="/">Home</Link>
                  </li>
                )}
                <li className="text-text-gray-dark rounded  p-1  hover:text-secondary my-4 uppercase">
                  <Link to="/resume">Resume</Link>
                </li>
                <li className="text-text-gray-dark rounded  p-1  hover:text-secondary my-4 uppercase">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </section>

          <ul className=" divide-gray-light desktop-menu-hidden hidden  space-x-3 lg:flex text-lg bg-gradient-to-l from-twitter to-linkedIn hover:bg-gradient-to-r opacity-80 rounded-lg p-1 m-1">
            {location.pathname === "/" ? (
              <li className="bg-text-gray-dark rounded p-1 text-white hover:text-secondary my-8 uppercase">
                <a href="#projects">Projects</a>
              </li>
            ) : null}

            {location.pathname !== "/" && (
              <li className=" bg-text-gray-dark rounded p-1 text-white hover:text-secondary my-8 uppercase">
                <Link to="/">Home</Link>
              </li>
            )}
            {location.pathname === "/contact" ? (
              <li className=" bg-text-gray-dark rounded p-1 text-white hover:text-secondary my-8 uppercase">
                <Link to="/resume">Resume</Link>
              </li>
            ) : (
              <li className=" bg-text-gray-dark rounded p-1 text-white hover:text-secondary my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
