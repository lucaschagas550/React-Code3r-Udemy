import React from 'react'; //JSX Precisa deste import

export default (props) => {
    return(
    <div>
        {props.nome} <strong>{props.sobrenome}</strong>
    </div>
    );
}