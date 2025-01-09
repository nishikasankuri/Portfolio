import { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from '../../App';
import ReactSwitch from 'react-switch';
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggle } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <div className="theme-switch-container">
        <span className="theme-text">Light Mode</span>
        <ReactSwitch 
          onChange={toggle} 
          checked={theme === "dark"} 
          offColor="#bbb"
          onColor="#333"
          className="theme-switch"
        />
        <span className="theme-text">Dark Mode</span>
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
            onClick={toggleMenu}
            className="neon-button"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
            onClick={toggleMenu}
            className="neon-button"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
            onClick={toggleMenu}
            className="neon-button"
          >
            Experience
          </Link>
        </li>
        
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
            onClick={toggleMenu}
            className="neon-button"
          >
            Projects
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default NavBar;