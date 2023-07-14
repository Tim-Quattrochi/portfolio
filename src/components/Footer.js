import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";
import { FaArrowAltCircleUp } from "react-icons/fa";
import Divider from "./Divider";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  const hideScrollUpBtn = location.pathname !== "/";
  console.log(hideScrollUpBtn);
  return (
    <>
      <div className=" bg-primary">
        <div className="flex justify-center w-half items-baseline mt-4">
          <a
            href="https://github.com/Tim-Quattrochi"
            target="_blank"
            rel="noreferrer"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray hover:bg-accent rounded-full  transition-colors duration-300"
          >
            <FaGithub />
            <span className="sr-only">Github</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-twitter rounded-full hover:text-white transition-colors duration-300"
            href="https://twitter.com/tjq9"
          >
            <FaTwitter />
            <span className="sr-only">Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/timquattrochi/"
            target="_blank"
            rel="noreferrer"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-white hover:secondary  rounded-full hover:text-white transition-colors duration-300"
          >
            <FaLinkedinIn stroke="blue" />
            <span className="sr-only">LinkedIn</span>
          </a>

          <a
            href="mailto:timq82@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-secondary hover:bg-white rounded-full hover:text-green transition-colors duration-300"
          >
            <FaEnvelope />
            <span className="sr-only">Email</span>
          </a>
        </div>

        {!hideScrollUpBtn && (
          <ScrollIntoView selector="#navigation">
            <div className="float-right">
              <FaArrowAltCircleUp className="animate-bounce mx-auto mr-2 text-3xl text-twitter" />
            </div>
          </ScrollIntoView>
        )}
        <div className="flex justify-center items-center mt-4">
          <p className="text-text mb-4">
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
      </div>
    </>
  );
}

export default Footer;
