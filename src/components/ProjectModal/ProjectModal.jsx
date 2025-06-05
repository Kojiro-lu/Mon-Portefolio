import "./ProjectModal.css";

function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h3 className="modal-title">{project.title}</h3>
        <div className="modal-image-and-description">
          <img
            src={project.image}
            alt={project.title}
            className="modal-image"
          />
          <div className="modal-description">
            <h4>{project.titledescription}</h4>
            <p>{project.description}</p>
          </div>
        </div>
        <div className="modal-buttons">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-button"
            >
              Voir le repo GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-button"
            >
              Voir le site
            </a>
          )}
        </div>
        <div className="modal-technos">
          {project.technologies.map((tech, index) => (
            <span key={index} className="modal-tech">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
