import { CodeBlock, atomOneDark } from "react-code-blocks";


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
                <p class="NormalText">Todo o projeto é aberto e pode ser encontrado em meu <a href="https://github.com/carlosplf/personal-notion-integration"><i className="fa fa-external-link"></i> GitHub</a>. 
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
                    O software precisará de algumas chaves e IDs para funcionar corretamente. Siga este <a href="https://developers.notion.com/docs/authorization"><i className="fa fa-external-link"></i> tutorial do próprio Notion</a> para conseguir 
                    o DATASET_ID e a API_KEY e armezene esses valores no arquivo <span className="italic"> '.env'</span>.
                </p>
                <p class="NormalText">
                    Usaremos também a API do Google GMail para enviar os emails diários de report, e precisamos criar as credenciais de serviço.
                    Para isso, basta seguir o tutorial do próprio Google sobre o tema, <a href="https://developers.google.com/gmail/api/quickstart/python"><i className="fa fa-external-link"></i> encontrado aqui</a>. 
                    Siga os passos para a criação de um projeto no Google Cloud, habilitação da API do Gmail e download das credenciais. 
                    Salve o arquivo na raiz do projeto como <span className="italic">'credentials.json'</span>.
                </p>
                <p class="NormalText">
                    Após seguir o processo de criação de credenciais da API do Gmail e autenticação, <span className="bold">um arquivo 'token.json' deve ser criado na pasta do projeto</span>.
                </p>
                <p class="NormalText">
                    Por último, precisaremos de uma chave de API da OpenAI, para poder chamar o ChatGPT via API. Esse serviço é pago, e os valores 
                    podem ser encontrados <a href="https://openai.com/pricing"><i className="fa fa-external-link"></i>  aqui</a>. Para criar uma chave, basta estar logado no site da OpenAI e 
                    criar uma nova chave <a href="https://platform.openai.com/account/api-keys"><i className="fa fa-external-link"></i>  aqui</a>. Um meio de pagamento precisa estar configurado 
                    na plataforma. Salvaremos essa chave de API no documento <span className="italic"> '.env'</span> na raiz do projeto.
                </p>

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
                    arquivo <span className="italic"> '.env'</span>, na raiz do projeto, seguindo o seguinte formato:
                </p>

                <CodeBlock
                    text={"OPENAI_KEY=\"sk-rmiH...\"\
                        \nEMAIL_FROM=\"example@gmail.com\"\
                        \nEMAIL_TO=\"example@gmail.com\"\
                        \nDISPLAY_NAME=\"Carlos\"\
                        \nNOTION_DATABASE_ID=\"8be43e...\"\
                        \nNOTION_API_KEY=\"secret_x0l...\"\
                    "}
                    language={"javascript"}
                    showLineNumbers={true}
                    startingLineNumber={1}
                    theme={atomOneDark}
                />

                <p class="NormalText">
                    Com os valores de Chave de API e ID do Dataset armazenados no arquivo JSON, o software irá carregar as 
                    credenciais e chamar a API para buscar as tarefas. O trecho de código abaixo é responsável por essa requisição. 
                    Vale ressaltar que todo o código está disponível no <a href="https://github.com/carlosplf/personal-notion-integration"><i className="fa fa-external-link"></i> GitHub</a>. 
                </p>

                <CodeBlock
                    text={'def collect_tasks_from_control_panel(n_days=7):\n'+
                    '    """\n'+
                    '    Connect to Notion API and collect Tasks from "Control Panel" database.\n'+
                    '    """\n'+
                    '    notion_credentials = load_notion_credentials()\n'+
                    '    today = datetime.datetime.now()\n'+
                    '    delta = datetime.timedelta(days=n_days)\n'+
                    '    one_week = today + delta\n'+
                    '    one_week = one_week.isoformat()\n'+
                    '\n'+
                    '    url = "https://api.notion.com/v1/databases/" + \\n'+
                    '        notion_credentials["database_id"] + "/query"\n'+
                    '\n'+
                    '    payload = {\n'+
                    '        "filter": {\n'+
                    '            "and": [\n'+
                    '                {\n'+
                    '                    "property": "DONE",\n'+
                    '                    "checkbox": {"equals": False},\n'+
                    '                },\n'+
                    '                {\n'+
                    '                    "property": "Deadline",\n'+
                    '                    "date": {"before": str(one_week)}\n'+
                    '                }\n'+
                    '            ]\n'+
                    '        }\n'+
                    '    }\n'+
                    '\n'+
                    '    headers = {\n'+
                    '        "accept": "application/json",\n'+
                    '        "Authorization": "Bearer " + notion_credentials["api_key"] + "",\n'+
                    '        "Notion-Version": "2022-06-28",\n'+
                    '        "content-type": "application/json"\n'+
                    '    }\n'+
                    '\n'+
                    '    print("Collecting tasks from Notion...")\n'+
                    '\n'+
                    '    response = requests.post(url, json=payload, headers=headers)\n'+
                    '\n'+
                    '    data = json.loads(response.text)\n'+
                    '\n'+
                    '    all_task_data = []\n'+
                    '\n'+
                    '    for d in data["results"]:\n'+
                    '        all_task_data.append(\n'+
                    '            {\n'+
                    '                "name": d["properties"]["Task"]["title"][0]["text"]["content"],\n'+
                    '                "deadline": d["properties"]["Deadline"]["date"]["start"],\n'+
                    '            }\n'+
                    '        )\n'+
                    '\n'+
                    '    sorted_tasks = sorted(all_task_data, key=lambda d: d["deadline"])\n'+
                    '\n'+
                    '    print("Done.")\n'+
                    '    return sorted_tasks'}
                    language={"python"}
                    showLineNumbers={true}
                    startingLineNumber={1}
                    theme={atomOneDark}
                />

                <p class="NormalText">
                    Com as tarefas recuperadas do Notion, precisamos agora enviar para o ChatGPT <span className="bold">para que a AI faça a sua sugestão 
                    de priorização e estimativas de tempo</span>. Para isso, eu envio as informações das tarefas via API dentro de um prompt que montei, mostrado no 
                    exemplo abaixo. Pretendo melhorá-lo, e utilizar o ChatGPT de mais formas neste projeto.
                </p>

                <CodeBlock
                    text={'import os\n'+
                    'import openai\n'+
                    'from dotenv import load_dotenv\n'+
                    '\n'+
                    '\n'+
                    'def call_openai_assistant(tasks):\n'+
                    '    load_dotenv()\n'+
                    '    openai.api_key = os.getenv("OPENAI_KEY")\n'+
                    '\n'+
                    '    print("Calling ChatGPT. This can take a while...")\n'+
                    '\n'+
                    '    completion = openai.ChatCompletion.create(\n'+
                    '        model="gpt-3.5-turbo",\n'+
                    '        messages=[\n'+
                    '            {\n'+
                    '                "role": "assistant",\n'+
                    '                "content": build_message(tasks)\n'+
                    '            }\n'+
                    '        ]\n'+
                    '    )\n'+
                    '\n'+
                    '    answer = completion.choices[0].message.content\n'+
                    '    return answer\n'+
                    '\n'+
                    '\n'+
                    'def build_message(tasks):\n'+
                    '    message = "Using few words, please help me to prioritize " + \\ \n'+
                    '        "the following tasks. Answer in portuguese. Explain the " + \\ \n'+
                    '        "importance of each one of the tasks and why they are " + \\ \n'+
                    '        "piority or not when compared to the others. " + \\ \n'+
                    '        "Also estimate the time to complete each one." + \\ \n'+
                    '        "\\n Instructions:" + \\ \n'+
                    '        "\\n- Be brief and explain the prioritization." + \\ \n'+
                    '        "\\n- Tasks are in portuguese." + \\ \n'+
                    '        "\\n- Answer with the format: #. <task_description> " + \\ \n'+
                    '        "- (<explanation_about_importance>) - <time_estimation>" + \\ \n'+
                    '        "\\nTasks: "\\ \n'+ 
                    '\n'+
                    '    for task in tasks:\n'+
                    '        message += "\\n - " + task["name"]\n'+
                    '\n'+
                    '    return message'}
                    language={"python"}
                    showLineNumbers={true}
                    startingLineNumber={1}
                    theme={atomOneDark}
                />

                <p class="NormalText">
                    Como última parte do projeto, vamos montar o HTML e enviar via email para o usuário. Para enviar o email, vamos 
                    chamar a API do GMail, e para isso iremos contar com as credenciais salvas em 'credentials.json', na raiz do projeto.
                    Também usei o <a href="https://jinja.palletsprojects.com/en/3.1.x/intro/"><i className="fa fa-external-link"></i> Jinja2</a> para montar o HTML. O HTML base 
                    que serve como template para o email pode ser encontrado na pasta 'templates/' do projeto.
                </p>
                <p class="NormalText">
                    O trecho de código abaixo mostra um pouco do processo para enviar o email com as tarefas.
                </p>

                <CodeBlock
                    text={'def send_email_with_tasks(all_tasks, chatgpt_answer):\n'+
                    '    """\n'+
                    '    Considering a already created token.json file based on GCloud credentials,\n'+
                    '    send an email using GMail API.\n'+
                    '    """\n'+
                    '    print("Sending email...")\n'+
                    '    creds = Credentials.from_authorized_user_file("token.json", SCOPES)\n'+
                    '    email_config = load_email_config()\n'+
                    '    email_message = build_email_body(\n'+
                    '        all_tasks,\n'+
                    '        email_config["display_name"],\n'+
                    '        chatgpt_answer\n'+
                    '    )\n'+
                    '\n'+
                    '    try:\n'+
                    '        service = build("gmail", "v1", credentials=creds)\n'+
                    '        message = MIMEText(email_message, "html")\n'+
                    '\n'+
                    '        message["To"] = email_config["email_to"]\n'+
                    '        message["From"] = email_config["email_from"]\n'+
                    '        message["Subject"] = "My Notion Bot - Tasks"\n'+
                    '\n'+
                    '        encoded_message = base64.urlsafe_b64encode(message.as_bytes()) \\n'+
                    '            .decode()\n'+
                    '\n'+
                    '        create_message = {\n'+
                    '            "raw": encoded_message\n'+
                    '        }\n'+
                    '\n'+
                    '        send_message = (service.users().messages().send\n'+
                    '                        (userId="me", body=create_message).execute())\n'+
                    '\n'+
                    '        print("Done.")\n'+
                    '\n'+
                    '    except HttpError as error:\n'+
                    '        print(F"An error occurred: {error}")\n'+
                    '        send_message = None\n'+
                    '\n'+
                    '    return send_message'}
                    language={"python"}
                    showLineNumbers={true}
                    startingLineNumber={1}
                    theme={atomOneDark}
                />

                <p class="NormalText">
                    <span className="bold">IMPORTANTE:</span> as configurações de endereço de emails (tanto o 'from' quanto o 'to'), bem como o nome do usuário que irá 
                    receber o report, podem ser inseridas e modificadas no arquivo '.env'.
                </p>
                
                <p class="SubTitle">&#127919; Resumindo...</p>
                <p class="NormalText">
                    O repositório no GitHub contém as instruções mais diretas (e talvez mais completas) de como rodar o programa. 
                    Mas, tentando colocar de forma mais prática, <span className="bold">este é o fluxo que deve ser seguido:</span>
                </p>
                <p className="NormalText">
                    <ol>
                        <li>Garanta que o 'Painel de Controle' no Notion esteja configurado corretamente, contendo os campos necessários.</li>
                        <li>Preencha o arquivo '.env' com as credenciais de Notion, Gmail e ChatGPT.</li>
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
