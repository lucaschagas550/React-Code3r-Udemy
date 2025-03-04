import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

enum eParImpar{
    PAR = 'PAR',
    IMPAR ='IMPAR'
}

function calcFatorial(num: number): number {
    if (!Number.isFinite(num) || num < 0 || !Number.isInteger(num)) return -1; // Verifica entrada inválida
    if (num === 0) return 1;

    let resultado = 1;
    for (let i = num; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}

const UseEffect = () => {
  // Ex #01
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);

  // Ex #02
  const [status, setStatus] = useState(eParImpar.IMPAR);

  useEffect(
    function () {
      setFatorial(calcFatorial(number));
    },
    [number] //Sempre que o numero ser modificado, o useEffect será chamado
  );

  useEffect(
    function () {
      if (fatorial > 1000000) {
        document.title = "Eita!!!";
      }
    },
    [fatorial]
  );

  useEffect(
    function () {
      setStatus(number % 2 === 0 ?  eParImpar.PAR : eParImpar.IMPAR);
    },
    [number] //Sempre que o numero ser modificado, o useEffect será chamado
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? "Não existe" : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(+e.target.value)} //+ converte para number
        />
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
