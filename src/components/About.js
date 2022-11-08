import ScrollIntoView from 'react-scroll-into-view';
import { FaChevronDown } from 'react-icons/fa';

function About() {
  return (
    <div className="max-w-4xl mt-20 mx-auto">
      <p className="text-2xl text-black md:text-4xl font-bold text-center">
        Hey 🤙
      </p>
      <p className="text-base sm:text-xl text-center text-gray leading-relaxed mt-4">
        I am a passionate Software Developer. I love coding. More text
        will be written here soon.
      </p>

      <ScrollIntoView selector="#tech">
        <div className="mx-auto p-20">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default About;
