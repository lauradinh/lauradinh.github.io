import profile2 from "../img/profile-2.jpg";

function AboutMe() {
  return (
    <>
      <section id="AboutMe" className="about-section">
        <div className="about-section-img">
          <img src={profile2} alt="" />
        </div>
        <div className="hero-section-content-box-about-section-box">
          <div className="hero-section-content">
            <p className="section-title">About</p>
            <h1 className="skills-section-heading">About Me</h1>
            <p className="hero-section-description">
              I am a graduate of the University of Wisconsin-Madison where I
              earned a B.S. in computer science. Currently, I am a part of the
              IT Rotational Program at Johnson Controls as a data analyst on the
              Engineering Solution Delivery team.
            </p>
            <p className="herp-section-description">
              I have previously worked at the People and Robots Laboratory at UW
              as a research assistant and software developer, where I designed
              and implemented a user interface for explaining the usage of AI. I
              am highly motivated and constantly seek opportunities for personal
              and professional growth. My strong academic record and dedication
              to staying current with industry trends make me a highly qualified
              candidate in computer science. I am eager to explore opportunities
              that allow me to utilize my skills and passions to make a
              significant impact. <br></br> In my free time, I enjoy making
              YouTube videos about my knit and crochet projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
