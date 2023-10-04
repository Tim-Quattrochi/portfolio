import React from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import moon from "../../assets/moon.gif";
import sun from "../../assets/sun.gif";

const DarkModeToggle = () => {
  const { darkmode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center justify-center mr-6 md:ml-4">
      {darkmode ? (
        <img
          className="rounded-full cursor-pointer"
          width={40}
          src={moon}
          alt="moon"
          checked={darkmode}
          onClick={toggleDarkMode}
        />
      ) : (
        <img
          // style={{ borderRadius: "50px", cursor: "pointer" }}
          className="rounded-full cursor-pointer"
          width={40}
          src={sun}
          alt="sun"
          checked={darkmode}
          onClick={toggleDarkMode}
        />
      )}
    </div>
  );
};

export default DarkModeToggle;
