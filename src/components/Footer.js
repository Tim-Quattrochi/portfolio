import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import Divider from "./Divider";
import ScrollIntoView from "react-scroll-into-view";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    <>
      <Divider text="Contact info" />
      <div className="flex justify-center items-baseline mt-4">
        <a
          href="https://github.com/Tim-Quattrochi"
          target="_blank"
          rel="noreferrer"
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray hover:bg-gray rounded-full hover:text-yellow transition-colors duration-300"
        >
          <FaGithub />
          <span className="sr-only">Github</span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue hover:bg-gray rounded-full hover:text-white transition-colors duration-300"
          href="https://twitter.com/tjq9"
        >
          <FaTwitter />
          <span className="sr-only">Github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/timquattrochi/"
          target="_blank"
          rel="noreferrer"
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue hover:bg-gray rounded-full hover:text-white transition-colors duration-300"
        >
          <FaLinkedinIn />
          <span className="sr-only">LinkedIn</span>
        </a>

        <a
          href="mailto:timq82@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-green hover:bg-gray rounded-full hover:text-green transition-colors duration-300"
        >
          <FaEnvelope />
          <span className="sr-only">Email</span>
        </a>
      </div>
      {location.pathname === "/contact" ? (
        ""
      ) : (
        <Link to="/contact">
          <span className="inline-block w-auto mx-auto bg-black font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer">
            <div className="flex flex-row items-center">
              <span className="mr-3 animate-bounce">
                Contact Form
              </span>
              <FaArrowRight color="blue" className="animate-bounce" />
            </div>
          </span>
        </Link>
      )}

      <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
          Made with{" "}
          <span className='mr-2 role="link" aria-label="heart" '>
            💙
          </span>
          by{" "}
          <a
            className="text-blue hover:underline"
            href="mailto:timq82@gmail.com"
          >
            Tim Quattrochi
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
