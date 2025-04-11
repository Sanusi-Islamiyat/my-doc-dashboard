import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaProjectDiagram,
  FaInfoCircle,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaTicketAlt,
} from "react-icons/fa";
import { Button } from "react-bootstrap";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="mobile-toggle">
        <Button variant="outline-light" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </Button>
      </div>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img src="/src/assets/fedora_dark-background.png" alt="Your Profile" className="profile-img" />
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li><Link to="/" onClick={toggleSidebar}><FaHome /> Home</Link></li>
            <li><Link to="/issues" onClick={toggleSidebar}><FaTicketAlt /> Issues</Link></li>
            <li><Link to="/projects" onClick={toggleSidebar}><FaProjectDiagram /> Projects</Link></li>
            <li><Link to="/about" onClick={toggleSidebar}><FaInfoCircle /> About Me</Link></li>
            <li><Link to="/contact" onClick={toggleSidebar}><FaEnvelope /> Contact</Link></li>
          </ul>
        </nav>

      </div>
    </>
  );
};

export default Sidebar;
