import { useState } from "react";
import "./Cards.css";
import projectsData from "../../data/projects.json";
import ProjectModal from "../ProjectModal/ProjectModal";

function Cards() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="cards-container">
      {projectsData.map((project) => (
        <div className="card" key={project.id}>
          <h3 className="title">{project.title}</h3>
          <img src={project.image} alt={project.title} />
          <button
            className="ensavoirplus-container"
            onClick={() => handleOpenModal(project)}
          >
            <span className="ensavoirplus-text">En savoir plus</span>
          </button>
        </div>
      ))}

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Cards;
