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
                <div className="ArticleSession">
                    <img className="ArticleIcon" src="./images/br-data-square.jpeg"/>
                    <div className="ArticleDetails">
                        <a href="https://brdata.site">BRData Collector.</a>
                        <p>Portal para pesquisa sobre Gastos, Contratos e Licitações de instituições do Governo Federal. Também é possível pesquisar sobre Empresas que prestam serviço para Entidades Federais.</p>
                        <p>Sistema de código aberto e disponível no <a style={{fontSize:"1.2em"}} href="https://github.com/carlosplf/br_data_inspector">Github</a>.</p>
                    </div>
                </div>

                <div className="ArticleSession">
                    <img className="ArticleIcon" src="./images/cats-dogs-square.jpeg"/>
                    <div className="ArticleDetails">
                        <a href="https://ml.carlosplf.com.br">Cats and Dogs classifier.</a>
                        <p>Modelo de Machine Learning classificador de Gatos e Cachorros com base em imagem. Através da página, usuários podem submeter imagens para classificação.</p>
                        <p>Sistema de código aberto e disponível no <a style={{fontSize:"1.2em"}} href="https://github.com/carlosplf/tf-cats-and-dogs">Github</a>.</p>
                    </div>
                </div>
            
            
        </div>
    );
}

export default HomeBody;
