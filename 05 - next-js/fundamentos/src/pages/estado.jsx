import { useState } from "react";
import Layout from "../components/Layout";
import Navegador from "../components/Navegador";

export default function Estado() {

  const [numero, setNumero] = useState(0);
  console.log(numero);

  function incrementar(){
    setNumero(numero + 1);
  }

  return (
    <div>
      <Layout Titulo="Estado">
        <span>{numero}</span>
        <button onClick={() => incrementar()}>Incremento</button>
        <Navegador texto="Incio" destino="/" cor="crimson" />
      </Layout>
    </div>
  );
}
