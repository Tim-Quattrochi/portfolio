import MobileNav from "./MobileNav";
import { renderLinkBasedOnPath } from "./helpers/helperNav";
import { Link, useLocation } from "react-router-dom";

import "./navbar.css";

function NavBar() {
  const location = useLocation();

  return (
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
  );
}

export default NavBar;
