import React from 'react';
import EachProject from './EachProject';
import './Projects.css';
const projectsData = [
  {
    title: 'My Portfolio Using React',
    description: 'Developed a web application using ReactJS that retrieves the current weather data for the users current location or any location they search for, as well as the five-day weather forecast, including the locations minimum and maximum temperatures, humidity, and sky conditions (cloudy, clear, rainy, fog, and mist). ',
    techStack: ['HTML5', 'CSS3','JavaScript','ReactJS'],
    githubLink: 'https://github.com/nishikasankuri/Portfolio.git'
  },
  {
    title: 'My Weather App Using React',
    description: 'Developed a web application using ReactJS that retrieves the current weather data for the users current location or any location they search for, as well as the five-day weather forecast, including the locations minimum and maximum temperatures, humidity, and sky conditions (cloudy, clear, rainy, fog, and mist). ',
    techStack: ['HTML5', 'CSS3','JavaScript','ReactJS'],
    githubLink: 'https://github.com/nishikasankuri/weather.git'
  },
  {
    title: 'Smart Plant Recognition',
    description: 'Developed an app which detects the name of the plant, scientific name, along with the description of the plant from a photograph that student uploads. Used Angular framework (TypeScript/JS) and Django framework (Python) with HTML & CSS for Front End.',
    techStack: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'Angular', 'NodeJS'],
    githubLink: 'https://github.com/nishikasankuri/Phoenix.git'
  },
  {
    title: 'Suspicious Activity Detection',
    description: 'Used Machine Learning and Deep Learning Algorithms and techniques to convert video into frames and analyze the persons and their activities from the processed frame to detect which part of the videos contain the unusual activity which aid the faster judgement of the unusual activity being abnormal. y.',
    techStack: ['Deep Learning', 'Python', 'ML'],
    githubLink: ''
  },
  {
    title: 'Smart Waste Sorting: A Comparative Analysis of ML Algorithms',
    description: 'A Machine Learning project where waste is classified as organic or recyclable. Algorithms such as Logistic Regression, Decision Tree, K Nearest Neighbors (KNN), Naive Bayes, Random Forest, XGBoost, and Convolutional Neural Networks (CNN) are used to know which model performs better. As a result, XGBoost and CNN models outperform other algorithm models.',
    techStack: ['Logistic Regression', 'CNN Algorithm', 'KNN', ],
    githubLink: ''
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <EachProject
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;