import "../styles/Projects.css";

export default function Projects({ projectsSectionRef }) {
  return (
    <div className="projects-parent-container" ref={projectsSectionRef}>
      <h1>Projects</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <a href="https://github.com/aman-gupta-32/split-the-bill" target="_blank" style={{ textDecoration: "none" }}>
            <div
              className="card h-100 border-success text-bg-dark  mb-3"
              style={{ width: "18rem" }}
            >
              <img
                src="https://i.pinimg.com/736x/20/27/31/20273123bb8ac3089e2167776afdff6d.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Split-the-bill</h5>
                <p className="card-text">
                  Developed a user-friendly and efficient Bill Splitting App
                  that simplifies the process of sharing expenses among friends.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="https://github.com/aman-gupta-32/ToDoList" target="_blank" style={{ textDecoration: "none" }}>
            <div
              className="card h-100 border-success text-bg-dark  mb-3"
              style={{ width: "18rem" }}
            >
              <img
                src="https://i.pinimg.com/736x/20/27/31/20273123bb8ac3089e2167776afdff6d.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">ToDoList</h5>
                <p className="card-text">
                  Crafted a robust Task Manager App that streamlines task
                  organization, allowing users to efficiently add, edit, and
                  delete tasks with ease.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="https://github.com/aman-gupta-32/WanderList" target="_blank" style={{ textDecoration: "none" }}>
            <div
              className="card h-100 border-success text-bg-dark  mb-3"
              style={{ width: "18rem" }}
            >
              <img
                src="https://i.pinimg.com/736x/20/27/31/20273123bb8ac3089e2167776afdff6d.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">WanderList</h5>
                <p className="card-text">
                  Developed a travel checklist application with user-friendly
                  features, including sorting by input orders, descriptions, and
                  packed status.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="https://github.com/aman-gupta-32/Guess-the-number" target="_blank" style={{ textDecoration: "none" }}>
            <div
              className="card h-100 border-success text-bg-dark  mb-3"
              style={{ width: "18rem" }}
            >
              <img
                src="https://i.pinimg.com/736x/20/27/31/20273123bb8ac3089e2167776afdff6d.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Guess-the-number</h5>
                <p className="card-text">
                  Created a simple game to guess a number between 1 and 20.
                  Every wrong guess takes your high score lower.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
