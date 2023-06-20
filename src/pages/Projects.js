import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { projects } from "../utils/projects";

function Projects() {
  return (
    <div className="p-4">
      <NavBar />
      <h1 className="text-3xl text-center font-medium text-gray-900 mb-4">
        My Projects
      </h1>
      <div className="flex flex-wrap">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            link={project.liveLink}
            link2={project.gitHubLink}
            {...project}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
