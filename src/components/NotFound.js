import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-light">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
          404 - Not Found
        </h1>
        <p className="text-lg md:text-xl text-gray-dark mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <button
          className="bg-secondary hover:bg-accent text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
          onClick={handleGoBack}
        >
          Go Back
        </button>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
