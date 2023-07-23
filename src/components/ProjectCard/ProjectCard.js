import React, { useState } from "react";

const ProjectCard = ({
  name,
  image,
  description,
  tech,
  link,
  link2,
}) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="relative rounded-lg overflow-hidden h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={image}
        alt="work"
        className="w-full h-36 md:h-48 object-cover"
      />
      {hovered && (
        <div className="absolute inset-0 bg-back-ground text-text flex flex-col justify-center items-center p-5 bg-opacity-90 transition-opacity duration-300">
          <h3 className="text-md md:text-xl mb-1 md:mb-3 font-semibold text-center">
            {name}
          </h3>
          <p className="text-xs mb-2 text-center font-bold text-secondary leading-none">
            {description}
          </p>

          <div className="flex justify-center space-x-4 mt-2">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-text bg-accent hover:text-blue transition-colors duration-300 px-3 py-2 rounded-md"
              >
                Live Demo
              </a>
            )}
            {link2 && (
              <a
                href={link2}
                target="_blank"
                rel="noreferrer"
                className="text-[#000080] bg-primary hover:text-secondary transition-colors duration-300 px-3 py-2 rounded-md"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      )}
      <div className="bg-primary p-5 text-text-gray-dark">
        <h3 className="text-sm md:text-lg w-auto  mb-2 md:mb-3 font-semibold bg-gradient-to-l from-primary to-secondary text-white">
          {name}
        </h3>
        <p className="flex text-gray-dark flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {tech.map((item, i) => (
            <span
              key={i}
              className="inline-block px-2 py-1 bg-gray-light text-gray-dark rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
