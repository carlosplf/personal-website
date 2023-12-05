import './HomeBody.css';
import { Link } from "react-router-dom";


function HomeBody() {
    return(
        <div className="HomeBody">

            <div className="About">
                <h1>&#128188; - Sobre mim:</h1>
                <p>
                  Nascido em São Carlos - SP, Graduado em Ciências da Computação pela Universidade de São Paulo - ICMC. Atualmente sou aluno de Mestrado pela
                  UFSCar, na Área de Machine Learning e GNN. Profissionalmente atuo hoje como CTO e Diretor de Tecnologia na Media.Monks Brasil, uma
                  das maiores empresas de Publicidade, Dados e Tecnologia do mundo, com mais de 9000 colaboradores e presente em 35 países.
                </p>
                <p>Também ajudei a construir e colocar para rodar o ITI MBA, na UFSCar, e hoje sou Coordenador de Mercado no programa.</p>
                <div className="SocialLinks">
                    <div className="SocialLink">
                        <img className="SocialIcon" src="/images/linkedin-logo.jpeg"/> <a href="https://www.linkedin.com/in/carlosplf/"> LinkedIn </a>
                    </div>
                    <div className="SocialLink">
                        <img className="SocialIcon" src="/images/github-logo.jpeg"/> <a href="https://github.com/carlosplf/"> GitHub </a>
                    </div>
                    <div className="SocialLink">
                        <img className="SocialIcon" src="/images/twitter-logo.jpeg"/> <a href="https://twitter.com/carlosplfilho/"> Twitter </a>
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
                    <div className="ProjectDetails">
                        <a id="brdata_link" href="https://brdata.site"><i className="fa fa-external-link"></i> BRData Collector.</a>
                        <p>Portal para pesquisa sobre Gastos, Contratos e Licitações de instituições do Governo Federal. Também é possível pesquisar sobre Empresas que prestam serviço para Entidades Federais.</p>
                        <p>Sistema de código aberto e disponível no <a style={{fontSize:"1.2em"}} href="https://github.com/carlosplf/br_data_inspector">Github</a>.</p>
                    </div>
                </div>

                <div className="ProjectSession">
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
