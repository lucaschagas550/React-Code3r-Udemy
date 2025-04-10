import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 45, "2"),
    new Cliente("Carlos", 23, "3"),
    new Cliente("Pedro", 54, "4"),
  ];

  function selecionarCliente(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function excluirCliente(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
  }

  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

  return (
    <div
      className={`
      flex justify-center items-start h-screen
      bg-gradient-to-r from bg-purple-500 to-blue-600
      text-white scroll-auto
    `}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao
                cor="green"
                className="mb-4"
                onClick={() => setVisivel("form")}
              >
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <>
            <Formulario
              cliente={clientes[0]}
              cancelado={() => setVisivel("tabela")}
              clienteMudou={(cliente: Cliente) => salvarCliente(cliente)}
            />
          </>
        )}
      </Layout>
    </div>
  );
}
