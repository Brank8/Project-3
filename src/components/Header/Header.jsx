import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { SlArrowDown } from "react-icons/sl";
import { SiNba } from "react-icons/si";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <header className="fixed top-2 left-1/2 transform -translate-x-1/2 w-5/6">
      <nav className="flex justify-between items-center border-4 border-white bg-red-600 text-white font-semibold rounded-lg">
      <Link to="/" className="p-3 hover:bg-red-800 cursor-pointer rounded-lg flex items-center"><SiNba /><span>Home</span></Link>
        <Link to="/searchPlayer" className="p-3 hover:bg-red-800 cursor-pointer rounded-lg flex items-center">Player <FaSearch className="ml-1"/></Link>
        <Link to="/searchTeam" className="p-3 hover:bg-red-800 cursor-pointer rounded-lg flex items-center">Team<FaSearch className="ml-1"/></Link>
        <div className="relative group">
          <button className="flex items-center p-3 hover:bg-red-800 rounded-lg">
            Contact Me
            <SlArrowDown className="ml-1" />
          </button>
          <div className="absolute hidden group-hover:flex flex-col bg-white rounded-md shadow-lg min-w-max w-full">
            <a href="https://www.linkedin.com/in/brankostanisic" target="_blank" rel="noopener noreferrer" className="p-2 text-black hover:bg-gray-200">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            <a href="https://www.github.com/brank8" target="_blank" rel="noopener noreferrer" className="p-2 text-black hover:bg-gray-200">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a href="mailto:branko.stanisic02@gmail.com" target="_blank" rel="noopener noreferrer" className="p-2 text-black hover:bg-gray-200">
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;