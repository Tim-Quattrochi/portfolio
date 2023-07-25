import { useEffect } from "react";
import About from "../../components/About";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Skills from "../../components/Skills/Skills";
import NavBar from "../../components/NavBar/NavBar";
import { projects } from "../../utils/projects";
import Aos from "aos";
import Divider from "../../components/Divider";
import "aos/dist/aos.css";
import Projects from "../Projects";

const Landing = () => {
  useEffect(() => {
    Aos.init({
      once: false,
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="font-neueMachina min-h-screen pb-0 py-10 px-3 sm:px-5 bg-[#F5F5F5]">
        <div className="w-half bg-primary py-10 rounded-lg">
          <div data-aos="fade-down" data-aos-duration="800">
            <Card />
          </div>
        </div>
        <Divider text="About Me" />

        <div className="max-w-4xl mt-20 mx-auto p-6 bg-primary rounded-lg shadow-lg">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <About />
          </div>
        </div>
        <Divider text="Technology" />
        <div
          data-aos="flip-left"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <Skills />
        </div>
        <Divider text="Projects" />
        <div
          data-aos="zoom-out-right"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          <Projects products={projects} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Landing;
