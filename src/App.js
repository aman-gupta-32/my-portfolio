import Header from "./sections/Header";
import About from "./sections/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./sections/Home";
import { useRef } from "react";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: sectionRef === projectsSectionRef ? 'start' : 'center',
      });
    }
  };

  return (
    <div className="App">
      <Header
        scrollToSection={scrollToSection}
        homeSectionRef={homeSectionRef}
        aboutSectionRef={aboutSectionRef}
        servicesSectionRef={servicesSectionRef}
        projectsSectionRef={projectsSectionRef}
        contactSectionRef={contactSectionRef}
      />
      <Home homeSectionRef={homeSectionRef} />
      <About aboutSectionRef={aboutSectionRef} />
      <Services servicesSectionRef={servicesSectionRef} />
      <Projects projectsSectionRef={projectsSectionRef} />
      <Contact contactSectionRef={contactSectionRef} />
      <Footer />
    </div>
  );
}

export default App;

// <Route path="/" exact component={Home} />
//<Route path="/about" component={About} />
