import Navbar from "../navbar/navbar";
import { Routes, Route } from "react-router-dom";

const linkedin = require("../../img/linkedin.png");
const github = require("../../img/github.png");
const facebook = require("../../img/facebook.png");
const mail = require("../../img/mail.png");
const header = require("../../img/headcontact.jpg");

function Contact() {
  return (
    <section>
      <img src={header} class="headerPhoto" alt="Header" />
      <Navbar></Navbar>
      <div className="containerPage">
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cum
          sapiente repellat corrupti fugiat eligendi sint incidunt dicta!
          Nostrum quam perspiciatis facere impedit ab omnis deleniti eveniet
          unde voluptatem officiis?
        </p>
        <img src={mail} class="contact-logos" alt="LinkedIn" />
        <a href="https://github.com/Melikami" target="_blank">
          <img src={github} class="contact-logos" alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/meli-%C3%A5kerman-64138773/"
          target="_blank"
        >
          <img src={linkedin} class="contact-logos" alt="LinkedIn" />
        </a>
        <a href="https://www.facebook.com/melikamis/" target="_blank">
          <img src={facebook} class="contact-logos" alt="Facebook" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
