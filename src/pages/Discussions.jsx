import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Card, Button } from "react-bootstrap";
import { Eye, CheckCircleFill, ClockFill } from "react-bootstrap-icons";
import "./Issues.css";

const contributionsSection1 = [
  {
    title: "Intro Post",
    description: "Kicked off the challenge by sharing what I’ll be exploring—DEI, documentation, project planning—and why this journey matters to me. Set the tone and invited others to learn with me.",
    discussionLink: "https://matrix.to/#/!XZHkqjSDzHymDOfjdF:matrix.org/$p_sQB1eEaIo337DrWJ1QpRksriFPxzQwWEZRi3_Ka48?via=fedoraproject.org&via=matrix.org&via=fedora.im",
    status: "Made",
    date: "2025-03-23",
  },
  {
    title: "Understanding GitLab",
    description: "Took a simple look at GitLab—how it’s used to manage projects and why it’s a central tool in open-source documentation work.",
    discussionLink: "https://matrix.to/#/!XZHkqjSDzHymDOfjdF:matrix.org/$KXG_hSiGwFoIQoTGBWAbSDCF9Cx1FNt_Hbh1KVKfSX8?via=fedoraproject.org&via=matrix.org&via=fedora.im",
    status: "Made",
    date: "2025-03-24",
  },

  {
    title: "Documentation Best Practices",
    description: "Shared helpful resources on writing clear, user-friendly documentation. Highlighted my favorite tips and how I plan to apply them",
    discussionLink: "https://matrix.to/#/!XZHkqjSDzHymDOfjdF:matrix.org/$mJ7mWFgvXU9lpwQCW9_3mk8E3cAzylWsJXkXpwFQR1k?via=fedoraproject.org&via=matrix.org&via=fedora.im",
    status: "Made",
    date: "2025-03-25",
  },

  {
    title: "Event Planning Fundamentals",
    description: "Broke down the building blocks of organizing DEI events. Talked about the power of intentional, inclusive planning.",
    discussionLink: "https://matrix.to/#/!XZHkqjSDzHymDOfjdF:matrix.org/$vpbZaCi4gSvHvxs_FNZfOWrEFBVmDsblK1RA0bSgmL4?via=fedoraproject.org&via=matrix.org&via=fedora.im",
    status: "Made",
    date: "2025-03-26",
  },

  {
    title: "DEI in Tech",
    description: "Shared a quick take on why Diversity, Equity & Inclusion matter deeply in tech communities, especially open source.",
    discussionLink: "https://matrix.to/#/!UhOvsUJMaufrcxQMLF:matrix.org/$Md7RnNVf3liNKMjzgMv_3taEc_74pjRVjk0p4OfPPX0?via=fedora.im&via=matrix.org&via=t2bot.io",
    status: "Made",
    date: "2025-03-27",
  },
  {
    title: "Writing for Clarity & Impact",
    description: "Talked about how to write in a way that connects. Shared tools and habits that help me write better, especially for documentation.",
    discussionLink: "https://matrix.to/#/!XZHkqjSDzHymDOfjdF:matrix.org/$lY3vCT7qUL3c1shtew8GJeqvSW69g_vaXdQSt4-Vo0w?via=fedoraproject.org&via=matrix.org&via=fedora.im",
    status: "Made",
    date: "2025-03-28",
  },

  
  {
    title: "Weekly Recap & Engagement",
    description: "Reflected on the week’s learning. Asked folks what they find toughest: writing, planning, or project management?",
    discussionLink: "https://matrix.to/#/!XZHkqjSDzHymDOfjdF:matrix.org/$8uXYXsdT3lUsCK2MDv00HwKq3DqAGWyKyuQWMeqD2A4?via=fedoraproject.org&via=matrix.org&via=fedora.im",
    status: "Made",
    date: "2025-03-29",
  },

  {
    title: "Writing Fedora DEI Event Docs",
    description: "Walked through how I’d draft event documentation for Fedora’s DEI efforts. Shared a sample structure.",
    discussionLink: "https://matrix.to/#/!UhOvsUJMaufrcxQMLF:matrix.org/$AubV4gKhsGSFwQ4_hRKVgVt_KrWlnAHkEZBM58NsKvA?via=fedora.im&via=matrix.org&via=t2bot.io",
    status: "Made",
    date: "2025-03-31",
  },

  {
    title: "Community Marketing for DEI Events",
    description: "Explored how to make DEI events more visible. Talked about tailoring outreach strategies to different communities.",
    discussionLink: "https://matrix.to/#/!UhOvsUJMaufrcxQMLF:matrix.org/$PKxvwcQyj9iN1QtNQXHJi752kv98Dx-MikpeqgsDhgA?via=fedora.im&via=matrix.org&via=t2bot.io",
    status: "Made",
    date: "2025-04-01",
  },

  {
    title: "GitLab for Project Tracking",
    description: "Showed how GitLab helps me stay organized—task boards, issues, timelines.",
    discussionLink: "https://matrix.to/#/!XZHkqjSDzHymDOfjdF:matrix.org/$RqxBsu4NHGxXtxuknVCzJ3MSbIfZzchplsXMry1TLV0?via=fedoraproject.org&via=matrix.org&via=fedora.im",
    status: "Made",
    date: "2025-04-02",
  },
  
  {
    title: "The Power of Community",
    description: "Talked about how poewerful a community is and how it can help shape you into a better person.",
    discussionLink: "https://matrix.to/#/!XZHkqjSDzHymDOfjdF:matrix.org/$IPrXn3NDw09QyAIeQD-mzVjV8H1HeWxJb1HZHOc9ZCo?via=fedoraproject.org&via=matrix.org&via=fedora.im",
    status: "Made",
    date: "2025-04-03",
  },
  {
    title: "Concise Writing",
    description: "Talked about tools that improve writing and documentation. Shared what helped and how I’m using them in this challenge. I particularly enjpyed the conversation this prompted because I got to learn new things",
    discussionLink: "https://matrix.to/#/!XZHkqjSDzHymDOfjdF:matrix.org/$4DraMQ7a9l-roOmi1p_oSiIRFKt3y5WZ2Bj54j7zlpM?via=fedoraproject.org&via=matrix.org&via=fedora.im",
    status: "Made",
    date: "2025-04-04",
  },

  {
    title: "Leveraging Modern (AI) Tools",
    description: "Talked about tools that improve writing and documentation. Shared what helped and how I’m using them in this challenge. I particularly enjpyed the conversation this prompted because I got to learn new things",
    discussionLink: "https://matrix.to/#/!XZHkqjSDzHymDOfjdF:matrix.org/$U-imWEZIdB7sk748NVOJTBQDqOseLHa6fLvu_ZCq4WA?via=fedoraproject.org&via=matrix.org&via=fedora.im",
    status: "Made",
    date: "2025-04-05",
  },

  {
    title: "Week 2 Recap",
    description: "Summarized week two and asked the community: which do you find more challenging ? —event planning, writing, or project tracking?",
    discussionLink: "https://matrix.to/#/!XZHkqjSDzHymDOfjdF:matrix.org/$xl2vKV5IlPOsTrbJqs57aYe1c_BBYJiNxftlND2CqL4?via=fedoraproject.org&via=matrix.org&via=fedora.im",
    status: "Made",
    date: "2025-04-06",
  },

  {
    title: "Hosting Inclusive Tech Events",
    description: "Posted inclusive event tips—from accessibility to cultural context. Made it practical for community leaders.",
    discussionLink: "https://matrix.to/#/!UhOvsUJMaufrcxQMLF:matrix.org/$ffKnt6A-U6RKO4ozNzc7SolFrE5H-O7SnhgJpnkVLeU?via=fedora.im&via=matrix.org&via=t2bot.io",
    status: "Made",
    date: "2025-04-07",
  },

  {
    title: "Writing an Effective DEI Proposal",
    description: "Outlined what makes a strong DEI proposal (event draft): clear intent, actionable steps, and inclusive goals.",
    discussionLink: "https://matrix.to/#/!UhOvsUJMaufrcxQMLF:matrix.org/$TTXXq9Ee8XMiROPv-OyGJ8YWrbc1oPY_jbxEZi5f3po?via=fedora.im&via=matrix.org&via=t2bot.io",
    status: "Made",
    date: "2025-04-08",
  },

  {
    title: "Interactive Session",
    description: "On this day, I asked the community what they have learned so far from the challenge",
    discussionLink: "https://matrix.to/#/!UhOvsUJMaufrcxQMLF:matrix.org/$VwXmOhYLVKxipiGEq7b2nIN1Vex-ZVX_PVlVi9LTJQg?via=fedora.im&via=matrix.org&via=t2bot.io",
    status: "Made",
    date: "2025-04-09",
  },

  {
    title: "Reflection Post",
    description: "On this day, I reflected on how the journey has shaped me and how the community was a major driving force",
    discussionLink: "https://matrix.to/#/!UhOvsUJMaufrcxQMLF:matrix.org/$u6bPFOA06Wy_K20M46YrohE2wL3I8bWShtnMJ1i-kJU?via=fedora.im&via=matrix.org&via=t2bot.io",
    status: "Made",
    date: "2025-04-10",
  },

  {
    title: "Facing your Fears",
    description: "I was overly excited about a new technology a friend prompted me to learn, Bootstrap CSS. I talked about how our fears often make us miss out on things",
    discussionLink: "https://matrix.to/#/!UhOvsUJMaufrcxQMLF:matrix.org/$TNVn1KmemactBaMNgbSmAQh-AtxiIR1BhSZFdSR9otQ?via=fedora.im&via=matrix.org&via=t2bot.io",
    status: "Made",
    date: "2025-04-11",
  },

  {
    title: "Appreciation Post",
    description: "This post is a small thank-you to the community that quietly kept me going.",
    discussionLink: "https://matrix.to/#/!XZHkqjSDzHymDOfjdF:matrix.org/$fTsU68YrmPS_HfYtK8FUMJYxIrXzLbgaZalgZH06H7E?via=fedoraproject.org&via=matrix.org&via=fedora.im",
    status: "Made",
    date: "2025-04-13",
  },

  
];

const contributionsSection2 = [
 
  {
    title: "Correction",
    description: "Had a little talk with a friend on the correction response she gave to my contribution",
    discussionLink: "https://gitlab.com/fedora/dei/outreachy-internship/-/issues/7#note_2445205789",
    status: "Made",
    date: "2025-04-10",
  },
  

  
];



const Discussions = () => {
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
          <Button className="task" size="sm" href={item.discussionLink} target="_blank">
            <Eye className="me-1" /> View Discussion
          </Button>

        </div>

        {/* Status with icon and optional date */}
      <div className="d-flex align-items-center gap-2 text-muted approved">
        {item.status === "Made" ? (
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
              <h1 className="mb-3">Community Discussions</h1>
              <p className="lead text-light opacity-75">
              This page highlights the conversations I’ve been part of across the Fedora community. From kickstarting challenges and sharing valuable resources to connecting with people from different regions—I’ve used these moments to grow, reflect, and contribute meaningfully.
              </p>
              <p className="lead text-light opacity-75">Each discussion listed here represents more than just words. They capture ideas sparked in the open, lessons learned from others’ perspectives, and moments where a simple post led to deeper engagement. Whether it was starting a thread, offering support, or just listening and learning, these experiences continue to shape how I show up in community spaces.</p>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Section 1: 5 Cards */}
      <section className="issues-cards-section">
        <Container className="py-4 pre-r">
        <h3 className="mb-3 chg-p">Challenge Posts</h3>
        <p className="challenge-post text-dark">
              I started a "21 days" challenge post which doubled as a documentation of my learning journey. Here I shared resources, talked about inclusion, talked about the importance of good documentation and concise writngs. Most importantly, I reflected on how the community has shaped me to be better at areas I never thought I'd be good at.
              </p>
          {contributionsSection1.map((item, idx) => renderCard(item, idx))}
        </Container>
      </section>

      {/* Section 2: 6 Cards */}
      <section className="issues-cards-section">
        <Container className="py-4 adv-issues">
        <h3 className="mb-3 issue-s">Issue Specific</h3>
          {contributionsSection2.map((item, idx) => renderCard(item, idx))}
        </Container>
      </section>
    </div>
  );
};

export default Discussions;
