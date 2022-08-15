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
                <div className="ArticleLink">
                    <a href="https://brdata.online">BRData Collector.</a>
                    <p>Portal para pesquisa sobre Gastos, Contratos e Licitações de instituições do Governo Federal. Também é possível pesquisar sobre Empresas que prestam serviço para Entidades Federais.</p>
                    <p>Sistema de código aberto e disponível no <a style={{fontSize:"1.2em"}} href="https://github.com/carlosplf/br_data_inspector">Github</a>.</p>
                </div>
            
            <h1>&#127916; - Mídia: </h1>

                <div className="ArticleLink">
                    <a href="https://open.spotify.com/episode/6cng4AO3j3Nqci37KKjWsJ?si=d7c8028da8e14147">Podcast - Raccoonversa: Google Analytics 4.</a>
                </div>
                
                <div className="ArticleLink">
                    <a href="https://open.spotify.com/episode/5O3kAtVo2uQAY6jOzN93q6?si=bbfbef8351e04361">Podcast - Raccoonversa: Inovação Tech no Marketing Digital.</a>
                </div>
        </div>
    );
}

export default HomeBody;
