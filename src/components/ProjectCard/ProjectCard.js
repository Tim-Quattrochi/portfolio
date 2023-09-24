import React from "react";
import Modal from "../Modal/MyModal";

const ProjectCard = ({
  name,
  image,
  description,
  tech,
  link,
  link2,
  isModalOpen,
  openModal,
  closeModal,
  currentIndex,
  nextProject,
  previousProject,
  projects,
}) => {
  //when the user clicks on a project, the index is passed to openModal, which then sets the currentIndex to the index of the project that was clicked on.
  const clickedIndex = projects.findIndex(
    (proj) => proj.name === name
  );

  return (
    <div
      className="relative rounded-lg overflow-hidden h-full group"
      onClick={() => openModal(clickedIndex)}
    >
      <img
        src={image instanceof Array ? image[0] : image}
        alt="work"
        className="w-full h-48 md:h-64 object-cover transition-transform transform  group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary to-secondary text-white opacity-0 transition-opacity duration-300  flex flex-col justify-center items-center p-5  cursor-pointer">
        <h3 className="text-md md:text-xl mb-1 md:mb-3 font-semibold text-center">
          {name}
        </h3>
        <p className="text-xs mb-2 text-center font-bold text-white leading-none bg-opacity-90 bg-dark-accent-1 rounded-md">
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
      <div className="bg-primary p-5 text-text-gray-dark">
        <h3 className="text-sm md:text-lg w-auto mb-2 md:mb-3 font-semibold bg-gradient-to-l from-primary to-secondary text-white">
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
      {isModalOpen && (
        <Modal
          projects={projects}
          currentIndex={currentIndex}
          image={image}
          previousProject={previousProject}
          nextProject={nextProject}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ProjectCard;
