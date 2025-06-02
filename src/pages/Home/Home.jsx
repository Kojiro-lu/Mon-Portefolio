import "../Home/Home.css";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
}

export default Home;
