import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';

function ContactForm() {
  const form = useRef();

  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  console.log(form);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qr78vt8',
        'template_o52ua0t',
        form.current,
        publicKey
      )
      .then(
        (result) => {
          toast.success('Your email has been sent!');
        },
        (error) => {
          toast.error('Something went wrong..');
        }
      );
    e.target.reset();
  };
  return (
    <>
      <NavBar />
      <form
        ref={form}
        onSubmit={sendEmail}
        id="contactForm"
        className="w-full max-w-lg lg:mx-auto pt-20"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full border border-red rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white  focus:border-blue"
              id="grid-first-name"
              type="text"
              name="firstName"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white  focus:border-blue"
              id="grid-last-name"
              type="text"
              name="lastName"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue"
              id="email"
              type="email"
              name="email"
              required
            />
            <p className="text-gray-600 text-xs italic"></p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none  h-48 resize-none  focus:border-blue"
              id="message"
              name="message"
            ></textarea>
            <p className="text-gray-600 text-xs italic"></p>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3 ">
            <button
              className="shadow bg-blue hover:bg-gray focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "
              type="submit"
              value="Send"
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default ContactForm;
