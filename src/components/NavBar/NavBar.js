import MobileNav from "./MobileNav";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const location = useLocation();

  /**
   *
   * @param {string} currPath The current path of the page
   * @param {string} pathToCheck The path to check for rendering the link
   * @param {string} name The text to display as the link
   * @returns  {JSX.Element | null}
   */

  const renderLinkBasedOnPath = (currPath, pathToCheck, name) => {
    const liClass =
      "bg-text-gray-dark rounded p-1 text-white hover:text-secondary my-8 uppercase";

    //The project link needs to be an anchor tag because it is
    //simply scrolling to the #projects id on the home page.
    const linkToReturn = (
      <li className={liClass}>
        {pathToCheck.startsWith("#") ? (
          <a href={pathToCheck}>{name}</a>
        ) : (
          <Link to={pathToCheck}>{name}</Link>
        )}
      </li>
    );

    if (currPath === "/" && pathToCheck === "/") {
      return null;
    } else if (
      (currPath === "/resume" || currPath === "/contact") &&
      pathToCheck === "#projects"
    ) {
      return null;
    } else {
      return linkToReturn;
    }
  };

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
          <MobileNav
            location={location}
            renderLinkBasedOnPath={renderLinkBasedOnPath}
          />

          {/* Beginning of desktop nav */}
          <ul className=" divide-gray-light desktop-menu-hidden hidden  space-x-3 lg:flex text-lg bg-gradient-to-l from-twitter to-linkedIn hover:bg-gradient-to-r opacity-80 rounded-lg p-1 m-1">
            {renderLinkBasedOnPath(
              location.pathname,
              "#projects",
              "Projects"
            )}

            {renderLinkBasedOnPath(location.pathname, "/", "home")}

            {renderLinkBasedOnPath(
              location.pathname,
              "/contact",
              "Contact"
            )}
            {renderLinkBasedOnPath(
              location.pathname,
              "/resume",
              "Resume"
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
