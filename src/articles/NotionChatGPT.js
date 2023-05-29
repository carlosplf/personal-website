import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


class NotionChatGPT{
    getTitle() {
        return(
            <h1 className="ArticleTitle"> Report de tarefas com Notion e ChatGPT.</h1>
        );
    }

    getDate() {
        return(
            <p className="ArticleDate"> 27 de Maio de 2023.</p>
        );
    }

    getBody() {
        return(
            <div className="ArticleBody">
                <p class="NormalText">
                    Já faz um tempo que uso o Notion para me organizar com minhas tarefas, anotações, estudos e 
                    projetos. Trabalho com o Notion aberto o tempo todo e lá faço anotações de reuniões, insiro 
                    tarefas no formato 'ToDo list' e faço anotações sobre minhas prioridades e projetos. Também o uso 
                    constantemente enquanto estudo e planejo meus projetos pessoais, como este.
                </p>
                <p class="NormalText"></p>
                <p class="NormalText">
                    Com isso em mente, pensei que seria interessante criar algum sistema que me trouxesse algumas informações 
                    do meu Notion para o meu email diariamente. Dessa forma, eu teria essas informações dentro da mesma ferramenta 
                    onde organizo e consumo tantas informações importantes, como newsletters, resumos de projetos, emails pessoais e de trabalho, etc. 
                    Foi pensando nisso que criei a integração apresentada aqui, onde a ideia é <span className="bold">trazer para minha caixa de email todos os dias 
                    as minhas tarefas com deadline mais próximo, ordenadas por data de entrega e prioridade.</span> Achei que o ChatGPT poderia 
                    me ajudar com a priorização das tarefas, e dei um jeito de inseri-lo nesse fluxo de coleta e envio de tarefas.
                </p>
                <p class="NormalText">
                    Minha ideia aqui é explicar o que fiz e como executar para que, quem sabe, eu possa tornar o dia de alguém melhor.
                </p>
                <p class="NormalText">Todo o projeto é aberto e pode ser encontrado em meu <a href="https://github.com/carlosplf/personal-notion-integration">GitHub</a>. 
                    Tenho planos de tornar o software mais fácil de usar, onde não existe a necessidade de mexer com código. Planos futuros :)
                </p>

                <div className="ArticleImg">
                    <img src="images/example-email.png" alt="Email example"/>
                    <p>Exemplo de email que chega em minha caixa de entrada.</p>
                </div>
                
                <p class="SubTitle">&#128221; Antes da automação, o Notion</p>
                <p class="NormalText">
                    Para que a automação funcione, é necessário que o Notion integrado ao projeto siga alguns padrões no controle de tarefas. 
                    O termo 'Painel de Controle' é simplesmente um nome para um dataset do Notion, que contém as tarefas a serem realizadas. 
                    <span className="bold"> Cada 'Tarefa' é uma entrada no dataset</span>, e precisa conter as Colunas (campos): 'Title' (campo padrão), 'Tags', 'Deadline', 'ASAP' (checkbox) e 'DONE' (checkbox).
                </p>

                <p class="NormalText">
                    Abaixo temos um screenshot do meu Notion. Ele conta com vários outros datasets, regras de automação, ordenação e 
                    organização. Espero um dia poder mostrar mais sobre ele.
                </p>

                <div className="ArticleImg">
                    <img src="images/notion-example.png" alt="Notion example"/>
                    <p> Minha configuração atual de 'Painel de Controle', no Notion.</p>
                </div>
                
                <p class="SubTitle">&#128272; Chaves de APIs</p>
                <p class="NormalText">
                    O software precisará de algumas chaves e IDs para funcionar corretamente. Siga este <a href="https://developers.notion.com/docs/authorization">tutorial do próprio Notion</a> para conseguir 
                    o DATASET_ID e a API_KEY e armezene esses valores no arquivo <span className="italic"> 'notion_credentials.json'</span>.
                </p>
                <p class="NormalText">
                    Usaremos também a API do Google GMail para enviar os emails diários de report, e precisamos criar as credenciais de serviço.
                    Para isso, basta seguir o tutorial do próprio Google sobre o tema, <a href="https://developers.google.com/gmail/api/quickstart/python">encontrado aqui</a>. 
                    Siga os passos para a criação de um projeto no Google Cloud, habilitação da API do Gmail e download das credenciais. 
                    Salve o arquivo na raiz do projeto como <span className="italic">'credentials.json'</span>.
                </p>
                <p class="NormalText">
                    Após seguir o processo de criação de credenciais da API do Gmail e autenticação, <span className="bold">um arquivo 'token.json' deve ser criado na pasta do projeto</span>.
                </p>
                <p class="NormalText">
                    Por último, precisaremos de uma chave de API da OpenAI, para poder chamar o ChatGPT via API. Esse serviço é pago, e os valores 
                    podem ser encontrados <a href="https://openai.com/pricing"> aqui</a>. Para criar uma chave, basta estar logado no site da OpenAI e 
                    criar uma nova chave <a href="https://platform.openai.com/account/api-keys"> aqui</a>. Um meio de pagamento precisa estar configurado 
                    na plataforma. Salvaremos essa chave de API no documento <span className="italic"> '.env'</span>, na raiz do projeto, e seguinto o formato abaixo.
                </p>

                <SyntaxHighlighter language="javascript" style={docco}>
                    {"OPENAI_KEY=\"sk-rmiH...\""}
                </SyntaxHighlighter>

                <p class="SubTitle">&#128640; It's time to code</p>
                <p class="NormalText">
                    Todo o software foi feito usando a linguagem de programação Python, e abaixo explico algumas partes do projeto, para que fique claro como 
                    a integração foi feita.
                </p>

                <div className="ArticleImg">
                    <img src="images/software-flow.png" alt="Software schema and data flow."/>
                    <p> Resumo de fluxo dos dados e processamento.</p>
                </div>

                <p class="NormalText">
                    Primeiro, precisamos chamar a API do Notion e coletar as tarefas presentes em nosso 'Painel de Controle'. Para isso, 
                    vamos definir nossa <spam className="bold"> Chave de API e ID do Dataset</spam>. Ambas são armazenadas no 
                    arquivo <span className="italic"> 'notion_credentials.json'</span>, na raiz do projeto, seguindo o seguinte formato:
                </p>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {"{'database_id': '8be590...', 'notion_key': 'secret_x1ld67...'}"}
                </SyntaxHighlighter>

                <p class="NormalText">
                    Com os valores de Chave de API e ID do Dataset armazenados no arquivo JSON, o software irá carregar as 
                    credenciais e chamar a API para buscar as tarefas. O trecho de código abaixo é responsável por essa requisição. 
                    Vale ressaltar que todo o código está disponível no <a href="https://github.com/carlosplf/personal-notion-integration">GitHub</a>. 
                </p>

                <div className="ArticleImg">
                    <img src="images/code-01.png" alt="Python code to retrieve tasks from Notion"/>
                    <p>Código Python para recuperar as tarefas do Notion via API.</p>
                </div>

                <p class="NormalText">
                    Com as tarefas recuperadas do Notion, precisamos agora enviar para o ChatGPT <span className="bold">para que a AI faça a sua sugestão 
                    de priorização e estimativas de tempo</span>. Para isso, eu envio as informações das tarefas via API dentro de um prompt que montei, mostrado no 
                    exemplo abaixo. Pretendo melhorá-lo, e utilizar o ChatGPT de mais formas neste projeto.
                </p>

                <div className="ArticleImg">
                    <img src="images/code-02.png" alt="Python code to call ChatGPT API."/>
                    <p>Código Python para enviar as tarefas para o ChatGPT.</p>
                </div>

                <p class="NormalText">
                    Como última parte do projeto, vamos montar o HTML e enviar via email para o usuário. Para enviar o email, vamos 
                    chamar a API do GMail, e para isso iremos contar com as credenciais salvas em 'credentials.json', na raiz do projeto.
                    Também usei o <a href="https://jinja.palletsprojects.com/en/3.1.x/intro/">Jinja2</a> para montar o HTML. O HTML base 
                    que serve como template para o email pode ser encontrado na pasta 'templates/' do projeto.
                </p>
                <p class="NormalText">
                    O trecho de código abaixo mostra um pouco do processo para enviar o email com as tarefas.
                </p>

                <div className="ArticleImg">
                    <img src="images/code-03.png" alt="Python code to send email with tasks."/>
                    <p>Código Python para enviar o report de tarefas via email.</p>
                </div>

                <p class="NormalText">
                    Lembrando que as configurações de endereço de emails (tanto o 'from' quanto o 'to'), bem como o nome do usuário que irá 
                    receber o report, podem ser encontradas e modificadas no arquivo 'email_config.json', seguindo o formato mostrado abaixo.
                </p>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {"\n{\n    \"email_from\": \"example_email@gmail.com\", \n    \"email_to\": \"example_email@gmail.com\", \n    \"display_name\": \"Carlos\"\n}"}
                </SyntaxHighlighter>

                <p class="SubTitle">&#127919; Resumindo...</p>
                <p class="NormalText">
                    O repositório no GitHub contém as instruções mais diretas (e talvez mais completas) de como rodar o programa. 
                    Mas, tentando colocar de forma mais prática, <span className="bold">montei um passo a passo:</span>
                </p>
                <p className="NormalText">
                    <ol>
                        <li>Garanta que o 'Painel de Controle' no Notion esteja configurado corretamente, contendo os campos necessários.</li>
                        <li>Crie uma chave de API Notion e colete o Dataset ID.</li>
                        <li>Crie um projeto no Google Cloud e uma credenciais para o uso da API do Gmail.</li>
                        <li>Crie uma chave de API na OpenAI para uso do ChatGPT.</li>
                        <li>Configure as opções de emails no 'email_config.json'.</li>
                        <li>Garanta que os arquivos 'credentials.json', 'notion_credentials.json', '.env' e 'email_config.json' estejam preenchidos corretamente e no local correto (raiz do projeto).</li>
                        <li>Instale as bibliotecas Python necessárias presentes no 'requirements.txt'.</li>
                        <li>Execute o arquivo 'run.py'.</li>
                    </ol>  
                </p>

                <p class="SubTitle">Conclusão</p>
                <p class="NormalText">
                    Escrevi esse texto como forma de registro na construção de um pequeno software que já está me ajudando a me organizar melhor, e espero 
                    que esse registro possa funcionar também como fonte de conhecimento para outras pessoas. 
                    O sistema tem um propósito direto e simples, e se baseia no uso de tecnologias comuns e APIs bem consolidadas. Entretanto, isso não o torna 
                    menos relevante. Receber um resumo diário de tarefas e compromissos me ajuda e pode ajudar outras pessoas, e é isso que importa &#128517;.
                </p>

            </div>
        );
    }
}


export default NotionChatGPT;
