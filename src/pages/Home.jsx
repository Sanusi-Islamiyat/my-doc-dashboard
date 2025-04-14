import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";


// Icons
import { FaBriefcase, FaProjectDiagram, FaTools, FaBullseye, FaRocket, FaAward } from "react-icons/fa";
import { FaBoxesStacked, FaCartFlatbedSuitcase, FaPerson } from "react-icons/fa6";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-dashboard">
      {/* Top Bar */}
    <div className="home-welcome">
    <p className="">Welcome to my contribution</p>
    <h1>Portfolio</h1>
    </div>

      {/* Main Content */}
      <div className="dashboard-main">
        {/* Left Section */}
        <div className="dashboard-left" data-aos="fade-right">
          <div className="profile-card">
          <img src="/IMG_8968.JPG" alt="profile picture" className="profile-card-img" />
            <div className="profile-card-desc"><h3>Islamiyat Sanusi</h3>
            <p className="ux-e">UX Engineer</p>
            <p className="out-c">Outreachy Contributor at Fedora</p>
            </div>
            
          </div>

          <div className="quick-stats">
            <div className="stat-box-abt">
            <h3><FaPerson style={{ marginRight: "0.5rem" }} /> About Me</h3>
              <p className="abt-p">I’m Sanusi Islamiyat Oreoluwa, a prospective Outreachy intern and UX Engineer, excited to contribute to Fedora's Diversity, 
                Equity, and Inclusion (DEI) team. My goal is to craft inclusive, accessible, and thoughtful user experiences that make tech spaces feel welcoming
                 to everyone.

Though I’ve just started my journey with Fedora, I’m already deeply invested in learning from and contributing to a community that values people above all else.
 For me, UX engineering isn’t just about interfaces—it's about listening to the community, solving real problems, and ensuring that every voice is heard. 
 I'm thrilled to be part of this movement and can’t wait to help create experiences that empower and connect people in meaningful ways.

As I continue my work, I'm eager to deepen my understanding of community-driven projects and bring my unique perspective to Fedora's ongoing mission of inclusivity. 
I look forward to collaborating with fellow engineers, designers, and community members. I'm interested in exchanging practical ideas, solving real problems, and learning through hands-on contributions. It’s the thoughtful, everyday work with others that really pushes things forward.</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="dashboard-right">
        <div className="card-box" data-aos="fade-up">
  <h3>
    <FaBoxesStacked style={{ marginRight: "0.5rem" }} /> About Portfolio
  </h3>

  <div className="vertical-boxes-container">
    <div className="vertical-box">
      <h5>Content</h5>
      <p>This dashboard is a collection of my contributions to Fedora’s Diversity, Equity, and Inclusion (DEI) efforts. It highlights the work I've done across tickets, community discussions, documentation, and various collaborative efforts. Everything here reflects my ongoing commitment to making Fedora a more inclusive and welcoming space for everyone.</p>
    </div>
    <div className="vertical-box">
      <h5>Technologies</h5>
      <p>This project was built with React for dynamic component rendering and smooth user experience.
I used Bootstrap to structure and style the layout quickly and responsively, alongside custom vanilla CSS for finer design control.
AOS added soft scroll-based animations, and an animated cursor gave it a playful, interactive feel.</p>
    </div>
  </div>
</div>

       

          <div className="card-box-bc" data-aos="fade-up">
            <h3><FaAward style={{ marginRight: "0.5rem" }} /> Biggest Contribution</h3>
            <p>Writing the <a href="https://medium.com/@sanusiislamiyat125/mastering-fedora-event-planning-a-guide-to-hosting-impactful-inclusive-events-6cf6fa1ead36">
            Fedora Event Planning Guide</a> has been my most meaningful contribution to date. It wasn’t just about outlining logistics — it was about making sure
             events feel welcoming, inclusive, and truly connected to community values.

I poured my heart into creating something that could help others plan with clarity and confidence, especially those who are new to organizing. In the process,
 I grew too — as a writer, a collaborator, and as someone learning what real community support looks like.

This guide reminded me that impact doesn’t always have to be loud. Sometimes, it’s a well-written page that helps someone show up and feel seen.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
