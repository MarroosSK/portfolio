import { Hero, Title } from "../../components";
import About from "../../components/AboutMe/About";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  return (
    <>
      <Hero />
      <div id="about" className="flex flex-col items-center justify-center">
        <Title name="About" />
        <About />
      </div>
      <div id="projects">
        <Title name="Projects" />
        <Projects />
      </div>
      <div id="contact">
        <Title name="Contact" />
        <Contact />
      </div>
    </>
  );
};

export default Home;
