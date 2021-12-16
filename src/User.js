import { useEffect, useState } from "react";
import React from "react";

const User = () => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState([])

    useEffect (() =>{
        setLoading(true)
    // Fazendo uma chamada em uma API recomendado o uso do "userEffect"  
    
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {

            setUser(data)
            setLoading(false)

        })

    },[])

    return (
        <>
        <h1>User</h1>

                {
                    loading ===  true ? 'Carregando...' : ''
                }

            {
                user.map(user => {
                    return (
                        // adicionando estylo
                        <div style={{margin: '10px'}}>
                            <b>Id:</b> {user.id}<br/>
                            <b>Nome:</b> {user.name}<br/>
                            <b>E-mail:</b> {user.email}<br/>
                            <b>phone:</b> {user.phone}<br/>
                           
                        </div>
                    )
                })
            }
        </>
    )
}

export default User