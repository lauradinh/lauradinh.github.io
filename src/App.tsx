import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import MySkills from "./components/MySkills";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MySkills />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
