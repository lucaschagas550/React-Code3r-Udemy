import React from "react"; //JSX Precisa deste import
import "./App.css";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Card from "./layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";

import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";

import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";

import Mega from "./components/mega/Mega";

export default () => (
  <div className="App">
    <h1>Fundamento de React</h1>
    
    <div className="Cards">
      
      <Card titulo="#13 - Mega" color="#B9006E">
          <Mega qtde={8}></Mega>
      </Card>

      <Card titulo="#12 - Contador" color="#424242">
        <Contador numeroInicial={10}></Contador>
      </Card>      
      
      <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
          <Input></Input>
      </Card>

      <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#59323C">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={21}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Fernando" }} />
                {/* <UsuarioInfo usuario={{}} />
                <UsuarioInfo /> */}
      </Card>

      <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#06 - Lista de Alunos" color="#090">
          <ListaAlunos />
      </Card>

      <Card titulo="#05 - Componentes com Filhos" color="#090">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Luis" />
          <FamiliaMembro nome="Ana" />
        </Familia>
      </Card>

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
