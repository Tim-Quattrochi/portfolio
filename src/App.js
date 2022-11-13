import { Routes, Route, Link } from 'react-router-dom';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Landing from './pages/Landing';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<Projects />} />

        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <h1>
                404: Page Error. Page not found. Please navigate back
                using one of the links above.
              </h1>
            </main>
          }
        />
      </Routes>
    </>
  );
};

export default App;
