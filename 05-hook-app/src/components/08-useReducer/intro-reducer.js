const initialState = [{             // el estado inicial es un array de tareas(todo)
    id: 1,
    todo: 'Recolectar piedra del alma',
    done: false
}]

const todoReducer = (state = initialState, action = {}) => {

    if (action.type === '[TODO] add todo') {
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {           // nueva tarea a agregar
    id: 2,
    todo: 'Recolectar piedra del poder',
    done: false
}

const addTodoAction = {             // accion de agregar un nuevo 'todo'
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);