// About.jsx
import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container className="about-container">
      <h1>About Me</h1>
      <p>I'm a passionate React developer with 2+ years of experience in building web apps.</p>
      <h3>Skills</h3>
      <ul>
        <li>React</li>
        <li>JavaScript (ES6+)</li>
        <li>HTML & CSS</li>
        <li>Node.js</li>
        <li>React Router</li>
        <li>Responsive Design</li>
      </ul>
      <h3>Experience</h3>
      <p>I have worked on numerous projects involving front-end development and creating interactive UIs.</p>
    </Container>
  );
};

export default About;
