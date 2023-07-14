import { useEffect } from "react";
import About from "../../components/About";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contact";
import NavBar from "../../components/NavBar/NavBar";
import { projects } from "../../utils/projects";
import Aos from "aos";
import "aos/dist/aos.css";
import Projects from "../Projects";
import "./landing.css";

const Landing = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="background min-h-screen py-10 px-3 sm:px-5">
        <div className="blur-bottom"></div>
        <div className="blur-top"></div>
        <div className="intro">
          <p>Hi All, I am</p>
          <div className="name">Tim Quattrochi</div>
          <div className="profession">Full-Stack developer</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
