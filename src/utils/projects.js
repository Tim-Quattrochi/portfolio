import { nt, tpd2, upfront, guestBook, studyBoard } from "../assets";

export const projects = [
  {
    name: "The N-T Collection",
    image: nt,
    description: `The online store allows users to search for and purchase products, add items to their wishlist, and edit their profile information. Admins can add, edit, and delete products, as well as feature products on the main shop page. 
          
       `,
    liveLink: "https://the-n-t-collection.vercel.app/",
    gitHubLink:
      "https://github.com/Tim-Quattrochi/100devsleaderboard",
    tech: ["React", "Tailwind", "Node.js", "MongoDB", "Express.js"],
  },
  {
    name: "Total Product Development",
    image: tpd2,
    description: `I took a leadership role in developing and implementing CRUD features for project proposals and user information. This resulted in a user-friendly platform with robust project management capabilities. I was responsible for constructing backend controllers, routes, and models for a MongoDB database. Which ensured efficient data management and a seamless integration with the front-end.`,
    liveLink: "http://3.90.15.228/",
    gitHubLink: "https://github.com/Tim-Quattrochi/TPD",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
  },
  {
    name: "Remembrance-Page",
    image: guestBook,
    description: `This memorial web app includes user registration using JSON Web Tokens for secure authentication and authorization. The data storage and management were implemented using MongoDB with Mongoose schema to ensure data integrity. The interface was designed using Bootstrap, CSS and responsive web design principles to create an attractive and user-friendly experience.`,
    liveLink: "https://www.jerrykrikava.com",
    gitHubLink: "https://github.com/Tim-Quattrochi/Remembrance-Page",
    tech: ["React", "Bootstrap", "Node.js", "MongoDB"],
  },

  {
    name: "Upfront Local Insights",
    image: upfront,
    description: `Created a robust business review website using the MERN stack, implementing best practices for clean code and architecture. Employed Tailwind CSS for a professional and responsive UI. Integrated a dynamic "submit a business" feature and a feature-rich review system with image uploads. Optimized user experience with pagination and designed an intuitive user profile page for review viewing.
`,
    liveLink: "http://54.90.137.205/",
    gitHubLink:
      "https://github.com/Tim-Quattrochi/Upfront-Local-Insights",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
  },

  {
    name: "Study Board",
    image: studyBoard,
    description: `an "accountability" app for users to compare their study statistics with other 100Dev peers. With the help of the MVC architecture, we were able to create an easily navigable environment. 
   `,
    liveLink: null,
    gitHubLink:
      "https://github.com/Tim-Quattrochi/100devsleaderboard",
    tech: ["EJS", "Node.js", "MongoDB"],
  },
];
