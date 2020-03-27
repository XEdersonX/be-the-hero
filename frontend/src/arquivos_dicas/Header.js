import React from 'react';

//o parametro da funcao tras a propriedade
export default function Header({children}){
    return(
        <header>
            <h1>{ children }</h1>
        </header>
    );
}

//export default Header;

// props.children