import styles from '../styles/Estiloso.module.css'
import Link from 'next/link';

export default function Estiloso(){
    return(
    <div className={styles.roxo}> 
        <h1>Estilos usando css modulos</h1>
        <Link href="/">Incio</Link>
    </div>
    )
}