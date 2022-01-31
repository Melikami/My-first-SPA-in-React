import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="background">
      <div className="container">
        <Link to="../profile/profile" className="btn">
          MELI
        </Link>
        <Link to="../cv" className="btn">
          CV
        </Link>
        <Link to="../github" className="btn">
          GITHUB
        </Link>
        <Link to="../projects" className="btn">
          PROJECTS
        </Link>
        <Link to="../contact" className="btn">
          CONTACT
        </Link>
      </div>
    </div>
  );
  }


export default Home;
