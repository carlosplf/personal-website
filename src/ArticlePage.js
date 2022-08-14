import Header from './Header.js';
import './ArticlePage.css';


function ArticlePage(props) {
    return(
        <div className="ArticlePage">
            <Header/>
            <div className="ArticleContainer">
                <div className="TitleContainer">
                    {props.content.title()}
                </div>
                <div className="BodyContainer">
                    {props.content.body()}
                </div>
            </div>
        </div>
    );
}

export default ArticlePage;
