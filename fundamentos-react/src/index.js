import './index.css';
import React from 'react'; //JSX Precisa deste import
import ReactDOM from 'react-dom/client';

import Primeiro from './components/basicos/Primeiro'; 

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);
root.render(
    <div>
        <Primeiro />
        <h1>Olá, React!</h1>
    </div>
);

