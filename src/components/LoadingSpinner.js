import React from "react";

const LoadingSpinner = ({ width, text }) => {
  return (
    <>
      <div
        className={`bg-white w-${width} h-full flex justify-center items-center`}
      >
        <div
          className={`flex  w-${width} h-64 items-center justify-center bg-white`}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-accent animate-spin">
            <div className="h-9 w-9 rounded-full bg-text"></div>
          </div>
        </div>
        <aside className="ml-5 text-twitter font-semibold">
          {text}
        </aside>
      </div>
    </>
  );
};

export default LoadingSpinner;
