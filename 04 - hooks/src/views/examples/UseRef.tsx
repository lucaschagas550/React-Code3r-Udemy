import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const merge = function (s1: string, s2: string): string {
  const maxLength = Math.max(s1.length, s2.length);
  return Array.from(
    { length: maxLength },
    (_, i) => (s1[i] || "") + (s2[i] || "")
  ).join("");
};

//UseRef eh utilizado para ter uma referencia de um objeto que voce pode controlar quando quiser .current
//Sem componente ser renderizado novamente
const UseRef = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const count = useRef(0);
  const myInput1 = useRef<HTMLInputElement>(null);
  const myInput2 = useRef<HTMLInputElement>(null);

  useEffect(
    function () {
      console.log("value1");
      count.current = count.current + 1;
      console.log(count.current);
      myInput2.current?.focus();
    },
    [value1]
  );

  useEffect(
    function () {
      console.log("value2");
      count.current = count.current + 1;
      console.log(count.current);
      myInput1.current?.focus();
    },
    [value2]
  );

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>

        <input
          type="text"
          className="input"
          ref={myInput1}
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <input
          type="text"
          className="input"
          ref={myInput2}
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;
