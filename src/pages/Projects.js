import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import studyBoard from "../assets/studyBoard.png";
import chi from "../assets/chi.png";
import tpd from "../assets/tpd.png";
import tpd2 from "../assets/tpd2.png";
import tpd3 from "../assets/tpd3.png";
import guestBook from "../assets/guestBook.png";

const projects = [
  {
    name: "Total Product Development",
    image: tpd2,
    description: `TPD - Total Product Developers, is a Full-stack MERN application that was built as my capstone project during the 9 month full-stack MERN program at Kenzie Academy. I served as Quality Assurance, Developer, and also implemented user authentication using JWT access and refresh token strategy with an HTTP only cookie, and implemented full CRUD functionality with a user project submission form.

      I  enabled users to edit their own details and successfully deployed the application on an AWS EC2 instance. Throughout the 7 weeks of development, I gained hands-on experience in technologies such as React, Node.js, Express.js, Mongoose, MongoDB, bcrypt, dotenv and also learned to use JIRA as a project management tool. I am very proud of the work I put into this project and it is a great addition to my portfolio. I am excited to use the skills I acquired on future projects and as a future stretch goal, I would love to add an admin portal to manage projects on TPD.`,
    liveLink: "http://54.158.95.108/",
    gitHubLink: "https://github.com/Tim-Quattrochi/TPD",
  },
  {
    name: "Remembrance-Page",
    image: guestBook,
    description: `I created a Remembrance-Page for my brother Jerry who passed away in March of 2022. I built a guest book where users can log in with Google and make a guest book post, "Heart" other posts, view gallery with pop out modal and slide. The log in with Google utilizes Passport.js's Google oAuth2.0 strategy as a middleware and sessions and basic user info are stored in MongoDB. I wanted only authenticated users to be able to make a post, I originally implemented a register and sign in logic but it seems that most users won't create new accounts for simple apps. 
    
    I deployed this site to an AWS EC2 instance, The backend uses the Express framework and I am routing all traffic to HTTPS for extra protection`,
    liveLink: "https://www.jerrykrikava.com",
    gitHubLink: "https://github.com/Tim-Quattrochi/Remembrance-Page",
  },

  {
    name: "Study Board",
    image: studyBoard,
    description: ` We envisioned an "accountability" app for users to compare
          their study statistics with other 100Dev peers. With the
          help of the MVC architecture, we were able to create an
          easily navigable environment. This led to more production
          and less asking of where certain code was located. 
          
          Passport was used for user authentication with bcrypt as a password
          "salter". When users log in and create an account, they're
          presented with a "create" button that sends a post request
          to the server, which is then routed to the DB where their
          "time" statistic is created. We then use these values in the
          leaderboard and divide the time to show hours, minutes, and
          seconds respectively.
          
          The timer itself contains two different functions. One is a constructor function that
          records the user's time and updates MongoDB every time it is
          stopped. The other function is a timer function that
          displays the elapsed time to the user directly.`,
    liveLink: null,
    gitHubLink:
      "https://github.com/Tim-Quattrochi/100devsleaderboard",
  },
];

function Projects() {
  return (
    <div className="p-4">
      <h1 className="text-3xl text-center font-medium text-gray-900 mb-4">
        My Projects
      </h1>
      <div className="flex flex-wrap">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            link={project.liveLink}
            link2={project.gitHubLink}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
