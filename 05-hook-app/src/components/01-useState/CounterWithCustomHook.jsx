import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(22);


    return (
        <>
            <h1>Counter with hook: {state}</h1>
            <hr />

            <button className='btn btn-secondary me-3' onClick={() => {
                decrement(2)
            }}> -1 </button>
            <button className='btn btn-primary me-3' onClick={increment}> +1 </button>
            <button className='btn btn-success' onClick={reset}>Reset</button>
        </>
    )
}
