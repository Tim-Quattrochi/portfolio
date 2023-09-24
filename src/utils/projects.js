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
    description: `The online store allows users to search for and purchase products, add items to their wishlists, and edit their profile information. Admins can add, edit, and delete products and feature products on the main shop page. 
          
       `,
    liveLink: "https://the-n-t-collection.vercel.app/",
    gitHubLink:
      "https://github.com/Tim-Quattrochi/100devsleaderboard",
    tech: ["React", "Tailwind", "Node.js", "MongoDB", "Express"],
  },
  {
    name: "Total Product Dev",
    image: [tpd2, tpdTracker],
    description: `Total Product Development. I led the development and implementation of CRUD features for project proposals and user information. This resulted in a user-friendly platform with robust project management capabilities. I was responsible for constructing backend controllers, routes, and models for a MongoDB database, which ensured efficient data management and seamless integration with the front end.`,
    liveLink: "http://3.90.15.228/",
    gitHubLink: "https://github.com/Tim-Quattrochi/TPD",
    tech: ["React", "Tailwind", "Node", "MongoDB", "Express"],
  },
  {
    name: "Remembrance Page",
    image: [guestBook, rememPage2],
    description: `This web application serves as a memorial platform that allows users to register and access their accounts securely through JSON Web Tokens. The data storage and management system are facilitated by MongoDB, with Mongoose schema ensuring the accuracy and safety of all stored data. The user interface is designed using Bootstrap, CSS, and responsive web design principles, providing an engaging and easy-to-use experience.`,
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
