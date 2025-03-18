import Cabecalho from "@/components/cabecalho";

export default function Exemplo() {
  return (
    <div>
      <h1>Exemplo</h1>
      <Cabecalho nome="teste" idade={26} ehLegal={true} titulo='Cabelho variavel no componente'/>
    </div>
  );
}
