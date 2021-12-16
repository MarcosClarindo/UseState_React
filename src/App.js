import React from "react";
import Counter from './Counter'
import Albums from "./Albums";
import User from "./User"
import { useState } from 'react';

const defaultPage = 'albums'

const pages = {
    albums: {
        text: 'Álbums',
        component: Albums,
    },
    counter: {
        text: 'Contador',
        component: Counter,
    },
    user: {
        text: 'Usuários',
        component: User,
    }
}


function App(){
    const [page, setPage] = useState(defaultPage)

    const handleChangePage = page => {
        setPage(page)
    }

   const Page = pages [page].component

    // váriavel para criar botões
   const pageNames = Object.keys(pages)
    return (
    <>
        {
            pageNames.map(page => <button onClick={() => handleChangePage(page)}>{pages[page].text}</button>)
        }

        {Page && <Page/> }
        
    </>
    )
}

export default App;