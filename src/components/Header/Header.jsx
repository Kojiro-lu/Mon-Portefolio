import "../Header/Header.css";
import logo from "../../assets/logo.png";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Anthony Vaudeville - Intégrateur Web"
        className="logo-image"
      />
      <NavBar />
    </header>
  );
}

export default Header;
