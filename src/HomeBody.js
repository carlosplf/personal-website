import './HomeBody.css';
import { Link } from "react-router-dom";


function HomeBody() {
    return(
        <div className="HomeBody">

            <div className="About">
                <h1>&#128188; - Sobre mim:</h1>
                <p>Diretor de Tecnologia e CTO Brasil na Media.Monks.</p>
                <p>Coordenador de mercado no ITI MBA, da UFSCar.</p>
                <p>Aluno de Mestrado em Machine Learning pela UFSCar.</p>
                <div className="SocialLinks">
                    <div className="SocialLink">
                        <img className="SocialIcon" src="./images/linkedin-logo.jpeg"/> <a href="https://www.linkedin.com/in/carlosplf/"> LinkedIn </a>
                    </div>
                    <div className="SocialLink">
                        <img className="SocialIcon" src="./images/github-logo.jpeg"/> <a href="https://github.com/carlosplf/"> GitHub </a>
                    </div>
                    <div className="SocialLink">
                        <img className="SocialIcon" src="./images/twitter-logo.jpeg"/> <a href="https://twitter.com/carlosplfilho/"> Twitter </a>
                    </div>
                </div>
            </div>

            <div className="Articles">
                <h1>&#128214; - Textos:</h1>
                <div className="ArticleLink">
                    <Link to="/notion-gpt">Notion + ChatGPT.</Link>
                </div>
                <div className="ArticleLink">
                    <Link to="/maturidade_dados">Integrar os Dados é só o Começo.</Link>
                </div>
                <div className="ArticleLink">
                    <Link to="/zanzibar">Zanzibar: O Sistema de autorizações global do Google.</Link>
                </div>
            </div>

            <div className="AllProjects">
                <h1>&#128187; -  Projetos: </h1>
                <div className="ProjectSession">
                    <a href="https://brdata.site"><img className="ProjectIcon" src="./images/br-data-square.jpeg"/></a>
                    <div className="ProjectDetails">
                        <a id="brdata_link" href="https://brdata.site"><i className="fa fa-external-link"></i> BRData Collector.</a>
                        <p>Portal para pesquisa sobre Gastos, Contratos e Licitações de instituições do Governo Federal. Também é possível pesquisar sobre Empresas que prestam serviço para Entidades Federais.</p>
                        <p>Sistema de código aberto e disponível no <a style={{fontSize:"1.2em"}} href="https://github.com/carlosplf/br_data_inspector">Github</a>.</p>
                    </div>
                </div>

                <div className="ProjectSession">
                    <a href="https://ml.carlosplf.com.br"><img className="ProjectIcon" src="./images/cats-dogs-square.jpeg"/></a>
                    <div className="ProjectDetails">
                        <a id="catsdogs_link" href="https://ml.carlosplf.com.br"><i className="fa fa-external-link"></i> Cats and Dogs classifier.</a>
                        <p>Modelo de Machine Learning classificador de Gatos e Cachorros com base em imagem. Através da página, usuários podem submeter imagens para classificação.</p>
                        <p>Sistema de código aberto e disponível no <a style={{fontSize:"1.2em"}} href="https://github.com/carlosplf/tf-cats-and-dogs">Github</a>.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default HomeBody;
