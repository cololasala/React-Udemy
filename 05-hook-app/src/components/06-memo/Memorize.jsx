import React, { useState } from 'react';
import { useCounter } from '../../hooks';
import { Small } from './Small';

export const Memorize = () => {
    
    const {state, increment} = useCounter(10);
    const [ show, setShow ] = useState(false);

  return (
    <>
        <h1>Memorize</h1>
        <h2> Counter: <Small contador={state}></Small></h2>
        <hr />

        <button className='btn btn-primary mt-2 me-2' onClick={increment}>
            +1
        </button>

        <button className='btn btn-outline-primary mt-2' onClick={ () => setShow( !show )}>
            Show/Hide: { String(show) }
        </button>
    </>
  )
}
