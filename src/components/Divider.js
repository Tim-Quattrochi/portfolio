import React from "react";

const Divider = ({ text }) => {
  return (
    <h2 className="flex flex-row flex-nowrap items-center my-8">
      <span
        className="flex-grow block border-t border-black"
        aria-hidden="true"
        role="presentation"
      ></span>
      <span
        id="projects"
        className="flex-none block mx-4   px-4 py-2.5 text-xl leading-none font-medium uppercase bg-black text-yellow"
      >
        {text}
      </span>
      <span
        className="flex-grow block border-t border-black"
        aria-hidden="true"
        role="presentation"
      ></span>
    </h2>
  );
};

export default Divider;
