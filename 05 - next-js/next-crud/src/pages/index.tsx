import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4'),
  ]

  return (
    <div
      className={`
      flex justify-center items-start h-screen
      bg-gradient-to-r from bg-purple-500 to-blue-600
      text-white scroll-auto
    `}
    >
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}/>
      </Layout>
    </div>
  );
}
