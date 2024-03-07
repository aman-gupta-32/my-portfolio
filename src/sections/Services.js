import "../styles/Services.css";

export default function Services({ servicesSectionRef }) {
  return (
    <div className="services-parent-container" ref={servicesSectionRef}>
      <h1>Services</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div
            className="card border-success text-bg-dark  mb-3"
            style={{ width: "18rem" }}
          >
            <img
              src="https://i.pinimg.com/736x/0e/b5/6f/0eb56f17a4ff670c6914a55c0ac04351.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Frontend Development</h5>
              <p className="card-text">
                Building interactive and dynamic user interfaces using HTML,
                CSS, and JavaScript.
              </p>
              <a href="#" className="btn btn-outline-success">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div
            className="card border-success text-bg-dark  mb-3"
            style={{ width: "18rem" }}
          >
            <img
              src="https://i.pinimg.com/564x/bb/61/9a/bb619acdadb2101087684934f63ed00f.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Backend Development</h5>
              <p className="card-text">
                Developing server-side logic and databases using technologies
                like Node.js, Python, Ruby on Rails, etc.
              </p>
              <a href="#" className="btn btn-outline-success">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div
            className="card border-success text-bg-dark  mb-3"
            style={{ width: "18rem" }}
          >
            <img
              src="https://i.pinimg.com/236x/aa/5f/13/aa5f13b824df7f503ca1dad2dcae09bc.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Full-Stack Development</h5>
              <p className="card-text">
                Offering end-to-end development services covering both frontend
                and backend aspects.
              </p>
              <a href="#" className="btn btn-outline-success">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
