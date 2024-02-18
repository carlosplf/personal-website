import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Home.js';
import ArticlePage from './ArticlePage.js';
import Zanzibar from './articles/Zanzibar.js';
import MaturidadeDados from './articles/MaturidadeDados.js';
import NotionChatGPT from './articles/NotionChatGPT';
import CatsDogsProject from './articles/CatsDogsProject';


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/maturidade_dados" element={<ArticlePage content={new MaturidadeDados()}/>} />
            <Route path="/zanzibar" element={<ArticlePage content={new Zanzibar()}/>} />
            <Route path="/notion-gpt" element={<ArticlePage content={new NotionChatGPT()}/>} />
            <Route path="/cats-and-dogs" element={<ArticlePage content={new CatsDogsProject()}/>} />
        </Routes>
    </div>
  );
}

export default App;