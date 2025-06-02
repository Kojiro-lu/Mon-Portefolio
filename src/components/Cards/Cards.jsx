import "./Cards.css";
import projectsData from "../../data/projects.json";

function Cards() {
  return (
    <div className="cards-container">
      {projectsData.map((project) => (
        <div className="card" key={project.id}>
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <div className="tech-list">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
