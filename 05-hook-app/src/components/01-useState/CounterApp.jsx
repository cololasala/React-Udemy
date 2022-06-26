import React, { useState } from 'react';
import './Counter.css'

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
        counter5: 50,
    });

    const { counter1, counter2 } = state;

    return (
        <>
            {/* <h1>Counter {counter}</h1> */}
            <h2>Counter1 {counter1}</h2>
            <h2>Counter2 {counter2}</h2>
            <hr />
            <button className='btn btn-primary' onClick={() => {
                setState({...state, counter1: counter1 + 1 })   // con el operador spread podemos obtener una copia de todo el estado anterior y a eso luego modificamos el primer elemento
            }}>+ 1</button>
        </>
    )
}
