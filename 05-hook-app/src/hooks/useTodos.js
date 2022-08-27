import { useReducer, useEffect } from "react";
import { todoReducer } from '../components/08-useReducer/todoReducer';

const initialState = [];
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init); // el primer argumento es nuestro Reducer, el segundo es nuestro initialState, el tercero seria nuestra funcion inicializadora (para casos pesados, en nuestro caso para inicializar con lo del localStorage)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const onNewTodo = (newTodo) => {
        const action = {
            type: '[TODO] Add todo',
            payload: newTodo,
        }

        dispatch(action);       // con el dispatch paso la action al reducer
    }

    const onDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove todo',
            payload: id,
        }

        dispatch(action);
    }

    const onToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle todo',
            payload: id
        }

        dispatch(action)
    }

    const pendingsTodos = () => {
        return todos.filter((todo) => todo.done === false).length;
    }

    return {
        todos,
        onNewTodo,
        onDeleteTodo,
        onToggleTodo,
        pendingsTodos,
        todosCount: todos.length
    }
}
