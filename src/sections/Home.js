import "../styles/Home.css";

export default function Home({ homeSectionRef }) {
  return (
    <div className="parent-container" ref={homeSectionRef}>
      <div
        style={{ backgroundColor: "#35374B", width: "100%", height: "50em" }}
      >
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-7 p-3" id="col-custom">
              <div className="intro-container">
                <p className="intro">
                  <h4>Hi, I'm</h4>
                  <h1>Aman Gupta</h1>
                  <h4>FullStack Developer</h4>
                </p>
                <br />
                <p className="intro">
                  Passionate about crafting seamless digital experiences.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="circle-container">
                <img
                  className="circle-image"
                  src="./my_image.jpg"
                  alt="Image description"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
