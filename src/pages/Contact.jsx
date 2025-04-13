import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        `service_xuk1522`,
        `template_6sf8v3c`,
        formData,
        `RZvaiVXsr7fcZ2bsB`
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Try again later.");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <Container className="contact-container">
      <Row className="align-items-center g-6">
        <Col md={6}>
          <img
            src="/src/assets/Contact us-bro.png"
            alt="Contact illustration"
            className="contact-img"
          />
        </Col>
        <Col md={6}>
          <h1 className="cnt-me">Contact Me</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button className="sub-button" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>

    </Container>
  );
};

export default Contact;
