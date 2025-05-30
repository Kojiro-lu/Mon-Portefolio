import "./Header.css";
import logo from "../assets/logo.png"; // remplace par ton logo réel
import NavBarre from "./NavBarre";

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Ton Nom - Développeur Front-End"
        className="logo-image"
      />
      <NavBarre />
    </header>
  );
}

export default Header;
