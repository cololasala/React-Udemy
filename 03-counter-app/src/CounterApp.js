import React, { useState } from 'react'
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10}) => {

    // const [nombre, setNombre] = useState('colo');       // useState retorna un array 
    // console.log(nombre, setNombre);

    const [counter, setCounter] = useState(value);  // retorna primero el counter con valor del value pasado del componente padre, y una funcion que incrementa ese counter

    const handleAdd = (e) => {
        //console.log("Incremento", e);
        setCounter(counter + 1);
        // setCounter( (c) => c + 1); // otra manera de hacer la funcion setCounter
    }

    const handleReset = () => {
        //console.log("Reseteo value");
        setCounter(value); // a counter le vuelvo a setear el valor de value (100 en este caso)
    }

    const handleSubstract = () => {
      //  console.log("Decremento");
        setCounter(counter - 1);            // a counter le seteo el valor actual de counter menos 1
    }

    return (                    // el primer argumento del onClick (el event), es pasado a handleAdd
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubstract}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;