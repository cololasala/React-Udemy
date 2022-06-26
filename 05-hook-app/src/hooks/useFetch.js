import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,                             // data que viene del fetch
        isLoading: true,                       // para saber si esta cargando
        hasErrors: null
    })

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true
        });

        const res = await fetch(url);
        const data = await res.json();

        setState({
            data: data,
            isLoading: false,
            hasErrors: null
        });
        console.log(data)
    }

    useEffect(() => {
        getFetch();

        return () => {}
    }, [url]);           // cada vez que el url cambie se volvera a disparar el useEffect

    return {
        data: state.data,                             
        isLoading: state.isLoading,                       
        hasErrors: state.hasErrors
    }
}
