import React from "react";
import Header from './Header'
import Nav from "./Nav";

// Children se refere ao conteúdo "filho" de uma página
const Templete = ({children, pages, activePage, onChangePage}) => {
    const title = pages[activePage].text

    return(
        <>
            <Header title={title}/>
            <Nav pages={pages} onChangePage={onChangePage}/>
            {children}
        </>
    )
}

export default Templete