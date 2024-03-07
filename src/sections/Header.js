import { useState } from "react";
import "../styles/Header.css";

export default function Header({
  scrollToSection,
  homeSectionRef,
  aboutSectionRef,
  servicesSectionRef,
  projectsSectionRef,
  contactSectionRef
}) {
  const [activeLink, setActiveLink] = useState("/");

  const handleNavClick = (e, link, sectionRef) => {
    e.preventDefault();
    setActiveLink(link);
    scrollToSection(sectionRef);
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-custom"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <strong>Portfolio.</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a
                className={`nav-link ${
                  activeLink === "/" || activeLink === "/home" ? "active" : ""
                }`}
                href="/home"
                onClick={(e) => {
                  handleNavClick(e, "/home", homeSectionRef);
                }}
              >
                Home
              </a>
              <a
                className={`nav-link ${
                  activeLink === "/about" ? "active" : ""
                }`}
                href="/about"
                onClick={(e) => {
                  handleNavClick(e, "/about", aboutSectionRef);
                }}
              >
                About
              </a>
              <a
                className={`nav-link ${
                  activeLink === "/services" ? "active" : ""
                }`}
                href="/services"
                onClick={(e) => {
                  handleNavClick(e, "/services", servicesSectionRef);
                }}
              >
                Services
              </a>
              <a
                className={`nav-link ${
                  activeLink === "/projects" ? "active" : ""
                }`}
                href="/projects"
                onClick={(e) => {
                  handleNavClick(e, "/projects", projectsSectionRef);
                }}
              >
                Projects
              </a>
              <a  className={`nav-link ${
                  activeLink === "/contact" ? "active" : ""
                }`}
                href="/contact"
                onClick={(e) => {
                  handleNavClick(e, "/contact", contactSectionRef);
                }}>Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
