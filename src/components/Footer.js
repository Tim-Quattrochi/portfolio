import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
        <a
          href="https://github.com/Tim-Quattrochi"
          target="_blank"
          rel="noreferrer"
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray hover:bg-gray rounded-full hover:text-yellow transition-colors duration-300"
        >
          <FaGithub />
          <span className="sr-only">Github</span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue hover:bg-gray rounded-full hover:text-white transition-colors duration-300"
          href="https://github.com/Tim-Quattrochi"
        >
          <FaTwitter />
          <span className="sr-only">Github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/timquattrochi/"
          target="_blank"
          rel="noreferrer"
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue hover:bg-gray rounded-full hover:text-white transition-colors duration-300"
        >
          <FaLinkedinIn />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="mailto:timq82@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-green hover:bg-gray rounded-full hover:text-green transition-colors duration-300"
        >
          <FaEnvelope />
          <span className="sr-only">Email</span>
        </a>
      </div>
      <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
          Made with{' '}
          <span className='mr-2 role="link" aria-label="heart" '>
            💙
          </span>
          by{' '}
          <a
            className="text-blue hover:underline"
            href="mailto:timq82@gmail.com"
          >
            Tim Quattrochi
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
