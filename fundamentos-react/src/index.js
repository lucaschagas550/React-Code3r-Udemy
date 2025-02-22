import './index.css';
import React from 'react'; //JSX Precisa deste import
import ReactDOM from 'react-dom/client';

import Primeiro from './components/basicos/Primeiro'; 
import ComParametro from './components/basicos/ComParametro';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);
root.render(
    <div>
        <Primeiro />
        <ComParametro 
            titulo="Segundo Componente" 
            subtitulo="Muito legal!"
            nota={9.3}/>
        <h1>Olá, React!</h1>
    </div>
);

