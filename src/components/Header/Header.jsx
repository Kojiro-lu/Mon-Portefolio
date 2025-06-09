import "../Header/Header.scss";
import logo from "../../assets/logoavdigital.webp";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Anthony Vaudeville - Dèveloppeur Web"
        className="logo-image"
        loading="eager"
      />
      <NavBar />
    </header>
  );
}

export default Header;
