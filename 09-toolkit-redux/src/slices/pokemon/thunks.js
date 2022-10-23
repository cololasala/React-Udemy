import { startLoadingPokemon, setPokemons } from './index';
import { pokemonApi } from '../../api';

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemon());

        // usando fetch
       /* const response = await fetch(`${pokemonApi.baseUrl}/pokemon?limit=10&offset=${page * 10}`);
        const data = await response.json();
        console.log(data);
        dispatch(setPokemons({ pokemons: data.results, page: page + 1 })); */

         // usando axios 
        const response = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
        const data = response.data;
        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
    }
}