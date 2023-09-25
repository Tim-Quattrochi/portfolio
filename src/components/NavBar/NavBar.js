import MobileNav from "./MobileNav";
import { renderLinkBasedOnPath } from "./helpers/helperNav";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "../DarkMode/DarkModeToggle";
import {tqLogo} from "../../assets/index"

import "./navbar.css";

function NavBar() {
  const location = useLocation();

  return (
    
    <div
      id="navigation"
      className="font-neueMachina flex items-center bg-primary dark:bg-stone-900 w-auto justify-center lg:justify-around border-b shadow-md py-2 pb-0 group  "
    >
         <Link to="/" className="mr-auto m-0 ">
        <span className="w-10">
          <img src={tqLogo}  alt="tim's logo" className="w-28  lg:w-40 self-start " />
      
        </span>
      </Link>
        {/*hidden on mobile*/}
        <span className="mr-auto">
        <DarkModeToggle />
      </span>
    
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
