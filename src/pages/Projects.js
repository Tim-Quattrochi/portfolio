import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import studyBoard from "../assets/studyBoard.png";
import chi from "../assets/chi.png";
import tpd from "../assets/tpd.png";
import tpd2 from "../assets/tpd2.png";
import tpd3 from "../assets/tpd3.png";

function Projects() {
  return (
    <div className="flex-col flex-wrap items-center container mx-auto">
      <NavBar />
      <div className="bg-white mx-auto rounded-lg overflow-hidden shadow-lg mt-4">
        <img
          src={tpd}
          alt="total product development screenshot"
          className="w-1/2 mx-auto"
        />
        <img
          src={tpd2}
          alt="total product development screenshot"
          className="w-1/2 mx-auto"
        />
        <img
          src={tpd3}
          alt="total product development screenshot"
          className="w-0.25 mx-auto"
        />
        <div className="px-6 py-4">
          <div className="font-medium text-lg mb-2">
            Total Product Developers
          </div>
          <p className="text-base">
            In summary, TPD - Total Product Developers, is a
            full-stack MERN application that was built as my capstone
            project during the 9 month full-stack MERN program at
            Kenzie Academy. I served as Quality Assurance and also
            implemented user authentication using JWT access and
            refresh token strategy with an HTTP only cookie, and
            implemented full CRUD functionality with a user project
            submission form. Additionally, I was able to enable users
            to edit their own details and successfully deployed the
            application on an AWS ec2 instance. Throughout the 7 weeks
            of development, I gained hands-on experience in
            technologies such as React, Node.js, Express.js, Mongoose,
            Passport, MongoDB, bcrypt, dotenv and also learned to use
            JIRA as a project management tool. I am very proud of the
            work I put into this project and it is a great addition to
            my portfolio. I am excited to use the skills I acquired on
            future projects and as a future stretch goal, I would love
            to add an admin portal to manage projects on TPD.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray rounded-full px-3 py-1 text-sm font-medium mr-2">
            Tech used: React, Express, Node, MongoDB, Tailwind css.
          </span>
          <a
            href="https://github.com/Tim-Quattrochi/TPD"
            target="_blank"
            rel="noreferrer"
            className=" underline text-blue hover:text-gray visited:text-purple m-2"
          >
            Link to Repo
          </a>
          <a
            href="http://54.158.95.108/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue hover:text-gray visited:text-purple"
          >
            Link to live site
          </a>
        </div>
      </div>
      <div className="bg-white mx-auto rounded-lg overflow-hidden shadow-lg mt-4">
        <img
          className="h-full w-1/2 mt-8 mx-auto shadow sh-auto rounded-lg"
          src={studyBoard}
          alt="study board project"
        />
        <p className="inline-block bg-gray rounded-full px-3 py-1 text-sm font-medium mr-2">
          Tech used: HTML, CSS, JavaScript
        </p>
        <figcaption className="mt-2 text-lg text-justify ">
          {" "}
          We envisioned an "accountability" app for users to compare
          their study statistics with other 100Dev peers. With the
          help of the MVC architecture, we were able to create an
          easily navigable environment. This led to more production
          and less asking of where certain code was located. Passport
          was used for user authentication with bcrypt as a password
          "salter". When users log in and create an account, they're
          presented with a "create" button that sends a post request
          to the server, which is then routed to the DB where their
          "time" statistic is created. We then use these values in the
          leaderboard and divide the time to show hours, minutes, and
          seconds respectively. The timer itself contains two
          different functions. One is a constructor function that
          records the user's time and updates MongoDB every time it is
          stopped. The other function is a timer function that
          displays the elapsed time to the user directly.{" "}
          <a
            className="underline text-blue hover:text-gray visited:text-purple"
            href="https://github.com/Tim-Quattrochi/100devsleaderboard"
            target="_blank"
            rel="noreferrer"
          >
            Link to Repo
          </a>
        </figcaption>
      </div>

      <div className="bg-white mx-auto rounded-lg overflow-hidden shadow-lg mt-4">
        <img
          className="bg-white w-6/12 h-1/2 sm:w-4/12 px-4 mx-auto rounded-lg overflow-hidden shadow-lg mt-4"
          src={chi}
          alt="chihuahua"
        />
        <p className="inline-block bg-gray rounded-full px-3 py-1 text-sm font-medium mr-2">
          Tech used: HTML5, CSS3, , JavaScript, Fetch API
        </p>{" "}
        <p className="mt-2">
          I made this simple application to learn about consuming
          API's. I used{" "}
          <a
            className="span underline text-blue hover:text-gray visited:text-purple"
            href="https://dog.ceo/dog-api/"
            target="_blank"
            rel="noreferrer"
          >
            Dog.ceo
          </a>{" "}
          as my API to fetch a random picture of a Chihuahua on every
          click. I learned how to read API documentation. One of the
          challenges I faced was the image sizes being served by the
          API. Since the image sizes are random, I had to have a way
          to handle each image so that they were not overly large on
          mobile devices. The simplest way I decided to handle the
          image sizes at the time were with media queries using plain
          CSS.
        </p>
        <p className="pt-2">
          This project was meant to be simple. Some features I would
          add are some more user interactivity, a dog count, random
          quotes.
        </p>
        {""}
        <a
          className="grid place-items-center underline text-blue hover:text-gray visited:text-purple"
          href="https://ilovechis.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Link to live site
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
