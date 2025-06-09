import "./Footer.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="icon-container">
          <a
            href="https://github.com/Kojiro-lu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lien vers GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/anthony-v-91b35a358"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lien vers LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="text-footer">© 2025 - Tous droits réservés.</p>
      </footer>
    </>
  );
}

export default Footer;
