import "../styles/Contact.css";

export default function Contact({ contactSectionRef }) {
  return (
    <div className="contact-parent-container" ref={contactSectionRef}>
      <h1>Contact Me</h1>
      <div className="personal-details">
        <figure>
          <img src="./location_icon.png" alt="Nothing was find" />
          <figcaption>
            <h5>ADDRESS</h5>
          </figcaption>
          <figcaption>
            <h6>Kota, India</h6>
          </figcaption>
        </figure>
        <figure>
          <img src="./email_icon.png" alt="Nothing was find" />
          <figcaption>
            <h5>EMAIL ADDRESS</h5>
          </figcaption>
          <figcaption>
            <h6>amangupta200132@gmail.com</h6>
          </figcaption>
        </figure>
        <figure>
          <img src="./resume_icon.png" alt="Nothing was find" />
          <figcaption>
            <h5>RESUME</h5>
          </figcaption>
          <figcaption>
            <a
              href="https://drive.google.com/file/d/1C2Apsdq3Pu1dfDuJ9hLSpbq27iOg_1Qk/view?usp=sharing"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h6>Link</h6>
            </a>
          </figcaption>
        </figure>
      </div>

      <div className="social-media">
        <p>Find me on</p>
        <a href="https://www.instagram.com/" target="_blank">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a href="https://twitter.com/?lang=en" target="_blank">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/aman-gupta-070745204/" target="_blank">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </div>
      {/*<ion-icon name="logo-instagram"></ion-icon> */}
    </div>
  );
}
