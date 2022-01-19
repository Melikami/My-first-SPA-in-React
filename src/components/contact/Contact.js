import Navbar from "../navbar/navbar";
import { Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const linkedin = require("../../img/linkedin.png");
const github = require("../../img/github.png");
const facebook = require("../../img/facebook.png");
const mail = require("../../img/mail.png");
const header = require("../../img/headcontact.jpg");

const element = <FontAwesomeIcon icon={faCoffee} />;

function Contact() {
  return (
    <section>
      <img src={header} class="headerPhoto" alt="Header" />
      <Navbar></Navbar>
      <div className="containerPage">
        <div class="u--fadeInUp">
          <h2>Contact</h2>
          <p>
            Do you want to come in contact with me? You can find my contact
            information in the links below or just write to my email:
            meli86akerman(a)gmail.com
          </p>
        </div>
        <a href="mailto:meli86akerman@gmail.com">
          <img src={mail} class="contact-logos" alt="LinkedIn" />
        </a>
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
