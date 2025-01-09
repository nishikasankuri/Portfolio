import React, { useState } from "react";
import "./Skills.css";
import frontEndList from './skillsData.js';

const Skills = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="skills-container">
      <h1> Skills</h1>
      <div
        className={`skills-marquee ${isPaused ? "paused" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="skills-category">
          {frontEndList.map((skill, index) => (
            <div key={index} className='skills-card'>
              <img src= {skill.logo} alt={skill.name}></img>
              <p className='skills-card-text'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
};

export default Skills;