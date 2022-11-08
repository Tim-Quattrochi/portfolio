import React from 'react';
import profilePic from '../assets/profilePic.png';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaLink,
  FaEnvelope,
} from 'react-icons/fa';

function Card() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-lg"
            src={profilePic}
            alt=""
          />
          <div className="text-center mt-5">
            <p className="text-xl sm:text-2xl text-gray-900">
              Tim Quattrochi
            </p>
            <p className="text-xs sm:text-base text-gray pt-2 pb-4 px-5 w-auto inline-block border-b-2">
              Software Developer
            </p>

            <div className="flex align-center justify-center mt-4">
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
                href="https://github.com/Tim-Quattrochi"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
