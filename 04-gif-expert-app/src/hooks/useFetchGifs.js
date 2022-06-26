import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => { // este custom hook sirve  para esperar las images y controlar el loading

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {           // controlo para que getGifs sea ejecutado solo 1 vez, el array vacio es un array de dependencias
        getGifs(category)
            .then(imgs =>
                setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false
                    });
                })              // se le saca 3000 seg para que ande el useFetchGifs.test.js
            )
            .catch(error => console.log(error));
    }, [category]);         // si la category cambia se ejecutara otra vez el useEffect

    return state;

}