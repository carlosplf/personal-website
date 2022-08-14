import './Header.css';
import { Link } from "react-router-dom";

function Header() {

    return(
        <div className="Header">
            <Link to="/"><h1 id="SiteName"> Carlos Pereira Lopes  </h1></Link>
            <p id="Subtitle">Minhas anotações sobre Tecnologia. </p>
        </div>
    );
}

export default Header;
