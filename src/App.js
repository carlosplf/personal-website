import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Home.js';
import ArticlePage from './ArticlePage.js';
import RandomStuff from './RandomStuff.js';
import Zanzibar from './articles/Zanzibar.js';
import MaturidadeDados from './articles/MaturidadeDados.js';


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/maturidade_dados" element={<ArticlePage content={new MaturidadeDados()}/>} />
            <Route path="/zanzibar" element={<ArticlePage content={new Zanzibar()}/>} />
        </Routes>
    </div>
  );
}

export default App;
