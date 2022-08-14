import Header from './Header.js';
import './ArticlePage.css';


function ArticlePage(props) {
    return(
        <div className="ArticlePage">
            <Header/>
            <div className="ArticleContainer">
                <div className="TitleContainer">
                    {props.content.getTitle()}
                </div>
                <div className="DateContainer">
                    {props.content.getDate()}
                </div>
                <div className="BodyContainer">
                    {props.content.getBody()}
                </div>
            </div>
        </div>
    );
}

export default ArticlePage;
