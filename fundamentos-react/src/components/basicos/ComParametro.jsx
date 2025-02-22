import React from 'react'; //JSX Precisa deste import

export default function ComParametro(params)
{
    console.log(params);
    return (
        <div>
            <h2>{params.titulo}</h2>
            <h3>{params.subtitulo}</h3>
            <h3>{params.nota}</h3>
        </div>
    )
}