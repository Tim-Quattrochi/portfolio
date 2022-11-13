import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function ContactForm() {
  return (
    <>
      <NavBar />
      <form className="w-full max-w-lg lg:mx-auto pt-20">
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
            ></textarea>
            <p className="text-gray-600 text-xs italic"></p>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3 ">
            <button
              className="shadow bg-blue hover:bg-gray focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "
              type="button"
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
