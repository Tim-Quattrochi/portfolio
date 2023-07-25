import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_qr78vt8",
        "template_o52ua0t",
        form.current,
        publicKey
      )
      .then(
        (result) => {
          toast.success("Your email has been sent!");
          form.current.reset();
        },
        (error) => {
          toast.error("Something went wrong..");
        }
      )
      .finally(() => setIsSubmitting(false));
  };
  return (
    <div className="font-neueMachina min-h-screen  ">
      <NavBar />
      <div className="max-w-sm md:max-w-md mx-auto py-12 my-20 bg-gradient-to-r from-primary to-secondary rounded-2xl">
        <h2 className="text-2xl text-white font-bold text-center mb-2">
          Contact Me
        </h2>
        <form ref={form} onSubmit={sendEmail} className="p-5">
          <div className="mb-6">
            <input
              className="appearance-none block w-full bg-white text-text border border-gray-dark rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
          </div>
          <div className="mb-6">
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-dark rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="mb-6">
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-text-gray-dark rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline resize-none"
              name="message"
              placeholder="Message"
              rows="6"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="inline-block w-full px-4 py-3 mt-6 font-bold text-white bg-primary rounded hover:bg-secondary focus:outline-none focus:bg-blue-600"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
      <div className="mt-42 md:mt-48 ">
        <Footer />
      </div>
    </div>
  );
}

export default ContactForm;
