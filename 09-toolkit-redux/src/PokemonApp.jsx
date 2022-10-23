import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch(); // utilizo el dispatch para disparar cualquier accion
  const { pokemons, isLoading, page } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon api</h1>
      <hr />
      <span>{isLoading ? "Loading pokemons" : "Ready!"}</span>

      <ul>
        {pokemons.map((pokemon) => {
          return <li key={pokemon.name}>{pokemon.name}</li>;
        })}
      </ul>

      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
