import React from "react";
import Header from './Header'

// Children se refere ao conteúdo "filho" de uma página
const Templete = ({children, title}) => {

    return(
        <>
            <Header title={title}/>
            {children}
        </>
    )
}

export default Templete