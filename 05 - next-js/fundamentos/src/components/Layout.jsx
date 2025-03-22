import Link from "next/link";
import Styles from '../styles/Layout.module.css';

//props.children renderiza o conteudo dentro das tags do componente que o chamou
//Exemplo no componente Estiloso
export default function Layout(props) {
  return (
    <div className={Styles.layout}>
        <div className={Styles.cabecalho}>
            <h1>{props.Titulo}</h1>
            <Link href="/">Incio</Link>
        </div>
        <div className={Styles.conteudo}>
            {props.children}
        </div>
    </div>
  );
}
