import './HomeBody.css';
import { Link } from "react-router-dom";


function HomeBody() {
    return(
        <div className="HomeBody">

            <div className="About">
                <h1>&#128188; - Sobre mim:</h1>
                <p>
                  Nascido em São Carlos - SP, Graduado em Ciências da Computação pela Universidade de São Paulo - ICMC. Atualmente sou aluno de Mestrado pela
                  UFSCar, na Área de Machine Learning e Graph Neural Networks (GNN). Profissionalmente atuo hoje como CTO e Diretor de Tecnologia na Media.Monks, uma
                  das maiores empresas de Publicidade, Dados e Tecnologia do mundo, com mais de 9000 colaboradores e presente em 35 países.
                </p>
                <p>Também ajudei no projeto de construção e execução do ITI MBA, curso de MBA oferecido pela UFSCar. Hoje atuo como Coordenador de alguns cursos e 
                  membro da Fundação ITI.</p>
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
                    <Link to="/retail-media">Retail Media e desafios de Tecnologia.</Link>
                    <p className="article-date">26 de Fevereiro de 2024</p>
                    <p className="article-summary">
                      Estratégias de Reail Media continuam crescendo e ganhando espaço dentro de 
                      grandes varejistas, mas existe ainda um oceano de possibilidades para tornar 
                      essa estratégia mais eficiente.
                    </p>
                </div>
                <div className="ArticleLink">
                    <Link to="/notion-gpt">Notion + ChatGPT.</Link>
                    <p className="article-date">27 de Maio de 2023</p>
                    <p className="article-summary">
                      Tanto o Notion quanto o ChatGPT se tornaram ferramentas populares para ajudar 
                      com organização de tarefas e otimização de tempo. Neste artigo eu mostro como 
                      usar ambas as ferramentas para compreender tarefas e sugerir uma priorização 
                      automática e inteligente.
                    </p>
                </div>
                <div className="ArticleLink">
                    <Link to="/maturidade_dados">Integrar os Dados é só o Começo.</Link>
                    <p className="article-date">14 de Agosto de 2022</p>
                    <p className="article-summary">
                      Artigo que escrevi para ajudar empresas na busca pela evolução na maturidade de 
                      dados.
                    </p>
                </div>
                <div className="ArticleLink">
                    <Link to="/zanzibar">Zanzibar: O Sistema de autorizações global do Google.</Link>
                    <p className="article-date">14 de Agosto de 2022</p>
                    <p className="article-summary">
                      Um breve resumo sobre o Zanzibar, sistema de controle de acessos e autorizações 
                      usado pelo Google.
                    </p>
                </div>
            </div>

            <div className="AllProjects">
                <h1>&#128187; -  Projetos: </h1>
                <div className="ProjectSession">
                    <div className="ProjectDetails">
                        <a id="brdata_link" href="https://github.com/carlosplf/br_data_inspector"><i className="fa fa-external-link"></i> BRData Collector.</a>
                        <p>Portal para pesquisa sobre Gastos, Contratos e Licitações de instituições do Governo Federal. Também é possível pesquisar sobre Empresas que prestam serviço para Entidades Federais.</p>
                        <p>Sistema de código aberto e disponível no <a style={{fontSize:"1.2em"}} href="https://github.com/carlosplf/br_data_inspector">Github</a>.</p>
                    </div>
                </div>

                <div className="ProjectSession">
                    <div className="ProjectDetails">
                        <a id="catsdogs_link" href="https://github.com/carlosplf/tf-cats-and-dogs"><i className="fa fa-external-link"></i> Cats and Dogs classifier.</a>
                        <p>Modelo de Machine Learning classificador de Gatos e Cachorros com base em imagem. Através da página, usuários podem submeter imagens para classificação.</p>
                        <p>Sistema de código aberto e disponível no <a style={{fontSize:"1.2em"}} href="https://github.com/carlosplf/tf-cats-and-dogs">Github</a>.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default HomeBody;
