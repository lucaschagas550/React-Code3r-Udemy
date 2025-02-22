import React from "react"; //JSX Precisa deste import

export default (props) =>
{
    const numero = parseInt(Math.random() * (props.numeroMaximo - props.numeroMinimo)) + props.numeroMinimo;
    console.log(numero);
    return (
        <div>
            {numero}
        </div>
    )
}