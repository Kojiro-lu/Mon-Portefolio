import "./about.css";
import AboutMoi from "../../assets/images/about-moi.webp";

function About() {
  return (
    <section className="about-container" id="about">
      <div className="about-section">
        <div className="about-content">
          <h1 className="about-title">À propos de moi</h1>
          <h2 className="about-subtitle">Intégrateur Web</h2>
          <p className="about-text">
            Passionné par le web et spécialisé dans l'intégration front-end, je
            transforme vos maquettes en sites web modernes, rapides et
            accessibles. À l'écoute de vos besoins, je mets un point d'honneur à
            créer des interfaces claires, esthétiques et efficaces, pour offrir
            à vos utilisateurs une expérience optimale. Mon objectif : vous
            accompagner dans la réalisation de votre projet digital, avec
            rigueur, créativité et réactivité.
          </p>
        </div>
        <div className="about-image-container">
          <img src={AboutMoi} alt="Portrait de moi" className="about-image" />
        </div>
      </div>
    </section>
  );
}

export default About;
