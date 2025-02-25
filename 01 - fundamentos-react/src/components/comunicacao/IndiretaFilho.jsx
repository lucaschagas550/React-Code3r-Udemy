import React from 'react'

export default props => {
    const cb = props.quandoClicar //Metodo do Pai quandoClicar, pode ser usado em vez de props.quandoClicar
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => props.quandoClicar('João', gerarIdade(), gerarNerd())}>
                Fornecer Informações
            </button>
        </div>
    )
}