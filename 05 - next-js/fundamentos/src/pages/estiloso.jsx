import Layout from '../components/Layout';
import Styles from '../styles/Estiloso.module.css'
import Navegador from '../components/Navegador';

export default function Estiloso(){
    return(
    <div className={Styles.roxo}> 
        <Layout Titulo="Layout Componente">
            <h1>Estilos usando css modulos</h1>
            <Navegador texto="Incio" destino="/" cor='crimson'/>
        </Layout>
    </div>
    )
}