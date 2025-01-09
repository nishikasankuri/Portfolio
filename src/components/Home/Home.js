import { Link } from "react-scroll";
import React, { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useSpring, animated } from "react-spring";
import {ThemeContext} from '../../App';
import "./Home.css";
import CIcon from '@coreui/icons-react';
import {cibLeetcode} from '@coreui/icons';
import myImage from '../../assets/my_image.png.jpg';

const loadFontAwesome = () => {
  const link = document.createElement("link");
  link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

const Home = () => {

  const resumeLink = () => {
    window.open('https://drive.google.com/file/d/1vn7obYupMEJHJMb5jg-9BeO5VZN_O0XL/view?usp=sharing', '_blank');
  };

  React.useEffect(() => {
    loadFontAwesome();
  }, []);

  const props = useSpring({
    from: { transform: "translateY(50px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: { duration: 1000 },
  });

  const {theme} = useContext(ThemeContext);
  return (
    <div className="home">
      
      <div className="home-content">
        <div className="home-text">
          <animated.h1 style={props} className="name">
            Nishika Sankuri
          </animated.h1>
          <h2>
            <Typewriter
              words={[
                "Software Engineer Intern : AI/ML",
                "Assistant System Engineer ",
                "Graduate Computer Science Student",
                "Tutor"
              ]}
              loop={1}
              cursor
              cursorStyle=""
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p>
          I’m a Computer Science graduate student at Wright State University with expertise in AI/ML and full-stack development. I’m passionate about solving complex problems, building impactful solutions, and exploring innovative technologies. 
          <br /> <br/>
          Explore my work and let’s connect!
          </p>
          <div className="button-container">
            <Link to="about" smooth={true} duration={500} className={`more-button ${theme}`}>Get to Know Me!</Link>
            <button onClick={resumeLink} className={`resume-button ${theme}`}> Download Resume </button>
          </div>
          <div className="icon-container">
            <a href="mailto:sankurinishika2000@gmail.com" className="icon-link" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/nishika-sankuri/" className="icon-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/nishikasankuri" className="icon-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="round-image-container">
          <div className="round-image-border"></div>
          <img src={myImage} alt="my_image" className="round_image"/>
        </div>
      </div>
    </div>
  );
};

export default Home;