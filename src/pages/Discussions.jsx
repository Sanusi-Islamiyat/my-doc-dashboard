import React from "react";
import { Card, Button } from "react-bootstrap";

const Discussions = () => {
  const discussions = [
    {
      title: "Inclusive Design in Fedora DEI",
      description:
        "Shared thoughts on accessible design systems and contributed to brainstorming inclusive onboarding workflows.",
      link: "https://discussion-link1.com",
      image: "fedora-discussion.jpg",
    },
    {
      title: "Building Regional DEI Champions",
      description:
        "Talked about strategies to empower regional contributors through mentorship and documentation.",
      link: "https://discussion-link2.com",
      image: "regional-support.jpg",
    },
  ];

  return (
    <div
      className="discussions-container"
      style={{
        padding: "3rem 1rem",
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
      <h1 className="text-center mb-5 fw-bold" style={{ fontSize: "2.5rem" }}>
        Community Discussions
      </h1>

      {discussions.map((discussion, index) => (
        <Card key={index} className="mb-4 shadow-sm border-0">
          <div className="row g-0">
            <div className="col-md-4">
              <Card.Img
                src={discussion.image}
                alt={discussion.title}
                style={{
                  height: "100%",
                  objectFit: "cover",
                  borderTopLeftRadius: "0.5rem",
                  borderBottomLeftRadius: "0.5rem",
                }}
              />
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <Card.Body>
                <Card.Title className="fw-semibold fs-4">{discussion.title}</Card.Title>
                <Card.Text className="text-muted">{discussion.description}</Card.Text>
                <Button
                  variant="primary"
                  href={discussion.link}
                  target="_blank"
                  className="mt-2"
                >
                  View Discussion
                </Button>
              </Card.Body>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Discussions;
