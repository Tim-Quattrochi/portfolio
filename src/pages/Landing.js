import { useEffect } from "react";
import About from "../components/About";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar/NavBar";
import { projects } from "../utils/projects";
import Aos from "aos";
import "aos/dist/aos.css";
import Projects from "./Projects";

const Landing = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
        <div data-aos="fade-down" data-aos-duration="800">
          <Card />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <About />
        </div>

        <Skills />
        <Projects products={projects} />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
