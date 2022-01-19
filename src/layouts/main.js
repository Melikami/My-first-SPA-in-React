
import { Routes, Route } from "react-router-dom";
import Home from '../components/home/Home';
import Contact from '../components/contact/Contact';
import Projects from '../components/projects/Projects';
import Profile from '../user/profile';
import Github from '../components/github/github';
import Cv from "../components/cv/cv";


function Main() {
    return (
      <div>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/github" element={<Github />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/cv" element={<Cv />} />
          </Routes>
        </div>
      </div>
    );
}

export default Main;