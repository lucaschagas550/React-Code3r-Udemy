import Cabecalho from "../components/Cabecalho";
import Navegador from '../components/Navegador';
import Layout from '../components/Layout';

export default function Exemplo() {
  return (
    <div>
      <Layout Titulo="Layout Componente">
        <h1>Exemplo</h1>
        <Cabecalho nome="teste" idade={26} ehLegal={true} titulo='Cabelho variavel no componente'/>
        <Navegador texto="Estiloso" destino="/estiloso"/>
        <Navegador texto="Incio" destino="/"/>
      </Layout>
    </div>
  );
}
