import React from "react"; //JSX Precisa deste import

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Card from "./layout/Card";

export default () => (
  <div id="app">
    
    <Card titulo="#04 - Exemplo de Card">
      <NumeroAleatorio numeroMinimo={1} numeroMaximo={10}/>
      <NumeroAleatorio numeroMinimo={1} numeroMaximo={10}/>
    </Card>

    <Card titulo="#03 - Fragmento">
      <Fragmento></Fragmento>
    </Card>

    <Card titulo="#02 - Com parametro">
      <NumeroAleatorio numeroMinimo={1} numeroMaximo={10}/>
      <NumeroAleatorio numeroMinimo={1} numeroMaximo={10}/>
      <NumeroAleatorio numeroMinimo={1} numeroMaximo={10}/>
    </Card>

    <Card titulo="#01 - Primeiro Componente">
      <Primeiro/>
    </Card>

  </div>
);
