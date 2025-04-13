import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Issues from "./pages/Issues";
import Discussions from "./pages/Discussions";
import Contact from "./pages/Contact";
import AnimatedCursor from "react-animated-cursor";
import "./App.css";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="loading-screen d-flex justify-content-center align-items-center vh-100">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className="app-container">
          <AnimatedCursor
            innerSize={8}
            outerSize={30}
            color="255, 99, 71"
            outerAlpha={0.3}
            innerScale={1.2}
            outerScale={2}
          />

          <Container fluid className="p-0">
            <Row className="g-0">
              <Col
                xs={12}
                md={3}
                lg={2}
                className="sidebar-wrapper"
              >
                <Sidebar />
              </Col>

              <Col
                xs={12}
                md={9}
                lg={10}
                className="content-wrapper p-3"
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/issues" element={<Issues />} />
                  <Route path="/discussions" element={<Discussions />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </Router>
  );
};

export default App;
