// Projects.jsx
import React from "react";
import { Card, Button } from "react-bootstrap";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-card">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="project-image1.jpg" />
          <Card.Body>
            <Card.Title>Project 1</Card.Title>
            <Card.Text>
              A React app built with Vite, showcasing my ability to create modern web apps.
            </Card.Text>
            <Button variant="primary" href="https://project1-link.com" target="_blank">View Project</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="project-card">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="project-image2.jpg" />
          <Card.Body>
            <Card.Title>Project 2</Card.Title>
            <Card.Text>
              A portfolio site built with React and Vite.
            </Card.Text>
            <Button variant="primary" href="https://project2-link.com" target="_blank">View Project</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
