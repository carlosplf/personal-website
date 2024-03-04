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
import RetailMedia from './articles/RetailMedia.js'
import GrafosEstrategia from './articles/GrafosEstrategia.js'


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/grafos-estrategia" element={<ArticlePage content={new GrafosEstrategia()}/>} />
            <Route path="/retail-media" element={<ArticlePage content={new RetailMedia()}/>} />
            <Route path="/maturidade_dados" element={<ArticlePage content={new MaturidadeDados()}/>} />
            <Route path="/zanzibar" element={<ArticlePage content={new Zanzibar()}/>} />
            <Route path="/notion-gpt" element={<ArticlePage content={new NotionChatGPT()}/>} />
            <Route path="/cats-and-dogs" element={<ArticlePage content={new CatsDogsProject()}/>} />
        </Routes>
    </div>
  );
}

export default App;
