import { useParams, useLocation } from "react-router-dom";
import React from "react";
import { render } from "@testing-library/react";
import Navbar from "../components/navbar/navbar";


const Profile = () => {
  // Use the useParams hook to get the username from the URL
  // username has to be applied as a named parameter in the route
  let { username } = useParams();
  // useLocation hook is used to grab the state from the input to object
  // You can grab each field in the object by using the same name as the variable name
  let { pathname } = useLocation();

  const header = require("../img/headprofile.jpg");
  const profilePhoto = require('../img/profile.jpg');


  return (
    <div>
      <img src={header} class="headerPhoto" alt="Header" />
      <Navbar></Navbar>
      <div className="containerPage">
        <div class="u--fadeInUp">
          <p>
            My name is Meli Åkerman and I'm here to take over the world. I'm 35
            years old and have opted for the crazy cat life instead of building
            a family. I wrote my bachelor's thesis in journalism in 2013 but
            chose a traveling lifestyle where I could freelance as a copywriter
            while roaming around the world for a few years. I fell in love in
            the fall of 2021 when I first started my frontend programming
            studies. Even though I've made my living writing professionally for
            almost a decennium, it's a challenge to put my excitement about
            programming in words, but I feel like this is what my brain was
            wired for already in the womb.
          </p>
        </div>
        <img src={profilePhoto} class="profile" alt="Meli Åkerman" />
        <div class="u--fadeInUp">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cum
            sapiente repellat corrupti fugiat eligendi sint incidunt dicta!
            Nostrum quam perspiciatis facere impedit ab omnis deleniti eveniet
            unde voluptatem officiis?
          </p>
        </div>
      </div>
    </div>
  );
};



export default Profile;
