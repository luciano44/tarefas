import React from 'react';
import '../styles/button.scss'

const Button = ({onClick, children}) => {
    return ( 
        <button onClick={onClick} className="button">
            {children}
        </button>
     );
}

 
export default Button;