import React from "react";
import Modal from "../Modal/MyModal";

const ProjectCard = ({
  name,
  image,
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

  //this function prevents the modal from opening when the user clicks on the live demo and
  //github links.
  const linkHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="relative rounded-lg overflow-hidden h-full "
      onClick={() => openModal(clickedIndex)}
    >
      <img
        src={image instanceof Array ? image[0] : image}
        alt="work"
        className="w-full h-48 md:h-64 object-cover transition-transform transform  group-hover:scale-105 cursor-pointer"
      />

      <div className="bg-primary p-5 text-text-gray-dark  dark:bg-dark-background">
        <h3 className="text-sm md:text-lg w-auto mb-2 md:mb-3 font-semibold bg-gradient-to-l from-primary to-secondary text-white text-center p-1 dark:text-dark-primary-text">
          {name}
        </h3>
        <p className="flex text-gray-dark w-auto flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm">
          {tech.map((item, i) => (
            <span
              key={i}
              className="px-1 py-1 z-10 lg:px-2 lg:py-2 hover:bg-white bg-gray-light text-gray-dark rounded"
            >
              {item}
            </span>
          ))}
        </p>
        <div>
          {/*start of links */}
          <div className="relative z-10 flex justify-center space-x-3 mt-5">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                onClick={linkHandler}
                className="text-text font-bold bg-accent hover:text-blue-200 transition-colors duration-300 px-3 py-2 rounded-md"
              >
                Live Demo
              </a>
            )}
            {link2 && (
              <a
                href={link2}
                target="_blank"
                rel="noreferrer"
                onClick={linkHandler}
                className="text-text font-bold bg-white hover:text-secondary transition-colors duration-300 px-3 py-2 rounded-md"
              >
                GitHub
              </a>
            )}
          </div>
          {/*end of links */}
        </div>
      </div>

      {isModalOpen && (
        <Modal
          projects={projects}
          currentIndex={currentIndex}
          previousProject={previousProject}
          nextProject={nextProject}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ProjectCard;
