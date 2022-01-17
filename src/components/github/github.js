import Navbar from "../navbar/navbar";

const header = require("../../img/headgithub.jpg");

function Github() {
  return (
    <section>
      <img src={header} class="headerPhoto" alt="Header" />
      <Navbar></Navbar>
      <div className="containerPage">
        <h1>Github</h1>
      </div>
    </section>
  );
}

export default Github;
