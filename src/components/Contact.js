import ScrollIntoView from "react-scroll-into-view";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowAltCircleUp } from "react-icons/fa";
import Divider from "./Divider";

function Contact() {
  return (
    <div className="max-w-lg w-full text-center m-auto pt-36 pb-10">
      <Divider text="Contacts" />
      <Link to="/contact">
        <span className="mt-6 inline-block w-auto bg-black font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer">
          <div className="flex flex-row items-center">
            <span className="mr-3">Get in Touch</span>
            <FaArrowRight color="blue" />
          </div>
        </span>
      </Link>
    </div>
  );
}

export default Contact;
