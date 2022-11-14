import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import studyBoard from '../assets/studyBoard.png';
import chi from '../assets/chi.png';

function Projects() {
  return (
    <>
      <NavBar />
      <figure className="flex-col pt-3 max-w-lg  mx-auto">
        <img
          className="max-w-full shadow sh-auto rounded-lg"
          src={studyBoard}
          alt="study board project"
        />
        <p className="font-bold text-center text-sm">
          Tech used: HTML, CSS, JavaScript
        </p>
        <figcaption className="mt-2 text-sm text-justify ">
          {' '}
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
          displays the elapsed time to the user directly.{' '}
          <a
            className="underline text-blue hover:text-gray visited:text-purple"
            href="https://github.com/Tim-Quattrochi/100devsleaderboard"
            target="_blank"
            rel="noreferrer"
          >
            Link to Repo
          </a>
        </figcaption>
        <img
          className=" w-6/12 sm:w-4/12 px-4 mx-auto mt-5"
          src={chi}
          alt="chihuahua"
        />
        <p className="font-bold text-center text-sm ">
          Tech used: HTML5, CSS3, , JavaScript, Fetch API
        </p>{' '}
        <p className="mt-2">
          I made this simple application to learn about consuming
          API's. I used{' '}
          <a
            className="span underline text-blue hover:text-gray visited:text-purple"
            href="https://dog.ceo/dog-api/"
            target="_blank"
            rel="noreferrer"
          >
            Dog.ceo
          </a>{' '}
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
        {''}
        <a
          className="grid place-items-center underline text-blue hover:text-gray visited:text-purple"
          href="https://ilovechis.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Link to live site
        </a>
      </figure>

      <Footer />
    </>
  );
}

export default Projects;
