import './Header.css';
import { Link } from "react-router-dom";

function Header() {

    return(
        <div className="Header">
          <div className="background-image">
            <div className="author-name">
              <Link to="/"><h1 id="SiteName"> Carlos Pereira Lopes </h1></Link>
              <p id="Subtitle">Meus projetos e anotações sobre Tecnologia. </p>
            </div>
          </div>
      </div>
    );
}

export default Header;
