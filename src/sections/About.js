import "../styles/About.css";

export default function About({ aboutSectionRef }) {
  return (
    <div className="about-parent-container" ref={aboutSectionRef}>
      <h1>About</h1>
      <p>
        👋 Hi, I'm Aman Gupta, a recent Computer Science graduate (2023) with a
        passion for Full-Stack Development. Proficient in React, Node.js, CSS,
        and JavaScript, I enjoy crafting interactive and user-friendly web
        experiences. Always eager to explore new technologies and stay updated
        on industry trends, I'm excited about contributing to the dynamic world
        of web development. Let's connect and build something amazing together!
        🚀
      </p>
    </div>
  );
}
