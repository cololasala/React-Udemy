import { useRef } from "react";
import React from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const click = () => {
    console.log(inputRef);
    inputRef.current.select();
  };

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Ingrese su nombre"
      />

      <button className="btn btn-primary mt-2" onClick={click}> {/* al hacer click pone el focus en el input */}
        Set focus
      </button>
    </>
  );
};
