import React from 'react'; //JSX Precisa deste import
import './Card.css'; //CSS

export default (props) =>
{
    //props.children permite renderizar outros componentes
    return (
        <div className='Card'>
            <div className='Title'>{ props.titulo }</div>
            <div className='Content'>
                {props.children} 
            </div>
        </div>
    );
}