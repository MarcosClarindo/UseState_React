import React from "react";
import Templete from "./Templete";
import './Counter.css'
import { useState, useEffect } from 'react';

const  Counter = () => {
    const [contador, setContador] = useState(0)

    useEffect(() =>{
        console.log('renderizou')
    }, [contador])

    const handleOnClick = operador => {
        const novoValor = operador === '+' 
        ? contador + 1
        : contador - 1


        setContador(novoValor)
    }
    return(
        <Templete title="Contador">
            <div className="counter">
                <span>{contador}</span>
                <button onClick={() => handleOnClick('-')}>-</button>
                <button onClick={() =>handleOnClick('+')}>+</button>
            </div>
        </Templete>
    )
}

export default Counter