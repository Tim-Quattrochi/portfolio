import Landing from '../src/components/Landing';
import About from './components/About';
import Card from './components/Card';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <Card />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
