import "./skills.scss";
import { motion } from "framer-motion";
import skillsData from "../../data/skills.json";

function importLogo(name) {
  return new URL(`../../assets/icons-techno/${name}`, import.meta.url).href;
}

function Skills() {
  return (
    <section className="skills-container" id="skills">
      <h2 className="skills-title">Compétences</h2>
      <div className="skills-bubbles">
        {skillsData.map((skill, index) => (
          <motion.div
            className="skill-bubble"
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <img src={importLogo(skill.logo)} alt={skill.name} />
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
