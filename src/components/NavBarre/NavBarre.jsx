import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBarre.css";

function NavBarre() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`nav ${isOpen ? "show" : ""}`}>
        <a href="#about" onClick={() => setIsOpen(false)}>
          À propos
        </a>
        <a href="#skills" onClick={() => setIsOpen(false)}>
          Compétences
        </a>
        <a href="#projects" onClick={() => setIsOpen(false)}>
          Portfolio
        </a>
        <a href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
      </nav>
    </>
  );
}

export default NavBarre;
