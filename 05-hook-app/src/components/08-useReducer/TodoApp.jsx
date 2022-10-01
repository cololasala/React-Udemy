import React from "react";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import { useTodos } from "../../hooks/useTodos";

export const TodoApp = () => {
  const { todos, todosCount, pendingsTodos, onNewTodo, onDeleteTodo, onToggleTodo } = useTodos(); // todos sera nuestra lista de tareas

  return (
    <>
      <h1>
        Todo list: {todosCount} <small>pendings: {pendingsTodos()}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar todo</h4>
          <AddTodo onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
};
