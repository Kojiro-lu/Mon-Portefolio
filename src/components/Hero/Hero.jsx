import "./Hero.css";
import { motion } from "framer-motion";
import backgroundHero from "../../assets/images/fond-hero.webp";

function Hero() {
  return (
    <section className="hero">
      <img
        src={backgroundHero}
        alt="hero background"
        className="hero-background"
        loading="eager"
        aria-hidden="true"
      />
      <div className="hero-content">
        <motion.p
          className="hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bonjour !
        </motion.p>
        <motion.h1
          className="hero-subtitle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Je suis <strong>Anthony Vaudeville</strong>, Développeur Frontend.
        </motion.h1>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Bienvenue sur mon portfolio.
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;
