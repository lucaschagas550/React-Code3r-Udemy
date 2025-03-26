import { useState } from "react";
import Layout from "../components/Layout";

export default function Integracao() {
  const [codigo, setCodigo] = useState(1);
  const [cliente, setCliente] = useState({});

  async function obterClliente() {
    console.log("Buscando cliente...");

    const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`);
    const data = await resp.json();
    setCliente(data);

    //promisse
    // fetch("http://localhost:3000/api/clientes/123")
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     console.log("Cliente recebido:", data);
    //     setCliente(data);
    //   })
    //   .catch((err) => console.error("Erro na fetch:", err));
  }
  

  return (
    <div>
      <Layout Titulo="Integração">
        <input
          type="number"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <button onClick={obterClliente}>Obter Cliente</button>

        <ul>
          <li>Código: {cliente?.id}</li>
          <li>Nome: {cliente?.nome}</li>
          <li>E-mail: {cliente?.email}</li>
        </ul>
      </Layout>
    </div>
  );
}
