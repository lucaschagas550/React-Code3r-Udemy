import React from 'react'; //JSX Precisa deste import
import './Card.css'; //CSS

export default (props) =>
{
    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',
    }

    //props.children permite renderizar outros componentes
    return (
        <div className='Card' style={cardStyle}>
            <div className='Title'>{ props.titulo }</div>
            <div className='Content'>
                {props.children} 
            </div>
        </div>
    );
}