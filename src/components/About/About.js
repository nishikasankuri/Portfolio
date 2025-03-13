import "./About.css";
import {animated, useSpring} from "react-spring";
import yourPhoto from '../../assets/Nishika.JPG';
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
      <div className="profile_image">
        <img src={yourPhoto} alt="Nishika Sankuri" className="profile_imagee"/>
      </div>
    
      <div className="text">
        <animated.p style={props}>
        Hello! I’m Nishika, a tech enthusiast and lifelong learner, currently pursuing my Master’s in Computer Science at Wright State University. My academic journey began with a Bachelor’s degree in Computer Science from Jawaharlal Nehru Technological University, where my passion for technology and problem-solving took root.
        <br /> <br/>
        Over the years, I’ve honed my skills in software development, competitive programming, and innovative thinking. I enjoy breaking down complex challenges and crafting creative solutions that make a difference. Whether it's collaborating with a team or leading a project, I bring energy, adaptability, and a can-do attitude to the table.
        <br/> <br/> 
        When I’m not coding, you’ll find me exploring the intersection of creativity and technology, dabbling in design, or brainstorming new ideas to bring to life. Let’s connect, collaborate, and build something extraordinary together!
        </animated.p>
        
      </div>
    </div>
  
  </div>
  );
};

