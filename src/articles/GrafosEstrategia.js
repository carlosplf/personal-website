import { CodeBlock, atomOneDark } from "react-code-blocks";


class GrafosEstrategia{
    getTitle() {
        return(
            <h1 className="ArticleTitle"> Como o uso de Grafos pode transformar Estratégias Digitais</h1>
        );
    }

    getDate() {
        return(
            <p className="ArticleDate"> 04 de Março de 2024.</p>
        );
    }

    getBody() {
        return(
            <div className="ArticleBody">
                <div className="ArticleImg">
                    <img src="images/money_graph.png" alt="Grafos e estratégias digitais."/>
                    <p></p>
                </div>
                <p class="NormalText">
                  Sabemos que atualmente as empresas possuem a sua disposição quantidades imensas de dados, principalmente dados first party, e que esses dados podem e devem ser usados para trazer novas análises, insights e estratégias para o negócio. Uma forma interessante de tratar esses dados e gerar novos insights, é através de estruturas de Grafos e tecnologias relacionadas. Estruturar os dados em forma de grafos abre gera novas oportunidades na análise e detecção de padrões. Em muitos casos, plataformas e softwares fazem o uso de grafos sem o conhecimento do usuário, mas eu acredito que as empresas e negócios podem se aproveitar mais deste mecanismos tão fascinante do mundo computacional.
                </p>
                <p class="NormalText">
                  Não à toa, eu faço hoje o meu mestrado acadêmico pela Universidade Federal de São Carlos justamente nesta área de pesquisa, mais especificamente em Graph Neural Networks, e espero poder trazer mais essa tecnologia para dentro do mercado de Digital e Performance. Temos um longo caminho pela frente e muitas oportunidades a serem exploradas. Mas, o que são grafos e como eles podem revolucionar suas estratégias digitais? Vamos analisar.
                </p>
                <p class="SubTitle">
                  O que são Grafos?
                </p>
                <p class="NormalText">
                  Grafos são estruturas matemáticas usadas para modelar relações entre objetos, pessoas, conceitos, ou qualquer outro elemento interconectado. Uma forma comum de ter dados representados como Grafos, é por exemplo na construção de um mapa de sua rede de amigos nas redes sociais. Neste mapa, cada pessoa é um ponto (ou "nó") e cada amizade é uma linha (ou "aresta") conectando dois pontos. Esse mapa é um exemplo de grafo comumente usado para apresentar o conceito. Outro bom exemplo, é a representação da jornada de compras e interações do usuário com um determinado website, onde podemos mapear cada interação como um nó, e as conexões entre interações como arestas.
                </p>
                <p class="SubTitle">
                  A Força dos Grafos em Dados e Marketing
                </p>
                <p class="SubTitle-2">
                  Entendendo Relações Complexas
                </p>
                <p class="NormalText">
                  Grafos permitem que empresas visualizem e analisem a complexidade das relações entre usuários, produtos, preferências, comportamentos e muito mais. Esta visão pode revelar padrões e tendências não óbvias, ajudando a entender melhor o comportamento do consumidor. Construir estruturas de grafos para representar os dados que temos em mãos abre muitas portas para o uso de algoritmos e tecnologias relacionadas, e isso ajuda na realização de novas análises de dados, detecção de padrões e predições.
                </p>
                <p class="SubTitle-2">
                  Personalização em Escala
                </p>
                <p class="NormalText">
                  Ao identificar como os usuários interagem entre si e com seus produtos ou serviços, os grafos possibilitam o uso de algumas tecnologias e algoritmos que podem ocasionar na criação de experiências altamente personalizadas. Isso pode significar recomendar o produto perfeito no momento certo ou sugerir conteúdo relevante que mantenha os usuários engajados. Além disso, a compreensão clara e estruturada em grafos da jornada do usuário pode possibilitar a criação de novas análises e estratégias para o Marketing de Performance, possibilitando o uso de novos algoritmos para detecção de canais ou caminhos de mídia mais relevantes, clusterização dos usuários de forma mais inteligente, entre outros.
                </p>
                <p class="SubTitle-2">
                  Otimização de Campanhas de Marketing
                </p>
                <p class="NormalText">
                  Com grafos, é possível mapear a jornada do cliente de forma mais precisa, identificando quais canais e pontos de contato são mais eficazes para diferentes segmentos de público. Isso permite alocar recursos de marketing de forma mais eficiente, aumentando o ROI de suas campanhas.
                </p>
                <p class="SubTitle-2">
                  Detecção de Fraude e Análise de Risco
                </p>
                <p class="NormalText">
                  É comum se apoiar na estrutura de grafos no mapeamento de padrões incomuns que podem significar fraudes ou conexões suspeitas. Isso ajuda as equipes de segurança na identificação e combate às fraudes mais rapidamente. Isso é crucial em um ambiente digital onde a segurança dos dados é uma prioridade.
                </p>
                <p class="SubTitle-2">
                  Fomentando a Inovação
                </p>
                <p class="NormalText">
                  Ao explorar conexões inexploradas e padrões emergentes nos dados, os grafos podem abrir portas para novos produtos, serviços e estratégias de engajamento, mantendo sua empresa na vanguarda da inovação digital.
                </p>
                <p class="SubTitle">
                  Casos de Sucesso
                </p>
                <p class="NormalText">
                  Estruturas de Grafos são utilizadas a todo o tempo nas principais plataformas, e-commerces e empresas de Tecnologia. Empresas líderes em tecnologia, como Google e Facebook, já utilizam grafos para melhorar a pesquisa na web, otimizar feeds de notícias e muito mais. Seus sucessos demonstram o potencial dos grafos para transformar dados em insights acionáveis que impulsionam o crescimento e o engajamento. Na Media.Monks, utilizamos grafos para estruturar os dados e realizar análises preditivas e de correlação, ajudando os nossos clientes na detecção de comportamentos mais ou menos relevantes na jornada do usuário, ou propondo novos modelos de atribuição para canais de mídia, por exemplo.
                </p>
                <p class="SubTitle">
                  Conclusão
                </p>
                <p class="NormalText">
                  A aplicação de grafos no marketing e análise de dados oferece uma maneira robusta e flexível de entender e atuar sobre as complexas redes de relações digitais. À medida que avançamos na era digital, as empresas que adotarem essa abordagem com certeza estarão melhor equipadas para entender seus clientes, otimizar suas estratégias e liderar em seus mercados. Além disso, áreas como a do foco do meu mestrado (GNN) e outras relacionadas estão ainda passando por constantes mudanças e revoluções, onde novas ideias e algoritmos são propostos o tempo todo.
                </p>
            </div>
        )
    }
}

export default GrafosEstrategia;

