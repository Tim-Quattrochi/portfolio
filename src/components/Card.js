import React from "react";
import { headshot } from "../assets";
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import { devTeam } from "../assets";

function Card() {
  return (
    <div className="w-full " id="card">
      <div className="flex flex-col  md:flex-row justify-center md:justify-start w-full md:w-1/2 lg:w-1/4 md:mt-10 mx-auto bg-gray bg-gradient-to-r from-back-ground to-yellow shadow-xl rounded-xl p-5">
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl  drop-shadow-lg"
            src={headshot}
            alt="Tim's portfolio headshot"
          />
          <div className="text-center mt-5">
            <p className="text-xl sm:text-2xl text-blue">
              Tim Quattrochi
            </p>
            <p className="text-xs sm:text-base text-white pt-2 pb-4 px-5 w-auto inline-block ">
              Software Developer
            </p>

            <div className="flex align-center w-1/2 mx-auto md:w-full justify-center mt-4 mb-4 bg-back-ground">
              <a
                href="https://github.com/Tim-Quattrochi"
                target="_blank"
                rel="noreferrer"
                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-yellow transition-colors duration-300"
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
                <span className="sr-only">Twitter</span>
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
          </div>
        </div>
        <img
          className="w-52 h-48 mx-auto md:ml-auto md:w-1/2 md:mt-20 lg:object-scale-down"
          src={devTeam}
          alt="team planning at a desk"
        />
      </div>
    </div>
  );
}

export default Card;
