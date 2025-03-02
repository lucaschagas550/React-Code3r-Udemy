import React from "react";

export default (props) => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input
                id="passoInput"
                type="number"
                value={props.passo}
                onChange={e => props.setPasso(+e.target.value)} //Chama funcao setPasso com novo valor do passo como parametro
                // Apenas props.setPasso nao funcionaria porque precisa do valor
                // .o + converte a string do evento que sera um numero, para numero
            />
        </div>
    );
};