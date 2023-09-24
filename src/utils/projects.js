import { nt, tpd2, upfront, guestBook, timBlog } from "../assets";
import {
  rememPage2,
  tpdTracker,
  upfrontSearch,
  upfrontSearch2,
} from "../assets/webp";

export const projects = [
  {
    name: "The N-T Collection",
    image: nt,
    description: `The online store allows users to search for and purchase products, add items to their wishlists, and edit their profile information. Admins can add, edit, and delete products and feature products on the main shop page. We implemented a feature where an admin can "feature" their product on the main page to be shown to the users upon entering the web site. This project demonstrates my ability to work on a team and collaborate effectively to achieve a common goal. 
          
       `,
    liveLink: "https://the-n-t-collection.vercel.app/",
    gitHubLink:
      "https://github.com/NathanielGrandinette/The-N-T-Collection",
    tech: ["React", "Tailwind", "Node.js", "MongoDB", "Express"],
  },
  {
    name: "Total Product Dev",
    image: [tpd2, tpdTracker],
    description: `During the final project of my program at Southern New Hampshire University, I led a team of two other skilled developers. We set out to create a user-friendly platform with robust project management features by implementing CRUD functionalities for project proposals and user information. My role involved crafting the backbone of the application, including backend controllers, routes, and models. We seamlessly integrated our system with a MongoDB database, ensuring efficient data flow and a smooth user experience on the frontend. This project exemplifies my ability to lead and collaborate effectively in a team, driving successful outcomes in a dynamic development environment.`,
    liveLink: "http://3.90.15.228/",
    gitHubLink: "https://github.com/Tim-Quattrochi/TPD",
    tech: ["React", "Tailwind", "Node", "MongoDB", "Express"],
  },
  {
    name: "Remembrance Page",
    image: [guestBook, rememPage2],
    description: `This web application serves as a memorial platform that allows users to register and access their accounts securely through a refresh and access token strategy. It also offers the user the ability to sign up with their Google Accounts using Google's Oauth. The data storage and management system are facilitated by MongoDB, with Mongoose schema ensuring the accuracy and safety of all stored data. The user interface is designed using Bootstrap, CSS, and responsive web design principles, providing an engaging and easy-to-use experience with custom graphics.`,
    liveLink: "https://www.jerrykrikava.com",
    gitHubLink: "https://github.com/Tim-Quattrochi/Remembrance-Page",
    tech: ["React", "Bootstrap", "Node", "MongoDB", "Express"],
  },

  {
    name: "Local Insights",
    image: [upfront, upfrontSearch2, upfrontSearch],
    description: `I developed a strong business review website using the MERN stack and adhered to best practices for clean code and architecture. I utilized Tailwind CSS to create a professional and responsive user interface. Additionally, I incorporated a dynamic feature that allows users to submit businesses and a feature-rich review system that allows for image uploads. To improve user experience, I implemented pagination and designed an easy-to-use user profile page for reviewing.
`,
    liveLink: "http://54.90.137.205/",
    gitHubLink:
      "https://github.com/Tim-Quattrochi/Upfront-Local-Insights",
    tech: ["React", "Tailwind", "Node", "MongoDB", "Express"],
  },

  {
    name: "Blog Talk",
    image: timBlog,
    description: `This Blog app lets users register, create, read, edit, and delete blog posts. It also has a profile section. This App was deployed manually to an AWS EC2 instance using the Ubuntu command line and setting up a proxy pass with NGINX to forward requests to the backend server, and using pm2 to keep it running. 
   `,
    liveLink: "http://3.89.98.155/",
    gitHubLink: "https://github.com/Tim-Quattrochi/tims-blog",
    tech: ["React", "Node", "MongoDB", "Express", "Bootstrap"],
  },
];
