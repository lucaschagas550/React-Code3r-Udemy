import React from 'react'

import { useParams } from 'react-router-dom'

const Param = () => {
    const { id } = useParams() //Pega valor do parametro da rota, id tem que ser mesmo nome do parametro da rota em Content.tsx
    return (
        <div className="Param">
            <h1>Param</h1>
            <h2>Valor: {id}!</h2>
        </div>
    )
}

export default Param