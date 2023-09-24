import ProjectCard from "../components/ProjectCard/ProjectCard.js";
import { projects } from "../utils/projects";
import { Divider } from "../components/index.js";
import { useState } from "react";

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="p-4" id="projects">
      <Divider text="Explore My Projects" forProjects={true} />

      <div className="flex flex-row flex-wrap md:flex-nowrap gap-5 mt-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            link={project.liveLink}
            link2={project.gitHubLink}
            tech={project.tech}
            {...project}
            isModalOpen={isModalOpen}
            openModal={openModal}
            closeModal={closeModal}
            nextProject={nextProject}
            previousProject={previousProject}
            currentIndex={currentIndex}
            projects={projects}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
