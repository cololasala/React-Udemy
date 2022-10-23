import axios from 'axios';

export const pokemonApi = axios.create({     // creo una instacia de axios y pongo url base
    'baseURL': 'https://pokeapi.co/api/v2'
});