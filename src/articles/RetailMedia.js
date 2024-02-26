
import { CodeBlock, atomOneDark } from "react-code-blocks";


class RetailMedia{
    getTitle() {
        return(
            <h1 className="ArticleTitle"> Retail Media e desafios de Tecnologia.</h1>
        );
    }

    getDate() {
        return(
            <p className="ArticleDate"> 26 de Fevereiro de 2024.</p>
        );
    }

    getBody() {
        return(
            <div className="ArticleBody">
                <div className="ArticleImg">
                    <img src="images/arrow-money.png" alt="Retail Media and performance."/>
                    <p></p>
                </div>
                <p class="NormalText">
                  No atual panorama digital, o Retail Media emerge como uma estratégia inovadora que permite às marcas 
                  anunciar dentro das plataformas de e-commerce e outros ambientes de varejo online. Este modelo não 
                  apenas potencializa a visibilidade dos produtos em momentos cruciais da jornada de compra do consumidor, 
                  mas também oferece uma experiência de compra mais personalizada e integrada. Essa abordagem permite que 
                  as marcas atinjam consumidores diretamente no ponto de venda ou próximo a ele, aproveitando os dados de 
                  navegação e compra dos usuários para criar anúncios altamente relevantes e personalizados.
                </p>
                <p class="SubTitle">O Papel da Tecnologia e Uso de Dados</p>
                <p class="NormalText">
                  A tecnologia desempenha um papel fundamental ao viabilizar o Retail Media, principalmente através da coleta, 
                  análise e aplicação de dados em grande escala. Plataformas de e-commerce e tecnologias relacionadas utilizam 
                  algoritmos avançados para processar informações sobre o comportamento de compra dos usuários, preferências e 
                  histórico de navegação. Esses dados, quando analisados de forma ética e eficiente, permitem a criação de 
                  anúncios altamente direcionados e relevantes, aumentando as chances de conversão.
                </p>
                <p class="NormalText">
                  Apesar das oportunidades, o uso intensivo de dados em Retail Media apresenta desafios significativos. A precisão e a qualidade dos dados coletados são cruciais; dados imprecisos podem levar a decisões de marketing mal-informadas, prejudicando a experiência do cliente. Além disso, para que os dados suportem de fato boas estratégias neste contexto, é preciso que todo o fluxo de dados seja elaborado de forma eficiente e robusta. Deve existir uma preocupação constante sobre o processo de coleta, armazenamento e processamento dos dados. Além disso, os algoritmos usados para tarefas como clusterização e predição devem ser bem pensados e bem configurados. Dados com alto grau de confiabilidade e boas análises são elementos fundamentais para que boas estratégias sejam desenhadas, mas o contrário também é verdade.
                </p>
                <p class="SubTitle">Cuidados e Preocupações Atuais</p>
                <p class="NormalText">
                  A regulamentação em torno da privacidade de dados, como o GDPR na Europa e a LGPD no Brasil, impõe restrições rigorosas sobre o uso de dados pessoais. Empresas que adotam estratégias de Retail Media devem garantir conformidade com essas leis, adotando práticas de coleta de dados consentida e transparente. A confiança do consumidor é essencial, e práticas questionáveis podem não apenas resultar em penalidades legais, mas também danificar a reputação da marca.
                </p>
                <p class="SubTitle">Aplicação de Machine Learning e AI</p>
                <p class="NormalText">
                  O Machine Learning (ML) e a Inteligência Artificial (AI) oferecem possibilidades empolgantes para o Retail Media, desde a otimização de campanhas publicitárias até a personalização da experiência de compra. Algoritmos de aprendizado de máquina podem prever o comportamento do consumidor, identificar tendências de compra e otimizar a alocação de anúncios em tempo real. Essas tecnologias também podem ajudar a identificar padrões de navegação que seres humanos dificilmente conseguiriam detectar, melhorando a segmentação de anúncios e aumentando a eficiência das campanhas.
                </p>
                <p class="NormalText">
                  Trabalhando no mercado de Dados e Martech por quase 10 anos e como pesquisador acadêmico em Graph Neural Networks (GNN), vejo que existe ainda um oceano de possibilidades para novas aplicações de AI e ML no contexto de Retail Media que poderiam otimizar os resultados obtidos para marca e para o varejista, e também melhorar significativamente a experiência do usuário. Mas para que aplicações como estas se tornem realidade, o negócio precisa estar bem estruturado no que tange à coleta e armazenamento de dados.
                </p>
                <p class="SubTitle">Impacto no Futuro das Compras Online</p>
                <p class="NormalText">
                  A integração do Retail Media no e-commerce está definindo o futuro das compras online, tornando-as mais personalizadas, eficientes e integradas. À medida que a tecnologia evolui, podemos esperar uma experiência de compra online ainda mais imersiva e interativa, onde os anúncios serão tão relevantes e personalizados que se integrarão de forma indistinguível à experiência de compra, melhorando tanto a satisfação do consumidor quanto as taxas de conversão para os varejistas. Quando as marcas obtêm insights mais profundos sobre seus consumidores, elas podem oferecer anúncios e produtos que atendam às necessidades e preferências específicas de cada usuário. Isso não apenas aumenta as vendas e a fidelidade à marca, mas também melhora a satisfação do cliente, criando uma experiência de compra online mais intuitiva e personalizada.
                </p>
            </div>
        )
    }
}

export default RetailMedia;
