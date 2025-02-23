import React from "react"; //JSX Precisa deste import
import "./App.css";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Card from "./layout/Card";

export default () => (
  <div className="App">
    <h1>Fundamento de React</h1>

    <div className="Cards">
      <Card titulo="#04 - Exemplo de Card" color="#090">
        <NumeroAleatorio numeroMinimo={1} numeroMaximo={10} />
        <NumeroAleatorio numeroMinimo={1} numeroMaximo={10} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#FA6900">
        <Fragmento></Fragmento>
      </Card>

      <Card titulo="#02 - Com parametro" color="#E94C6F">
        <ComParametro titulo="Aluno" subtitulo="Teste" nota={8} />
        <ComParametro titulo="Aluno" subtitulo="Teste" nota={8} />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#090">
        <Primeiro />
      </Card>
    </div>
  </div>
);
