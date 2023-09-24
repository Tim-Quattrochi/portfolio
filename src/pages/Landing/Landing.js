import { useEffect } from "react";
import {
  Footer,
  NavBar,
  About,
  Card,
  Divider,
  Skills,
  SideContact,
} from "../../components";
import { projects } from "../../utils/projects";
import Aos from "aos";
import "aos/dist/aos.css";
import Projects from "../Projects";
import StarsCanvas from "../../components/Canvas/Stars";

const Landing = () => {
  useEffect(() => {
    Aos.init({
      once: false,
    });
  }, []);

  return (
    <>
      <NavBar />
      <SideContact />

      <div className="font-neueMachina min-h-screen pb-0 py-10 px-3 sm:px-5 bg-[#F5F5F5] dark:bg-dark-secondary-background">
        <div className="w-half bg-primary dark:bg-text-gray-dark py-10 rounded-lg">
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

        <Projects products={projects} />

        <div className="relative h-56 w-full">
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Landing;
