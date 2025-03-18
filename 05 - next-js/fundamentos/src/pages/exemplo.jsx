import Cabecalho from "@/components/cabecalho";
import Link from 'next/link';

export default function Exemplo() {
  return (
    <div>
      <h1>Exemplo</h1>
      <Cabecalho nome="teste" idade={26} ehLegal={true} titulo='Cabelho variavel no componente'/>
      <Link href="/">Incio</Link>
    </div>
  );
}
