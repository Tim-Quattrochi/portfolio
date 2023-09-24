import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SideContact = () => {
  return (
    <div className="hidden lg:flex fixed flex-column top-[35%] left-0 z-10">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px]  duration-300 bg-linkedIn ">
          <a
            className="flex justify-around items-center w-full  text-white"
            href="https://www.linkedin.com/in/timquattrochi/"
            target="blank"
          >
            Linkedin <FaLinkedinIn size={30} fill="white" />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333] ">
          <a
            className="flex justify-around items-center w-full  text-white"
            href="https://github.com/tim-quattrochi"
            target="blank"
          >
            Github <FaGithub size={30} fill="white" />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#528d81] ">
          <Link
            className="flex justify-around items-center w-full  text-white"
            to="resume"
          >
            Resume <BsFillPersonLinesFill size={30} fill="white" />
          </Link>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#232936] ">
          <Link
            className="flex justify-around items-center w-full ml-2  text-white"
            to="contact"
            smooth="{true}"
            duration={900}
          >
            Email <FaEnvelope size={30} fill="white" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideContact;
