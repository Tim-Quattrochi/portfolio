import React from "react";

//if this divider is for the projects section, pass true for the forProjects prop
//else it will be normal style.
const Divider = ({ text, forProjects = null }) => {
  return (
    <>
      {forProjects ? (
        <div className="flex flex-col h-full justify-center text-center text-1xl md:text-1xl lg:text-2xl font-heading font-medium static top-0 inset-x-0 p-2 bg-gradient-to-r from-indigo-500 transition-colors duration-200 ease-out transform origin-top-right dark:bg-dark-background dark:text-dark-primary-text">
          {text}
        </div>
      ) : (
        <div className="flex items-center my-8">
          <div className="flex-grow">
            <hr className="border-t border-text-gray-dark dark:border-dark-accent-1 h-0.5" />
          </div>
          <div className="px-4 py-2.5 bg-gradient-to-r from-primary to-secondary text-white text-xl leading-none font-medium uppercase shadow-md dark:bg-dark-background dark:text-dark-primary-text dark:from-dark-primary dark:to-dark-secondary">
            {text}
          </div>
          <div className="flex-grow">
            <hr className="border-t border-text-gray-dark dark:border-dark-accent-2 h-0.5" />
          </div>
        </div>
      )}
    </>
  );
};

export default Divider;
