import "./skills.scss";
import Bulle from "../Bublle/Bulle";
import skillsData from "../../data/skills.json";

function Skills() {
  return (
    <section className="skills-container" id="skills">
      <h2 className="skills-title">Compétences</h2>
      <div className="skills-bubbles">
        {skillsData.map((skill, index) => (
          <Bulle
            key={skill.name}
            name={skill.name}
            logo={skill.logo}
            delay={index * 0.2}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
