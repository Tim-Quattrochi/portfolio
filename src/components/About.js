import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";

function About() {
  return (
    <div className="max-w-4xl mt-20 mx-auto p-6 bg-primary rounded-lg shadow-lg">
      <p className="text-2xl md:text-4xl font-bold text-center text-white">
        Welcome! 🤙
      </p>
      <p className="text-base sm:text-xl text-center text-text leading-relaxed mt-4">
        Greetings! I'm Tim, a passionate Software Developer
        specializing in full-stack development. What sets me apart is
        my love for both front-end and back-end work. From meticulous
        planning to seamless deployment and maintenance, I find joy in
        every step of the coding journey. Even in my downtime, I
        recharge by enjoying leisurely walks with my loyal dalmatian
        companion. Let's connect and create something amazing
        together!
      </p>

      <ScrollIntoView selector="#tech">
        <div className="mx-auto p-10 mt-8">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-white" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default About;
