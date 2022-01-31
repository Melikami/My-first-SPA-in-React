import Navbar from "../navbar/navbar";
import { Routes, Route } from "react-router-dom";
import { SiLinkedin } from 'react-icons/si'
import { SiFacebook } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { GrMail } from "react-icons/gr";



const linkedin = require("../../img/linkedin.png");
const github = require("../../img/github.png");
const facebook = require("../../img/facebook.png");
const mail = require("../../img/mail.png");
const header = require("../../img/headcontact.jpg");
const style = { fontSize: '50px', margin: '10px' }

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
          <GrMail style={style} />
        </a>
        <a href="https://github.com/Melikami" target="_blank">
          <SiGithub style={style} />
        </a>
        <a
          href="https://www.linkedin.com/in/meli-%C3%A5kerman-64138773/"
          target="_blank"
        >
          <SiLinkedin style={style} />
        </a>
        <a href="https://www.facebook.com/melikamis/" target="_blank">
          <SiFacebook style={style} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
