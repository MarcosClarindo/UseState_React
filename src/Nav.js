import React from "react";

const Nav = ({pages, onChangePage}) =>{
    // váriavel para criar botões
   const pageNames = Object.keys(pages)

    return(
        <nav>
            {
                pageNames.map(page => <button onClick={() => onChangePage(page)}>{pages[page].text}</button>)
            }
        </nav>
    )
}

export default Nav