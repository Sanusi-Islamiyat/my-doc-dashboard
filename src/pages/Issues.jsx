import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Card, Button } from "react-bootstrap";
import { Eye, CheckCircleFill, ClockFill } from "react-bootstrap-icons";
import "./Issues.css";

const contributionsSection1 = [
  {
    title: "Set Up Fedora Account System (FAS) Account",
    description: "I created and updated my Fedora Account System (FAS) — an essential step for joining the Fedora community. With it, It gave me the access I needed to contribute meaningfully and stay involved in ongoing projects and discussions",
    taskLink: "https://gitlab.com/fedora/dei/outreachy-internship/-/issues/1#note_2413656828",
    solutionLink: "https://accounts.fedoraproject.org/user/islamiyat/",
    status: "Approved",
    date: "2025-03-24",
  },
  {
    title: "Set Up Personal Blog",
    description: "I started a blog to document my Outreachy journey — sharing what I learn, how it’s going, and moments that matter. It’s my way of reflecting and connecting with others in open source.",
    taskLink: "https://gitlab.com/fedora/dei/outreachy-internship/-/issues/2#note_2414237664",
    solutionLink: "https://medium.com/@sanusiislamiyat125",
    status: "Approved",
    date: "2025-03-25",
  },
  {
    title: "Write a Blog Post Introducing the Fedora Community",
    description: "In this blog, I share how I went from exploring tech during a university strike to finding my footing as a developer — and how Fedora became more than just an operating system to me. Through Outreachy, I discovered Fedora’s welcoming community, powerful tools, and developer-first environment. This post is both a personal reflection and an open invitation to anyone curious about open source to explore Fedora and grow with it.",
    status: "Approved",
    taskLink: "https://gitlab.com/fedora/dei/outreachy-internship/-/issues/3#note_2417059393",
    solutionLink: "https://medium.com/@sanusiislamiyat125/from-finding-my-path-to-finding-my-tools-embracing-fedora-as-a-developer-ffa7ce7603ea",
    date: "2025-03-27",
  },
  {
    title: "Promote your Blog Post on Social Media",
    description: "I promoted my blog post on LinkedIn to share Fedora’s story with a wider audience. It’s not just about views — it’s about helping more people see what open source is really about, and how they can be part of it. Little by little, it’s how we grow awareness and community.",
    status: "Approved",
    taskLink: "https://gitlab.com/fedora/dei/outreachy-internship/-/issues/4#note_2421004908",
    solutionLink: "https://www.linkedin.com/posts/islamiyat-sanusi_fedora-linux-opensource-activity-7311106925268545537-6Lcp/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADz6lfABCvmwB5tp9tBt7fQswqm0Rd3qbAU",
    date: "2025-03-27",
  },
  {
    title: "Write an Onboarding Guide for Outreachy Applicants",
    description: "I put together an onboarding guide for Outreachy applicants to help them ease into the open-source world. It’s meant to be a simple, supportive starting point — something I wish I had when I began. The goal is to make their journey feel a little less overwhelming and a lot more welcoming.",
    status: "Approved",
    taskLink: "https://gitlab.com/fedora/dei/outreachy-internship/-/issues/5#note_2421902478",
    solutionLink: "https://medium.com/@sanusiislamiyat125/outreachy-unlocked-your-ultimate-guide-to-getting-in-5177dc5b3f8f",
    date: "2025-03-31",
  },
];

const contributionsSection2 = [
  {
    title: "Create a DEI Event Planning Guide",
    description: "Here I drafted a  guide to help create events where everyone feels welcome, valued, and heard. It offers practical steps to ensure diversity, equity, and inclusion are woven into every stage of your event—from planning and promotion to execution and follow-up.",
    status: "Approved",
    taskLink: "https://gitlab.com/fedora/dei/outreachy-internship/-/issues/6#note_2426795671",
    solutionLink: "https://medium.com/@sanusiislamiyat125/mastering-fedora-event-planning-a-guide-to-hosting-impactful-inclusive-events-6cf6fa1ead36",
    date: "2025-04-07",
  },
  
  {
    title: "Audit and Improvement Proposal of DEI Docs Page",
    description: "I reviewed the DEI docs page to spot gaps in clarity, accessibility, and inclusiveness. Then I put together a simple proposal with ideas to improve its structure, tone, and overall impact.",
    status: "Approved",
    taskLink: "https://gitlab.com/fedora/dei/outreachy-internship/-/issues/7#note_2438660032",
    solutionLink: "https://docs.google.com/document/d/1czktsAqEcZR7UwO5yUTxwMqKoHSAJ--dt9AQUsHM9ZE/edit?tab=t.0",
    date: "2025-04-10",
  },
  {
    title: "Create a High-level Timeline for Your Outreachy Application",
    description: "I mapped out a high-level timeline for my Outreachy application to stay focused and intentional. It outlines key phases like onboarding, contribution period, proposal drafting, and community engagement — helping me track progress and stay aligned with my goals throughout the process.",
    status: "Pending",
    taskLink: "#",
    solutionLink: "#",
  
  },

  
];



const Issues = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const renderCard = (item, index) => (
    <Card
      key={index}
      className="mb-4 shadow-sm animate__animated animate__fadeInUp contribution-card border-0"
      data-aos="fade-up"
    >
      <Card.Body>
        <Card.Title className="fw-bold mb-2">{item.title}</Card.Title>
        <Card.Text className="mb-3">{item.description}</Card.Text>

        {/* Buttons side-by-side */}
        <div className="d-flex justify-content-start gap-2 butt-ons">
          <Button className="task" size="sm" href={item.taskLink} target="_blank">
            <Eye className="me-1" /> Task
          </Button>

          <Button className="solution" size="sm" href={item.solutionLink} target="_blank">
            <Eye className="me-1" /> Solution
          </Button>
        </div>

        {/* Status with icon and optional date */}
      <div className="d-flex align-items-center gap-2 text-muted approved">
        {item.status === "Approved" ? (
          <>
            <CheckCircleFill className="text-success" size={16} />
            <span className="fw-medium text-success">
              {item.status}
              {item.date ? ` • ${item.date}` : ""}
            </span>
          </>
        ) : (
          <>
            <ClockFill className="text-warning" size={16} />
            <span className="fw-medium text-warning">{item.status}</span>
          </>
        )}
      </div>
      </Card.Body>
    </Card>
  );

  return (
    <div className="issues-page">
      {/* Title Section */}
      <section className="issues-title-section" data-aos="fade-down">
        <Container className="py-5 text-center">
          <Card className="p-4 shadow intro-card text-white">
            <Card.Body>
              <h1 className="mb-3">Issues Documentation</h1>
              <p className="lead text-light opacity-75">
              This page highlights the issues I’ve worked on—ranging from essential prerequisites to more advanced contributions. 
              Each entry is carefully documented shows its status and links to both the original task and solution.
              </p>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Section 1: 5 Cards */}
      <section className="issues-cards-section">
        <Container className="py-4 pre-r">
        <h3 className="mb-3 pre-p">Prerequsite Issues</h3>
          {contributionsSection1.map((item, idx) => renderCard(item, idx))}
        </Container>
      </section>

      {/* Section 2: 6 Cards */}
      <section className="issues-cards-section">
        <Container className="py-4 adv-issues">
        <h3 className="mb-3 adv-p">Advanced Issues </h3>
          {contributionsSection2.map((item, idx) => renderCard(item, idx))}
        </Container>
      </section>
    </div>
  );
};

export default Issues;
