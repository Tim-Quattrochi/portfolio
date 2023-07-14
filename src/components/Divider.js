import React from "react";

const Divider = ({ text }) => {
  return (
    <div className="flex items-center my-8">
      <div className="flex-grow">
        <hr className="border-t border-text-gray-dark" />
      </div>
      <div className="px-4 py-2.5 bg-gradient-to-r from-primary to-secondary text-white text-xl leading-none font-medium uppercase">
        {text}
      </div>
      <div className="flex-grow">
        <hr className="border-t border-text-gray-dark" />
      </div>
    </div>
  );
};

export default Divider;
