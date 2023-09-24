import ReactGA from "react-ga";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume/Resume";
import Landing from "./pages/Landing/Landing";
import NotFound from "./components/NotFound";
import "aos/dist/aos.css";
import ContactForm from "./pages/ContactForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TRACKING_ID = "UA-257368782-1";
ReactGA.initialize(TRACKING_ID);

const App = () => {
  useEffect(() => {
    ReactGA.pageview(
      window.location.pathname + window.location.search
    );
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<Projects />} />

        <Route path="contact" element={<ContactForm />} />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <NotFound />
            </main>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
