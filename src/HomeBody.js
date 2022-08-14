import './HomeBody.css';
import { Link } from "react-router-dom";


function HomeBody() {
    return(
        <div className="HomeBody">
            <h1>&#128214; - Textos:</h1>
            <div className="ArticleLink">
                <Link to="/maturidade_dados">Integrar os Dados é só o Começo.</Link>
            </div>
            <div className="ArticleLink">
                <Link to="/zanzibar">Zanzibar: O Sistema de autorizações global do Google.</Link>
            </div>

            <h1>&#128187; -  Projetos: </h1>

            <h1>&#127916; - Mídia: </h1>

        </div>
    );
}

export default HomeBody;
