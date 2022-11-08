import React from 'react';
import { FaReact, FaNodeJs, FaHtml5 } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiCss3 } from 'react-icons/si';

function Skills() {
  return (
    <div className="max-w-3xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl text-black text-center sm:text-4xl pt-4 font-bold">
        Tech I use
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact
            color="#22d3ee"
            className="mx-auto text-2xl sm:text-4xl"
          />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            React
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiMongodb
            color="green"
            className="mx-auto text-2xl sm:text-4xl"
          />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            MongoDB
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaNodeJs
            color="#4d7c0f"
            className="mx-auto text-2xl sm:text-4xl"
          />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Node.js
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiExpress
            color="gray"
            className="mx-auto text-2xl sm:text-4xl"
          />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Express
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaHtml5
            color="#ea580c"
            className="mx-auto text-2xl sm:text-4xl"
          />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            HTML 5
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiCss3
            color="#0284c7"
            className="mx-auto text-2xl sm:text-4xl"
          />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            CSS
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
