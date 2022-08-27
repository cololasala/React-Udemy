import React, { useState, useMemo } from "react";
import { useCounter } from "../../hooks";

const heavyStuff = (iterator) => {
  for (let i = 0; i < iterator; i++) {
    console.log("Ahi vamos");
  }

  return `${iterator} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { state, increment } = useCounter(2000);
  const [show, setShow] = useState(false);
  const memorizedValue = useMemo(() => heavyStuff(state), [state]); //memo solo sera cuando cambie el state

  return (
    <>
      <h1>Memorize</h1>
      <h2>
        Counter: <small>{state}</small>
      </h2>
      <hr />

      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary mt-2 me-2" onClick={increment}>
        +1
      </button>

      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => setShow(!show)}
      >
        Show/Hide: {String(show)}
      </button>
    </>
  );
};
