class Zanzibar {

    getTitle() {
        return(
            <h1 className="ArticleTitle"> Zanzibar: O Sistema de autorizações global do Google.</h1>
        );
    }

    getDate() {
        return(
            <p className="ArticleDate"> 14 de Agosto de 2022.</p>
        );
    }

    getBody() {
        return(
            <div className="ArticleBody">
                <p className="NormalText"> Estima-se que o Google possua hoje mais de 1 bilhão de usuários ativos no Google Drive e quase 2 bilhões de usuários ativos no GMail. Para controlar permissões, acessos e compartilhamentos, o Google desenvolveu um sistema global denominado <span className="bold">Zanzibar</span>. O sistema é usado em produtos do próprio Google como Drive, Maps e Photos, impactando a vida de bilhões de pessoas. Vamos ver como ele funciona, e como ele garante o controle de acessos e níveis de permissões em escala global e com baixa latência. Esse artigo é meramente um resumo do artigo original, que pode ser encontrado <a href="https://research.google/pubs/pub48190/">aqui</a>.</p>

                <p className="NormalText"> O objetivo do sistema é garantir que, em cada interação do usuário com algum documento no Google Drive, ou foto no Google Photos, por exemplo, exista uma verificação rápida e eficiente sobre as permissões daquele usuário para com o arquivo em questão. O sistema deve permitir que o usuário edite ou vsisualize de acordo com suas permissões, e isso deve considerar também cada versão do arquivo. Para que isso ocorra, o Google criou um sistema denominado Zanzibar, que verifica e controla permissões de usuários que utilizam inúmeros produtos Google em escala global.</p>

                <p className="SubTitle">Access Control Lists</p>

                <p className="NormalText"> O sistema usa como base um conjunto de estruturas de dados denominada <span className="bold">ACL (Access Control List) </span> e regras para garantir não somente que as permissões individuais de um arquivo sejam válidas, mas também regras de grupos e hierarquia. Um usuário que ganha acesso à uma pasta de arquivos, por exemplo, deve ter também as mesmas permissões em cada arquivo presente na pasta. Além disso, o sistema deve considerar também as versões de cada arquivo no controle de permissões. Ter a permissão agora para ver o conteúdo de um arquivo, não implica em ter a mesma permissão em versões futuras do conteúdo. Para que tudo isso seja possível e confiável, o Zanzibar usa também algumas regras de controle de estado e tempo, onde a ordem de cada evento é rigidamente controlada e considerada.</p>

                <p className="NormalText"> A ACL é uma estrutura essencial para que todo o mecanismo funcione. Uma ACL pode armazenar relações mais simples, como <span className="italic">"O usuário U possui relação R com o objeto O."</span>, ou então algumas regras mais complexas como <span className="italic">"O conjunto de usuários C possui relação R com o objeto O."</span>. Uma ACL pode ser representada da seguinte forma: </p> 

                <p className="Code"> ⟨tuple⟩ ::= ⟨object⟩‘#’⟨relation⟩‘@’⟨user⟩ </p>
                
                <p className="NormalText"> As ACLs representam inúmeras possibilidades de relações entre objetos e usuários. Elas são armazenadas no sistema em forma binária, para maior eficiência de leitura e escrita. Além disso, as elas podem armazenar mais informações do objeto, ou então informação sobre grupos de usuários. </p> 

                <p className="Code"> ⟨object⟩ ::= ⟨namespace⟩‘:’⟨object id⟩ <br></br> ⟨user⟩ ::= ⟨user id⟩ | ⟨userset⟩ </p>
                
                
                <p className="NormalText"> A mera existência e consulta das ACLs não garante que o sistema terá sempre consistência nas permissões verificadas e concedidas aos usuários. Vejamos por exemplo a seguinte situação: </p> 

                <p className="Code"> - <span className="italic altColor">User X</span> remove as permissões de <span className="italic altColor">User Y</span> de visualizar o conteúdo da <span className="italic altColor">Pasta P</span>. 
                    <br></br><br></br>- <span className="italic altColor">User X</span> convida <span className="italic altColor">User Z</span> para editar a pasta e adicionar mais arquivos.
                    <br></br><br></br>- <span className="italic altColor">User Y</span> não deveria ser capaz de ver os novos arquivos na pasta. Mas isso pode ocorrer caso o sistema não considere a ordem a qual as permissões foram alteradas, ou seja, a <span className="bold">ordem cronológica das ACLs</span>.
                </p>
                
                <p className="NormalText"> No exemplo citado acima, espera-se que o User Y não consiga visualizar nada após a remoção de sua permissão na pasta. Ou ele perde a permissão de visualizar o conteúdo da pasta como um todo, ou enxerga apenas tudo o que havia na pasta até o momento anterior à remoção de sua permissão.</p> 
                
                <p className="SubTitle">Zookie - Controle temporal.</p>
                
                <p className="NormalText">Para resolver esse problema, o Zanzibar concatena um timestamp <span className="italic">Tx</span> no momento de criação de cada ACL. Para verificar as permissão de um Objeto em sua versão no tempo <span className="italic">To</span>, faz-se uma consulta à base de ACLs que afetam aquele objeto, onde <span className="italic">Tx {"<"} To</span>. Ou seja, o sistema irá receber todas as atualizações de ACLs daquele objeto anteriores ao tempo de leitura <span className="italic">To</span>. Vale ressaltar que o tempo de leitura <span className="italic">To</span> não necessariamente é o tempo atual, mas sim o tempo de uma versão (ou snapshot) específica do Objeto ao qual está se fazendo a consulta.</p>

                <p className="NormalText">Para garantir consistência na checagem em cada snapshot (versão) do Objeto, o Zanzibar se apoia em um sistema de Tokens <span className="italic bold">(Zookie)</span>, salvos do lado do cliente em cada modificação do Objeto. Para cada modificação reliazada no Objeto (uma escrita em um documento no Google Docs, por exemplo) o cliente pede ao Zanzibar um Zookie, e salva do lado do cliente (client storage). O Zookie salvo contém um timestamp gerado pelo Zanzibar, que é mais novo (maior timestamp) do que os presentes em todos os ACLs daquele documento. Dessa forma, quando o cliente for realizar um ACL check, ele envia o Zookie para a versão que está verificando do Objeto, e os ACLs consultados serão apenas os que possuem um timestamp menor que o tempo no Zookie enviado. Para consultas do snapshot mais recente do Objeto, todos os ACLs serão retornados e avaliados, visto que o Zookie mais recente é sempre maior que os ACLs escritos.</p>
                
                <p className="SubTitle">Arquitetura e APIs.</p>

                <p className="NormalText"> A Arquitetura do Zanzibar vai muito além das ALCs e Zookies, e se aopia em um sistema completo de APIs e sistemas distribuídos. A imagem abaixo ilustra toda a arquitetura do sistema, e como os componentes e requisições se conectam.</p> 


                <div className="ArticleImg">
                    <img src="zanzibar-arch.jpeg" alt="Zanzibar"/>
                    <p> Arquitetura Zanzibar. Fonte: Google Zanzibar Paper (https://research.google/pubs/pub48190/) </p>
                </div>

                <p className="NormalText"> A API é disponibilizada para os clientes e outros compoenentes do sistema, para que regras de permissão sejam criadas, alteradas e consultadas. As rotas oferecidas pela API são:</p>
                
                <p className="NormalText">
                    <ul>
                        <li><spam className="bold">Read:</spam> para que o cliente possa consultar ACLs de Documentos, Usuários e ou grupos de usuários.</li>
                        <li><spam className="bold">Write:</spam> para que o cliente possa criar ou modificar ACLs.</li>
                        <li><spam className="bold">Watch:</spam> para que o cliente possa acompanhar atualizações de ACLs para um <spam className="italic">namespace</spam> específico. Para essa requisição, o cliente deve fornecer um token <spam className="italic">Zookie</spam>, e as atualizações enviadas pelo sistema serão do timestamp do <spam className="italic">Zookie</spam> (Tz) em diante.</li>
                        <li><spam className="bold">Check:</spam> para que o cliente possa verificar permissões de usuários e documentos. Antes de um usuário escrever qualquer coisa em um Documento do Google Docs, por exemplo, uma requisição de <spam className="italic">check</spam> é enviada ao Zanzibar.</li>
                        <li><spam className="bold">Expand:</spam> para que o cliente possa consutlar árvores de grupos e relações. Dada uma relação <spam className="italic">{"<"}object#relation{">"}</spam>, diferentemente das requisições do tipo <spam className="italic">Read</spam>, o sistema irá seguir as relações indiretas originadas por grupos de usuários e reescritas. Isso irá resultar em uma árvore de relações, que apontam para outras relações. Dessa forma, esse tipo de requisição permite o cliente saber quais usuários e objetos fazem parte da relação passada na chamada para a API. Descendo na árvore de relações e grupos.</li>
                    </ul>
                </p>
                
                <p className="SubTitle">Armazenamento das ACLs.</p>
                
                <p className="NormalText"> Os dados de relações são salvos em Banco de Dados (BDs) separados para cada <span className="italic">Namespace</span>. Cada cliente que utiliza o Zanzibar define o seu Namespace, com base no ID do Documento e os nomes das relações. Cada relação, inclusive em cada versão, é salva em uma tupla diferente no BD. Isso facilita para que o Zanzibar consiga enxergar as versões diferentes de cada ACL, bem como o timestamp de cada uma. Na grande maioria dos casos, o ID único de cada relação (Shard ID) no banco é definido pelo próprio ID do Objeto. Em alguns casos, o sistema pode configurar o Shard ID com base no ID do Objeto e nos IDs de Usuários. O Sistema também mantém um <span className="italic">changelog</span>  das alterações de cada ACL em suas versões. Isso é importante para que o sistema consiga responder rapidamente requisições de consulta de ACLs e suas alterações.</p> 
                
                <p className="SubTitle">Conclusão.</p>
                
                <p className="NormalText">O conteúdo descrito aqui apresenta apenas um resumo da arquitetura e funcionamento de um sistema complexo e extremamente necessário, que impacta a vida e trabalho de bilhões de pessoas. Para mais informações e detalhes, por favor, visite o artigo original.</p> 

            </div>
        );
    }
}

export default Zanzibar;
