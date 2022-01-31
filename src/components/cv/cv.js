import Navbar from "../navbar/navbar";
import YoutubeEmbed from "../youtube/youtube";

const header = require("../../img/headcv.jpg");

function CV() {
  return (
    <section>
      <img src={header} class="headerPhoto" alt="Header" />
      <Navbar></Navbar>
      <div className="containerPageWide">
        <div class="row">
          <div className="divided">
            <h4>CV: Relevant work experience</h4>
            <div class="cvcontent2">
              <h4>
                Copywriter and Growth Hacker for Happy-day.se: 2017 - 2019
              </h4>
              <p>
                Copywriting for product content. Writing longer content
                articles, growth hacking, image shopping and photoshopping.
              </p>
              <br />
            </div>
            <div class="cvcontent">
              <h4>
                Copywriter and Growth Hacker for Happy-day.se: 2017 - 2019
              </h4>
              <p>
                Copywriting for product content. Writing longer content
                articles, growth hacking, image shopping and photoshopping.
              </p>
              <br />
            </div>
            <div class="cvcontent2">
              <h4>
                Copywriter and Growth Hacker for Upplevelse.com: 2013 - 2017
              </h4>
              <p>
                Copywriting, growth hacking, image shopping and photoshopping,
                google adwords, client- and customer contact, creating new
                products.
              </p>
              <br />
            </div>
            <div class="cvcontent">
              <h4>Copywriter and Script Writer for D1gits.com: 2012 - 2017</h4>
              <p>
                Script writing, creating storylines, inventing magic tricks and
                researching for high tech, and high end, business presentations
                for Stockholm City - The capital of Scandinavia, Stockholm
                Business Region.
              </p>
              <ul>
                See our projects:
                <li>
                  <a href="https://youtu.be/lDTgpMb9n88" target="_blank">Stockholm Perspective</a>
                </li>
                <li>
                  <a href="https://youtu.be/NtuFzE2Cu88" target="_blank">Innovat1on</a>
                </li>
              </ul>
              <br />
            </div>
            <div class="cvcontent2">
              <h4>Copywriter for Elegant.se 2013 - 2014</h4>
              <p>Copywriting for exclusive e-commerce.</p>
              <br />
            </div>
            <div class="cvcontent">
              <h4>Google Adwords Professional: 2011 - 2012</h4>
              <p>
                Creating and optimizing Google AdWords campaigns with the matrix
                of googling: SEO.
              </p>
              <br />
            </div>
            <div class="cvcontent2">
              <h4>Layout Editor at Femte Statsmakten: 2011 - 2012</h4>
              <p>
                Layout editor for the journalist student union magazine at JMK
                Stockholm University.
              </p>
              <br />
            </div>
            <div class="cvcontent">
              <h4>Ornöboda Community Association: 2008</h4>
              <p>
                I created a little webpage in HTML for a small summer house home
                owner's association.
              </p>
              <br />
            </div>
          </div>
          <hr></hr>
          <div className="divided2">
            <h4>Relevant Education</h4>
            <div class="cvcontent">
              <h4>Frontend programmer: 2021</h4>
              <p>
                Two year vocational university course at school KYH to become a
                frontend developer.
              </p>
              <br />
            </div>
            <div class="cvcontent2">
              <h4>Webbdesigner: 2022</h4>
              <p>
                One year long education in digital graphics, design processes, image editing, layout, typography and programming.
              </p>
              <br />
            </div>
            <div class="cvcontent">
              <h4>Candidate Course in Journalism: 2013</h4>
              <p>
                At the journalism institution JMK at Stockholm University.
                Including writing my bachelor's thesis (Swe: C-uppsats).
              </p>
              <br />
            </div>
            <div class="cvcontent2">
              <h4>Science of Journalism: 2011 - 2012</h4>
              <p>At the journalism institution JMK at Stockholm University.</p>
              <br />
            </div>
            <div class="cvcontent">
              <h4>Poppius Journalist School: 2010 - 2011</h4>
              <p>Basic course in journalism.</p>
              <p>Editor's course</p>
              <br />
            </div>
            <div class="cvcontent2">
              <h4>Creative Writing I: 2012</h4>
              <p>At Högskolan Kristianstad</p>
              <br />
            </div>
            <div class="cvcontent">
              <h4>Academical Writing: 2012</h4>
              <p>Linnéuniversitetet</p>
              <br />
            </div>
            <div class="cvcontent2">
              <h4>Openness on the Internet: 2012</h4>
              <p>Umeå Universitet</p>
              <br />
            </div>
            <div class="cvcontent">
              <h4>Candidate of Law: 2007</h4>
              <ul>
                <li>Legal introductory course</li>
                <li>Civil Law</li>
                <li>Legal information seeking</li>
              </ul>
              <br />
            </div>
          </div>
        </div>
        <div>
          <br />
          <h4>
            Watch our video that won Europe's highest PR-prize: An European
            Excellence Award in 2014
          </h4>
          <YoutubeEmbed embedId="CAkdWUjdJyA" />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </section>
  );
}

export default CV;
