import React from "react";

const AOS = ({ direction, duration, delay, children }) => {
  return (
    <div
      data-aos={direction}
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {children}
    </div>
  );
};

export default AOS;
