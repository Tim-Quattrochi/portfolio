import React from "react";

const ProjectCard = ({ name, image, description, link, link2 }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4 max-w-sm">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={name}
      />
      <div className="px-6 py-4">
        <h2 className="text-lg font-medium text-gray-900">{name}</h2>
        <p className="text-gray-700 whitespace-pre-line mt-2">
          {description}
        </p>
      </div>
      <div className="px-6 py-4 bg-gray-100">
        <a
          className="block w-full text-center font-medium text-blue-500 hover:text-blue-800"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link === null
            ? "No live link yet ❌"
            : "View live Project"}
        </a>
      </div>
      <div className="px-6 py-4 bg-gray-100">
        <a
          className="block w-full text-center font-medium text-blue-500 hover:text-blue-800"
          href={link2}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Repository
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
