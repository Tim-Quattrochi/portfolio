import React from "react";
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { SiMongodb, SiExpress, SiCss3 } from "react-icons/si";
import Divider from "../Divider";

function Skills() {
  return (
    <div className="max-w-3xl mx-auto justify-center py-12" id="tech">
      <Divider text="Technology" />
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-[#D3D3D3] shadow-2xl rounded-xl sm:w-52 hover:scale-105 transform transition-transform duration-300">
          <FaReact className="mx-auto text-4xl text-[#22d3ee] animate-spin-slow" />
          <p className="mt-6 text-2xl font-semibold text-center">
            React
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-[#D3D3D3] shadow-2xl rounded-xl sm:w-52 hover:scale-105 transform transition-transform duration-300">
          <SiMongodb className="mx-auto text-4xl text-secondary" />
          <p className="mt-6 text-2xl font-semibold text-center">
            MongoDB
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-[#D3D3D3] shadow-2xl rounded-xl sm:w-52 hover:scale-105 transform transition-transform duration-300">
          <FaNodeJs className="mx-auto text-4xl text-[#4d7c0f]" />
          <p className="mt-6 text-2xl font-semibold text-center">
            Node.js
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-[#D3D3D3] shadow-2xl rounded-xl sm:w-52 hover:scale-105 transform transition-transform duration-300">
          <SiExpress className="mx-auto text-4xl text-gray" />
          <p className="mt-6 text-2xl font-semibold text-center">
            Express
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-[#D3D3D3] shadow-2xl rounded-xl sm:w-52 hover:scale-105 transform transition-transform duration-300">
          <FaHtml5 className="mx-auto text-4xl text-[#ea580c]" />
          <p className="mt-6 text-2xl font-semibold text-center">
            HTML 5
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-[#D3D3D3] shadow-2xl rounded-xl sm:w-52 hover:scale-105 transform transition-transform duration-300">
          <SiCss3 className="mx-auto text-4xl text-[#0284c7]" />
          <p className="mt-6 text-2xl font-semibold text-center">
            CSS
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
