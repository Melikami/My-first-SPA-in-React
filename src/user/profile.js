import { useParams, useLocation } from "react-router-dom";
import React from "react";
import { render } from "@testing-library/react";
import Navbar from "../components/navbar/navbar";
import { Link } from "react-router-dom";


const Profile = () => {
  // Use the useParams hook to get the username from the URL
  // username has to be applied as a named parameter in the route
  let { username } = useParams();
  // useLocation hook is used to grab the state from the input to object
  // You can grab each field in the object by using the same name as the variable name
  let { pathname } = useLocation();

  const header = require("../img/headprofile.jpg");
  const profilePhoto = require('../img/profilemeli.jpeg');


  return (
    <div>
      <img src={header} class="headerPhoto" alt="Header" />
      <Navbar></Navbar>
      <div className="containerPage">
        <div class="row">
          <div class="col-2">
            <div class="u--fadeInUp">
              <p>
                My name is Meli Åkerman and I'm here to take over the world. I'm
                35 years old and have opted for the crazy cat life. I wrote my
                bachelor's thesis in journalism in 2013 but chose a traveling
                lifestyle instead where I could freelance as a copywriter while
                roaming around the world for a few years. I was absolutely
                excited in the fall of 2021 when I first started my frontend
                programming studies. Even though I've made my living writing
                professionally for almost a decennium, it's a challenge to put
                my excitement about programming in words, but I feel like this
                is what my brain was wired for already in the womb.
              </p>
              <p>
                As a student I spent a year working extra making Google AdWords
                campaigns for the swedish "yellow pages" Eniro, and I combined
                the knowledge I gained in SEO with my journalistic writing
                ability and deep interest for human psychology. It was a good
                tool box to start my freelancing. I've mainly worked with
                e-commerce as a copywriter and growth hacker, but I've also done
                a few high end jobs marketing the Swedish capital Stockholm
                internationally to talents and business. One of our videos won
                Europe's highest PR prize, a European Excellence Award. Check it
                out{" "}
                <a href="https://youtu.be/CAkdWUjdJyA" target="_blank">
                  HERE.
                </a>
              </p>
              <p>
                This is my first Single Page Application. I hope you like it.
              </p>
            </div>
          </div>
          <div class="col-2">
            <img src={profilePhoto} class="profile" alt="Meli Åkerman" />
            <br />
            <br />
            <Link to="../cv" className="button">
              Read my CV
            </Link>
          </div>
          <div class="row">
            <div class="col-2"></div>
            <div class="col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Profile;
