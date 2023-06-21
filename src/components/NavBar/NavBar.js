import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import icon from "../../assets/icons8-fire.gif";
import "./navbar.css";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const hamburgerLine = `h-1 w-6 my-1 rounded-full bg-gray transition ease transform duration-300`;

  return (
    <>
      <div
        id="navigation"
        className="flex items-center w-full justify-between lg:justify-around border-b shadow-md py-8 pb-0"
      >
        <Link to="/">
          <span className="text-white text-xl shadow-lg animate-pulse">
            Tim Quattrochi{" "}
            <span className="text-yellow">407-486-9261</span>
          </span>
        </Link>
        <nav>
          <section className="mobile-menu flex lg:hidden">
            <button
              className="flex flex-col h-12 w-12 border-2 border-yellow rounded justify-center items-center group"
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
                <li className="hover:border-b border-back-ground my-8 uppercase">
                  <a href="#projects">Projects</a>
                </li>
                <li className=" hover:border-b border-back-ground my-8 uppercase">
                  <Link to="/resume">Resume</Link>
                </li>
                <li className=" hover:border-b border-back-ground my-8 uppercase">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </section>

          <ul className="desktop-menu-hidden hidden space-x-8 lg:flex text-lg">
            {location.pathname === "/" ? (
              <li className="hover:border-b border-gray text-white my-8 uppercase">
                <a href="#projects">Projects</a>
              </li>
            ) : (
              ""
            )}

            <li className="hover:border-b border-gray text-white my-8 uppercase">
              <Link to="/resume">Resume</Link>
            </li>
            {location.pathname === "/contact" ? (
              ""
            ) : (
              <li className="hover:border-b border-gray text-white my-8 uppercase">
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
