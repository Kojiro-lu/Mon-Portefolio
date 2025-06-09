import "./about.scss";
import AboutMoi from "../../assets/images/about-moi.webp";

function About() {
  return (
    <section className="about-container" id="about">
      <div className="about-section">
        <div className="about-content">
          <h2 className="about-title">À propos de moi</h2>
          <h3 className="about-subtitle">Développeur Front-end</h3>
          <p className="about-text">
            Passionné par le web et spécialisé dans le développement de sites et
            applications, j’ai suivi la formation d’intégrateur web afin
            d’acquérir des bases solides en HTML, CSS, JavaScript, accessibilité
            et responsive design. Je transforme vos maquettes en sites web
            modernes, rapides et accessibles. À l’écoute de vos besoins, je mets
            un point d’honneur à créer des interfaces claires, esthétiques et
            efficaces, pour offrir à vos utilisateurs une expérience optimale.
            Mon objectif : vous accompagner dans la réalisation de votre projet
            digital, avec rigueur, créativité et réactivité.
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
