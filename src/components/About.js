import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";

function About() {
  return (
    <section>
      <p className="text-2xl md:text-4xl font-bold text-center text-white bg-gradient-to-r from-primary to-secondary py-2 px-4 md:py-4 md:px-6 border border-solid border-black hover:text-opacity-90 hover:bg-opacity-90 rounded-lg shadow-lg dark:bg-dark-background dark:text-dark-primary-text dark:from-dark-primary dark:to-dark-secondary">
        Welcome! 🤙
      </p>
      <p className="text-base text-left text-white lg:text-justify leading-relaxed md:leading-loose mt-4 my-4 mx-4 md:my-4 md:mx-6 dark:text-dark-primary-text whitespace-pre-line">
        Hello, I'm Tim, a seasoned full-stack developer deeply
        passionate about both front-end and back-end development. My
        coding journey is a continuous exploration, from project
        inception to the final product. In my downtime, I enjoy
        leisurely walks with my loyal Dalmatian companion and spending
        quality time with my beloved wife. I'm excited about the
        opportunity of joining a dynamic team of developers and
        contributing to the realization of our shared vision.
      </p>
      <ScrollIntoView selector="#tech">
        <div className="mx-auto p-10 mt-8">
          <FaChevronDown
            className="animate-bounce mx-auto text-3xl text-white dark:text-dark-information"
            size={34}
          />
        </div>
      </ScrollIntoView>
    </section>
  );
}

export default About;
