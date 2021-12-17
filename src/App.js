import React from "react";

import Templete from "./Templete";
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

    const Page = pages[page].component

    return (
        <Templete pages={pages} activePage={page} onChangePage={handleChangePage}>
         {Page && <Page/> }
        </Templete>
    )
}

export default App;