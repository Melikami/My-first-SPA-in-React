import Navbar from "../navbar/navbar";


const header = require("../../img/headprojects.jpg");

function Projects() {
  return (
    <section>
      <img src={header} class="headerPhoto" alt="Header" />
      <Navbar></Navbar>
      <div className="containerPage">
        <h2>Projects</h2>
      </div>
    </section>
  );
}

export default Projects;
