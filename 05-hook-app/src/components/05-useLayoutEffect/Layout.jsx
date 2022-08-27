import React from "react";
import { useFetch, useCounter } from "../../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
  const { state, increment, decrement, reset } = useCounter(1);

  const { data, isLoading, hasErrors } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking bad quotes</h1>
      <h2>Layout</h2>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote}/>}
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={increment}
      >
        Next quoute
      </button>
    </>
  );
};
