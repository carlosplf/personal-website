import './HomeBody.css';
import { Link } from "react-router-dom";


function HomeBody() {
    return(
        <div className="HomeBody">
            <h1>Meus textos:</h1>
            <div className="ArticleLink">
                <Link to="/maturidade_dados">Integrar os Dados é só o Começo.</Link>
            </div>
            <div className="ArticleLink">
                <Link to="/zanzibar">Zanzibar: O Sistema de autorizações global do Google.</Link>
            </div>
        </div>
    );
}

export default HomeBody;
