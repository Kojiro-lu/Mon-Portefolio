// src/components/Skills/Bulle.jsx
import { motion } from "framer-motion";
import "./Bulle.scss";

function importLogo(name) {
  return new URL(`../../assets/icons-techno/${name}`, import.meta.url).href;
}

const Bulle = ({ name, logo, delay = 0 }) => {
  return (
    <motion.div
      className="bulle"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
    >
      <img src={importLogo(logo)} alt={name} />
      <p>{name}</p>
    </motion.div>
  );
};

export default Bulle;
