import React from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import moon from "../../assets/moon.gif";
import sun from "../../assets/sun.gif";

const DarkModeToggle = () => {
  const { darkmode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center justify-center">
      <label
        htmlFor="toggle"
        className="cursor-pointer flex items-center transition-colors duration-300 ease-in-out"
      >
        <div className="relative w-12 h-6 bg-gray-300 rounded-full dark:bg-gray-800 dark:text-white">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only"
            checked={darkmode}
            onChange={toggleDarkMode}
          />
          <div
            className={`toggle-dot absolute w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ${
              darkmode ? "translate-x-6" : ""
            }`}
          ></div>
        </div>
        <span
          className={`text-gray-600 dark:text-gray-300 mx-2 ${
            darkmode ? "order-1" : "order-2"
          }`}
        >
          {darkmode ? (
            <img
              style={{ borderRadius: "50px" }}
              width={40}
              src={moon}
              alt="moon"
            />
          ) : (
            <img
              style={{ borderRadius: "50px" }}
              width={40}
              src={sun}
              alt="sun"
            />
          )}
        </span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
