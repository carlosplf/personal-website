import { CodeBlock, atomOneDark } from "react-code-blocks";


class CatsDogsProject{
    getTitle() {
        return(
            <h1 className="ArticleTitle"> Criando um modelo de classificação de Cães e Gatos.</h1>
        );
    }

    getDate() {
        return(
            <p className="ArticleDate"> 04 de Junho de 2023.</p>
        );
    }

    getBody() {
        return(
            <div className="ArticleBody">
                <p class="NormalText">
                    Neste artigo eu explico como usei o Tensorflow para implementar uma CNN capaz de classificar o animal 
                    presente em uma foto como Gato ou Cachorro.
                </p>

                <p class="SubTitle">Cats and Dogs dataset</p>
                <p class="NormalText">Para este projeto, utilizei para o treinamento da CNN o dataset Cats and Dogs, que contém 25000 
                imagens de Gatos e Cachorros já classificadas. O dataset por ser encontrado  <a href="https://www.microsoft.com/en-us/download/details.aspx?id=54765"><i className="fa fa-external-link"></i> aqui</a>.</p>
            </div>
        );
    }
}


export default CatsDogsProject;
