import Navbar from "../navbar/navbar";

const header = require("../../img/headgithub.jpg");

const js1 = require("../../img/gitscreens/javascript1.png");
const js2 = require("../../img/gitscreens/Javascript1-2.png");

const js1group = require("../../img/gitscreens/js1group.png");

const htmlcss = require("../../img/gitscreens/htmlcss.png");
const htmlcssgroup = require("../../img/gitscreens/HTMLGrupp.png");
const arbetsmetodik2 = require("../../img/gitscreens/Arbetsmetodik2.png");


function Github() {
  return (
    <section>
      <img src={header} class="headerPhoto" alt="Header" />
      <Navbar></Navbar>
      <div className="containerPageWide">
        <div class="row">
          <div class="col-2">
            <img src={js1} class="gitPic" alt="Meli Åkerman" />
          </div>
          <div class="col-2">
            <div class="u--fadeInUp">
              <h2>Javascript 1: First assignment</h2>
              <p>
                For our very first assignment we were to create arrays to store input data and hidden push functions. The data is then used to loop greetings between the persons who'se data has been entered. I added optional CSS.
              </p>
            </div>
            <br />
            <a
              href="https://github.com/Melikami/JavaScript-1-The-1st-assignment"
              target="_blank" class="YT"
            >
              <button class="button">Github source</button>
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-1">
            <hr size="8" width="1400px" color="#4f1784"></hr>
          </div>
        </div>
        <div class="row">
          <div class="col-2">
            <img src={js2} class="gitPic" alt="Meli Åkerman" />
          </div>
          <div class="col-2">
            <div class="u--fadeInUp">
              <h2>Javascript 1: Second assignment</h2>
              <p>
                Here we started working with objects which got real interesting. We were to save data from input fields, creating different types of objects: People and Superheroes. There's functions to make the Superheroes fly, make all the objects have a birthday, and loop greetings between the objects. I added optional CSS.
              </p>
            </div>
            <br />
            <a
              href="https://github.com/Melikami/Javascript-1-course-2nd-assignment"
              target="_blank"
            >
              <button class="button">Github source</button>
            </a>
          </div>
        </div>
        <div class="col-1">
          <hr size="8" width="1400px" color="#4f1784"></hr>
        </div>
        <div class="row">
          <div class="col-2">
            <img src={js1group} class="gitPic" alt="Meli Åkerman" />
          </div>
          <div class="col-2">
            <div class="u--fadeInUp">
              <h2>Javascript 1: Group Project</h2>
              <p>
                This was our first group project and we didn't work according to any method like scrum but we were a great team so all went smoothly. We made a playlist function where the user could add songs into their playlists. The playlist can be sorted in different ways and songs can be drag and dropped to change the order, or deleted. There's a function to print the playlist. 
              </p>
            </div>
            <br />
            <a href="https://github.com/Melikami/js1grupp7" target="_blank">
              <button class="button">Github source</button>
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-1">
            <hr size="8" width="1400px" color="#4f1784"></hr>
          </div>
        </div>
        <div class="row">
          <div class="col-2">
            <img src={htmlcss} class="gitPic" alt="Meli Åkerman" />
          </div>
          <div class="col-2">
            <div class="u--fadeInUp">
              <h2>HTML + CSS: Introduction</h2>
              <p>
                I was lacking in imagination so I made a simple homepage about the reggae artists I was currently listening to. It's a bit too packed with css animations so that it's almost a bit tasteless in my opinion but the assignment was to use plenty of CSS. Every artist has their own page with info, picture and video. I've embedded youtube videos and spotify tracks and built a gallery.
              </p>
            </div>
            <br />
            <a
              href="https://github.com/Melikami/HTML-CSS-Introduction"
              target="_blank"
            >
              <button class="button">Github source</button>
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-1">
            <hr size="8" width="1400px" color="#4f1784"></hr>
          </div>
        </div>
        <div class="row">
          <div class="col-2">
            <img src={htmlcssgroup} class="gitPic" alt="Meli Åkerman" />
          </div>
          <div class="col-2">
            <div class="u--fadeInUp">
              <h2>HTML + CSS: Group Project</h2>
              <p>
                In this project I have done the landing page, a product category page where images and text info about the objects in the store were fetched and displayed in HTML both on the product category page and in single product pages. I also did a About page and Contact form. I've done all the HTML, CSS and JS for this project.
              </p>
            </div>
            <br />
            <a
              href="https://github.com/Melikami/HTML-CSS-Group-Project"
              target="_blank"
            >
              <button class="button">Github source</button>
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-1">
            <hr size="8" width="1400px" color="#4f1784"></hr>
          </div>
        </div>
        <div class="row">
          <div class="col-2">
            <img src={arbetsmetodik2} class="gitPic" alt="Meli Åkerman" />
          </div>
          <div class="col-2">
            <div class="u--fadeInUp">
              <h2>Work Methodics 2: Group Project</h2>
              <p>
                We got the mission from our made up client to create "Mealstagram": an app to upload and share pictures and recipes of the food you've made with friends online. The user can register a profile which creates js objects. The profile info is fetched from the object data. We also have a page to add posts of food and a landing page. All made mobile first.
              </p>
            </div>
            <br />
            <a href="https://github.com/Melikami/Mealstagram" target="_blank">
              <button class="button">Github source</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Github;
