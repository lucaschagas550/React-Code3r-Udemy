import React from 'react'; //JSX Precisa deste import
import FamiliaMembro from './FamiliaMembro'

export default (props) =>{
    return(
    <div>
        <FamiliaMembro nome='Pedro' sobrenome={props.sobrenome} />
        <FamiliaMembro nome='Luis' {...props}/>
        <FamiliaMembro nome='Ana' sobrenome={props.sobrenome}/>
    </div>
    );
}