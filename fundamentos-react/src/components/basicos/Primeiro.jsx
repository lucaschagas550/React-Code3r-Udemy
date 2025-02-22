import React from 'react'; //JSX Precisa deste import

export default function Primeiro() {
    const msg = 'seja bem vindo';
    return (
        <div>
            <h2>Primeiro componente</h2>
            <h2>{msg}</h2>
        </div>
    );
}