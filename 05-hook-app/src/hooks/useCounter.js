import { useState } from 'react'

export const useCounter = (initialState = 10) => {  // si no paso nada se inicializa por defecto con 10
    const [state, setState] = useState(initialState);

    const increment = (value = 1) => {
        setState((current) => current + value);
    }

    const decrement = (factor = 1) => {
        setState((current) => current - factor);
    }

    const reset = () => {
        setState(initialState);
    }

    return {                    // retorno la logica de mi custom hook en este componente
        state,
        increment,
        decrement,
        reset
    }
}
