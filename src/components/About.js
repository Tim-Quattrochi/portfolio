import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";

function About() {
  return (
    <>
      <p className="text-2xl md:text-4xl font-bold text-center text-white bg-blue-600 py-2 px-4 md:py-4 md:px-6 border border-solid border-black hover:text-opacity-90 hover:bg-opacity-90">
        Welcome! 🤙
      </p>
      <p className=" text-xl text-white leading-relaxed md:leading-loose mt-4 my-2 mx-4 md:my-4 md:mx-6 ">
        Greetings, I am Tim, a seasoned full-stack developer. My
        passion for both front-end and back-end work is unparalleled,
        as I live and breathe coding from inception to completion.
        During my free time, I recharge by taking leisurely walks
        alongside my loyal Dalmatian companion and beautiful Wife.
        Let's join forces and craft something truly unique together!
      </p>
      <ScrollIntoView selector="#tech">
        <div className="mx-auto p-10 mt-8">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-white" />
        </div>
      </ScrollIntoView>
    </>
  );
}

export default About;
