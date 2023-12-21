import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { SlArrowDown } from "react-icons/sl";
import { SiNba } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

function Header() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-30 w-full transform px-1 bg-opacity-90 shadow-lg transition duration-700 ease-out ${
        isMounted ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav className="flex justify-between items-center bg-gray-800 border border-gray-700 text-white text-sm rounded-lg py-1 my-1">
        <Link
          to="/"
          className="p-2 hover:bg-gray-700 cursor-pointer rounded flex items-center space-x-1"
        >
          <SiNba className="text-yellow-400" />
          Home
        </Link>
        <Link
          to="/searchPlayer"
          className="p-2 hover:bg-gray-700 cursor-pointer rounded flex items-center space-x-1"
        >
          <span>Player</span>
          <FaSearch className="transition-transform duration-300 ease-in-out hover:rotate-180" />
        </Link>
        <Link
          to="/searchTeam"
          className="p-2 hover:bg-gray-700 cursor-pointer rounded flex items-center space-x-1"
        >
          <span>Team</span>
          <FaSearch className="transition-transform duration-300 ease-in-out hover:rotate-180" />
        </Link>
        <div className="relative group">
          <button className="flex items-center p-2 hover:bg-gray-700 rounded space-x-1">
            <span>Contact Me</span>
            <SlArrowDown />
          </button>
          <div className="absolute hidden group-hover:flex flex-col bg-white rounded-md shadow-lg min-w-max w-full z-30">
            <a
              href="https://www.linkedin.com/in/brankostanisic"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            <a
              href="https://www.github.com/brank8"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-black hover:bg-black hover:text-white"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a
              href="mailto:branko.stanisic02@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-red-600 hover:bg-red-600 hover:text-white"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
