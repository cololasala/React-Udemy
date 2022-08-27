import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, onDeleteTodo, onToggleTodo}) => {
  return (
    <>
        <ul className="list-group">
            {
              todos &&  todos.map(n => (
                    <TodoItem key={n.id} item={n} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/> /* El key se ponen aca */
                ))
            }
        </ul>
    </>
  )
}
