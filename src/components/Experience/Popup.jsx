import React from "react";
import "./Popup.css";

export default function Popup({ experience, onClose }) {
  if (!experience) return null;

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h3>{experience.role}</h3>
        <strong>Responsibilities</strong>
        <ul className="custom-list">
          {experience.responsibilities.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}