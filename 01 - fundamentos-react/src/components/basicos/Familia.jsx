import React from 'react'; //JSX Precisa deste import
import FamiliaMembro from './FamiliaMembro'

export default (props) =>{
    return(
    <div>
        {
            React.Children.map(props.children, (child) => {
                return React.cloneElement(child, props)
            })
        }
    </div>
    );
}