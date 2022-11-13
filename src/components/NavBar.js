import { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/icons8-fire.gif';

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div
        id="navigation"
        className="flex items-center justify-between lg:justify-around border-b border-gray py-8 pb-0"
      >
        <Link to="/">
          <img
            className="object-contain h-20 w-50 pb-5"
            src={icon}
            alt="logo"
          />
        </Link>
        <nav>
          <section className="mobile-menu flex lg:hidden">
            <div
              className="hamburger-icon px-8 space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-blue"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-blue"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-blue"></span>
            </div>

            <div
              className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}
            >
              {' '}
              <div
                className="x-icon absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul
                className="menu-link-mobile-open flex flex-col items-center justify-between min-h-[250px]"
                onClick={() => setIsNavOpen(false)}
              >
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link to="/projects">Projects</Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link to="/resume">Resume</Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </section>

          <ul className="desktop-menu-hidden hidden space-x-8 lg:flex">
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </>
  );
}

export default NavBar;
