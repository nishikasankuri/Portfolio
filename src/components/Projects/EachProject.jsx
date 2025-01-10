import React, { useContext } from 'react';
import { FaReact, FaHtml5, FaCss3Alt,FaNodeJs, FaJsSquare, FaBrain, FaNetworkWired, FaAngular } from 'react-icons/fa';
import { SiSolidity ,SiPython } from 'react-icons/si'
import './Projects.css';
import { ThemeContext } from '../../App';

const icons = {
  ReactJS: <FaReact />,
  JavaScript: <FaJsSquare />,
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  Solidity: <SiSolidity/>,
  MachineLearning: <FaBrain />, 
  BlockChain: <FaNetworkWired/>,
  Python: <SiPython/>,
  Angular: <FaAngular/>,
  NodeJS: <FaNodeJs/>
};

const EachProject = ({ title, description, techStack, githubLink }) => {

  const {theme} = useContext(ThemeContext);
  return (
    <div className={`project ${theme}`}>
      <div className="tech-stack">
        <div className="icons">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-icon" title={tech}>
              {icons[tech]}
            </span>
          ))}
        </div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={githubLink} className={`link-button ${theme}`} target="_blank" rel="noopener noreferrer">
        GitHub Link
      </a>
    </div>
  );
};

export default EachProject;