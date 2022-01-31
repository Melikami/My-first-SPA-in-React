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
  const profilePhoto = require("../img/profilemeli.jpeg");

  return (
    <div>
      <img src={header} class="headerPhoto" alt="Header" />
      <Navbar></Navbar>
      <div className="containerPage">
        <div class="row">
          <div class="col-2">
            <div class="u--fadeInUp">
              <p>
                My name is Meli Åkerman and I'm here to take over the world.
                (Not really but I always wanted to say that.) I'm currently
                studying Frontend programming at KYH and Webbdesign at Högskolan
                Väst. I'm 35 years old and have opted for the crazy cat life.
              </p>
              <p>
                I've freelanced as a copywriter for almost a decennium before I chose to change my professional path. I've worked plenty with marketing, SEO, photoshop, stock photos and growth hacking. My main area has been e-commerce but I've also done some high end marketing for Stockholm City, with one project winning Europe's highest PR prize, an European Excellence Award. Check it
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
            <Link to="../cv" className="button2">
              Read my CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
