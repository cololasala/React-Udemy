import React from "react";
import { useFetch, useCounter } from "../../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const MultipleCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(1);

  const { data, isLoading, hasErrors } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );
  const { author, quote } = !!data && data[0]; // como no puedo desectructurar algo de null o undefined puedo usar la doble negacion (!!) para manejar esos casos. En este caso transformo el undefined a false para poder usar la desesctructuracion.

  return (
    <>
      <h1>Breaking bad quotes</h1>
      <hr />

      {/* {isLoading ? (      // codigo sin usar componentes 
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{author}</p>
          <footer className="blockquote-footer">{quote}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" disabled={isLoading} onClick={increment}>
        Next quoute
      </button> */}

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote}/>}   {/* Usando componentes */}
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={increment}
      >
        Next quote
      </button>
    </>
  );
};
