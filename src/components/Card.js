import React from "react";
import { headshot } from "../assets";
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

function Card() {
  return (
    <div className="w-full bg-primary py-20">
      <div className="flex flex-col md:flex-row justify-center  w-3/4 md:w-full lg:w-1/4 md:mt-10 mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="flex flex-col items-center md:items-start md:flex-row md:flex-wrap md:justify-center md:space-x-4">
          <img
            className="w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0 shadow-xl rounded"
            src={headshot}
            alt="Tim's portfolio headshot"
          />
          <div className="text-center mt-5 md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-text">
              Tim Quattrochi
            </h2>
            <p className="text-base md:text-lg text-text pt-2 pb-4 px-5 inline-block ">
              Software Developer
            </p>

            <div className="flex justify-center md:justify-start mt-4 mb-4">
              <a
                href="https://github.com/Tim-Quattrochi"
                target="_blank"
                rel="noreferrer"
                className="text-3xl md:text-4xl m-1 p-2 text-gray-dark rounded-full hover:text-accent transition-colors duration-300"
              >
                <FaGithub />
                <span className="sr-only">Github</span>
              </a>
              <a
                href="https://twitter.com/tjq9"
                target="_blank"
                rel="noreferrer"
                className="text-3xl md:text-4xl m-1 p-2 text-twitter rounded-full hover:text-twitter transition-colors duration-300"
              >
                <FaTwitter />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.linkedin.com/in/timquattrochi/"
                target="_blank"
                rel="noreferrer"
                className="text-3xl md:text-4xl m-1 p-2 text-linkedIn rounded-full hover:text-linkedin transition-colors duration-300"
              >
                <FaLinkedinIn />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:timq82@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-3xl md:text-4xl m-1 p-2 text-text-gray-dark rounded-full hover:text-accent transition-colors duration-300"
              >
                <FaEnvelope />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
