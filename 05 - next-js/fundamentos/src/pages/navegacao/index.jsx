import Layout from '../../components/Layout';
import Navegador from '../../components/Navegador';

export default function Navegacao(){
    return (
        <div>
        <Layout Titulo="Exemplo de Navegação #01">
            <h1>Navegação</h1>
            <Navegador texto="Incio" destino="/" cor='crimson'/>
        </Layout>
        </div>
    )
}