import "./about.css";
import AboutMoi from "../../assets/images/about-moi.jpg";

const About = () => {
  return (
    <>
      <section className="about-container">
        <div className="about-section">
          <div className="about-content">
            <h1 className="about-title">À propos de moi</h1>
            <h2>Intégrateur Web </h2>
            <p className="about-text">blablablablabla</p>
          </div>
          <div className="about-image-container">
            <img src={AboutMoi} alt="Moi" className="about-image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
