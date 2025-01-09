import React, { useContext, useState } from "react";
import experienceList from "./experienceData";
import "./Experience.css";
import Popup from "./Popup";
import {ThemeContext} from "../../App";

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const {theme} = useContext(ThemeContext);
  const handleLearnMoreClick = (exp) => {
    setSelectedExperience(exp);
  };

  const handleClosePopup = () => {
    setSelectedExperience(null);
  };

  return (
    <div className="experience">
      <h1>Experience</h1>
      <div className="flashcard-container">
        {experienceList.map((exp) => (
          <div
            key={exp.id}
            className={`flashcard ${exp.id % 2 === 0 ? "right" : "left"} ${theme}`}
          >
            <h3>{exp.role}</h3>
            <img src={exp.logo} alt="Logo" className="flashcard-logo" />
            <p>{exp.duration}</p>
            <p>{exp.shortdescription}</p>
            <button onClick={() => handleLearnMoreClick(exp)} className="more-button">
              View Details!
            </button>
          </div>
        ))}
      </div>
      <Popup experience={selectedExperience} onClose={handleClosePopup} />
    </div>
  );
}

