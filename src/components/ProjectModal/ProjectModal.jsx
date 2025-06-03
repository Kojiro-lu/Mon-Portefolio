import "./ProjectModal.css";

function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">{project.title}</h2>
        <div className="modal-image-and-description">
          <img
            src={project.image}
            alt={project.title}
            className="modal-image"
          />
          <div className="modal-description">
            <p>{project.titledescription}</p>
            <p>{project.description}</p>
          </div>
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
