import Profile from "./Profile";
import { Link } from "react-scroll";
function HeroSection() {
  return (
    <>
      <section id="heroSection" className="hero-section">
        <div className="hero-section-content-box">
          <div className="hero-section-content">
            <p className="section-title">Hey, I'm Laura Dinh</p>
            <h1 className="hero-section-title">
              <span className="hero-section-title-color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero-section-description">
              Driven by creativity and a passion for technology, <br /> I
              explore data and innovation to unlock new possibilities
            </p>
          </div>
          <button className="btn btn-primary">
            <Link
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Contact"
              className="hero-contact"
            >
              Get in Touch
            </Link>
          </button>
        </div>
        <div className="hero-section-img">
          <Profile />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
