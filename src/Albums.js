import React, {useEffect, useState} from 'react';

const Albums = () => {
const [loading, setLoanding] = useState(false)
const [albums, setAlbums] = useState([])

    // Fazendo uma chamada em uma API recomendado o uso do "userEffect"
    useEffect(() => {
        setLoanding(true)


        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json()) 
            .then(data => {
                setAlbums(data)
                setLoanding(false)
            })
    },[])
    return(
        <>

            <h1>Álbums</h1>
            
            {
                loading ===  true ? 'Carregando...' : ''
            }
            {
                albums.map(album => {
                    return (
                        <div>
                            <span>{album.title} - id: {album.id}</span>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Albums