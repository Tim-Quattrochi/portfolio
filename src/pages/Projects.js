import ProjectCard from "../components/ProjectCard";
import { projects } from "../utils/projects";
import Divider from "../components/Divider";

function Projects() {
  return (
    <div className="p-4" id="projects">
      <div className=" flex flex-col h-full justify-center text-center text-1xl md:text-1xl lg:text-2xl font-heading font-medium static top-0 inset-x-0 p-2  bg-gradient-to-r from-indigo-500 transition-colors duration-200 ease-out transform origin-top-right">
        <Divider text="My Projects" />
      </div>
      <div className="flex flex-row flex-wrap md:flex-nowrap gap-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            link={project.liveLink}
            link2={project.gitHubLink}
            tech={project.tech}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
