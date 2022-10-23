import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false
    },
    reducers: {
        startLoadingPokemon: (state) => { // el state aca parece que lo paso cuando se llama al reducer pero no se pone cuando se llama
            state.isLoading = true;
        },
        setPokemons: (state, action) => {   // el action ya viene configurado como un objeto "payload"
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        }
    },
})


// Action creators are generated for each case reducer function
export const { startLoadingPokemon, setPokemons } = pokemonSlice.actions;