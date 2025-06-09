import { useState } from "react";
import "./NavBar.scss";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <button
        className="burger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {/* Icone burger ou 3 barres */}
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </button>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#about" onClick={() => setIsOpen(false)}>
          À propos
        </a>
        <a href="#skills" onClick={() => setIsOpen(false)}>
          Compétences
        </a>
        <a href="#portfolio" onClick={() => setIsOpen(false)}>
          Portfolio
        </a>
        <a href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
