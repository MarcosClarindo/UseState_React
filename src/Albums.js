import React, {useEffect, useState} from 'react';
import Templete from './Templete';
import Loading from './Loading';

const Albums = () => {
const [isLoading, setIsLoanding] = useState(false)
const [albums, setAlbums] = useState([])

    // Fazendo uma chamada em uma API recomendado o uso do "userEffect"
    useEffect(() => {
        setIsLoanding(true)


        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json()) 
            .then(data => {
                setAlbums(data)
                setIsLoanding(false)
            })
    },[])
    return(
        <Templete title="Álbuns">
            <Loading visible = {isLoading}/>
            
           
            {
                albums.map(album => {
                    return (
                        <div>
                            <span>{album.title} - id: {album.id}</span>
                        </div>
                    )
                })
            }

        </Templete>
    )
}

export default Albums