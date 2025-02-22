import React from "react"; //JSX Precisa deste import

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default () => (
  <div id="app">
    <Fragmento />
    <Primeiro />
    <ComParametro
      titulo="Segundo Componente"
      subtitulo="Muito legal!"
      nota={9.3}
    />
    <h1>Olá, React!</h1>
  </div>
);
