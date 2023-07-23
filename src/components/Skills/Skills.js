import React from "react";
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { SiMongodb, SiExpress, SiCss3 } from "react-icons/si";

function Skills() {
  return (
    <div className="max-w-3xl mx-auto justify-center py-12" id="tech">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 justify-items-center pt-2 bg-gradient-to-r from-twitter to-linkedIn hover:bg-gradient-to-l">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-[#D3D3D3] shadow-2xl rounded-xl sm:w-52 hover:scale-105 transform transition-transform duration-300">
          <FaReact className="mx-auto text-4xl text-[#22d3ee] animate-spin-slow" />
          <p className="mt-6 text-lg md:text-2xl font-semibold text-center">
            React
          </p>
        </div>
        <div className="flex flex-col w-40 p-10  m-6 overflow-hidden bg-[#D3D3D3] shadow-2xl rounded-xl sm:w-52 hover:scale-105 transform transition-transform duration-300">
          <SiMongodb className="mx-auto text-4xl text-secondary" />
          <p className="mt-6 text-lg md:text-2xl font-semibold ">
            MongoDB
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6   overflow-hidden bg-[#D3D3D3] shadow-2xl rounded-xl sm:w-52 hover:scale-105 transform transition-transform duration-300">
          <FaNodeJs className="mx-auto text-4xl text-[#4d7c0f]" />
          <p className="mt-6 text-lg md:text-2xl font-semibold text-center">
            Node
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-[#D3D3D3] shadow-2xl rounded-xl sm:w-52 hover:scale-105 transform transition-transform duration-300">
          <SiExpress className="mx-auto text-4xl text-gray" />
          <p className="mt-6 text-lg md:text-2xl font-semibold text-center">
            Express
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6  overflow-hidden bg-[#D3D3D3] shadow-2xl rounded-xl sm:w-52 hover:scale-105 transform transition-transform duration-300">
          <FaHtml5 className="mx-auto text-4xl text-[#ea580c]" />
          <p className="mt-6 text-lg md:text-2xl font-semibold text-center">
            HTML 5
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-[#D3D3D3] shadow-2xl rounded-xl sm:w-52 hover:scale-105 transform transition-transform duration-300">
          <SiCss3 className="mx-auto text-4xl text-[#0284c7]" />
          <p className="mt-6 text-lg md:text-2xl font-semibold text-center">
            CSS
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
