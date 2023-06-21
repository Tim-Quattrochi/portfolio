import ReactGA from "react-ga";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Landing from "./pages/Landing";
import { projects } from "./utils/projects";
import "aos/dist/aos.css";
import ContactForm from "./pages/ContactForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TRACKING_ID = "UA-257368782-1";
ReactGA.initialize(TRACKING_ID);

const App = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    ReactGA.pageview(
      window.location.pathname + window.location.search
    );
  }, []);
  return (
    <div className="bg-back-ground">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<Projects />} />

        <Route path="contact" element={<ContactForm />} />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <h1>
                404: Page Error. Page not found. Please navigate back
                using one of the links above.
              </h1>
            </main>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
