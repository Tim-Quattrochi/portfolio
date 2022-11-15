import ScrollIntoView from 'react-scroll-into-view';
import { FaChevronDown } from 'react-icons/fa';

function About() {
  return (
    <div className="max-w-4xl mt-20 mx-auto">
      <p className="text-2xl text-black md:text-4xl font-bold text-center">
        Hey! 🤙
      </p>
      <p className="flex items-center text-base sm:text-xl text-center text-gray leading-relaxed ml-0 mt-4">
        I'm Tim. A Software Developer who loves full-stack
        development. Some pick a side, but I love both! I love
        planning, testing, deploying, and maintaining websites. I am
        coding all the time! In my downtime, I like to walk my
        dalmatian.
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
