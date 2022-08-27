import React, { useState } from "react";

export const AddTodo = ({ onNewTodo }) => {
  const initialForm = {
    id: new Date().getTime() * 3,
    description: "",
    done: false,
  }
  const [state, setState] = useState(initialForm);

  const handleInputChange = (e) => {
    setState({
      ...state,
      description: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (state.description.length < 1) return;
    onNewTodo(state);
    setState(initialForm); // reseteo form pasando el initialForm
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Que hay que hacer"
          value={state.description}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
        </button>
      </form>
    </>
  );
};
