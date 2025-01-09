import "./About.css";
import {animated, useSpring} from "react-spring";
import aboutGIF from './about.gif';
export default function About () {
  const props = useSpring({
    from: { transform: "translateY(50px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: { duration: 2000 },
  });
  return (
  <div className="about">
    <animated.h1 style={props}>Get to Know Me?</animated.h1>
    <div className="about-container">
      <div className="gif_image">
        <img src={aboutGIF} alt="Description of GIF" className="gif_image"/>
      </div>
    
      <div className="text">
        <animated.p style={props}>
        I'm currently pursuing Master's in Computer Science at Wright State University.
        Before this, I got my Bachelor's degree in Computer Science from Jawaharlal Nehru Technological University (July 2018 - July 2022).
        <br /> <br/>
        I love competitive programming and problem-solving, which have helped me think analytically and tackle tough challenges.
        <br/> <br/> 
        I'm also a strong team leader who believes in working together to get projects done successfully. I welcome new challenges and always prove my ability to overcome them!
        Get to know about my experience by scrolling to experience section! :)
        </animated.p>
        
      </div>
    </div>
  
  </div>
  );
};

