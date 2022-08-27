import { screen, render, fireEvent } from "@testing-library/react";
import { TodoItem } from '../../src/components/08-useReducer/TodoItem';

describe('Pruebas sobre el componente <TodoItem />', () => {
    const todo = {
        id: 1,
        description: 'todo 1',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();       // se limpian los mocks antes de cada prueba
    });

    test('debe mostrar el todo pendiente a completar', () => {
        render(<TodoItem item={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />);
        const liElement = screen.getByRole('listitem');
        const spanElement = screen.getByLabelText('span');

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        expect(spanElement.className).toContain('align-self-center');  // se usa to Contain para probar que contiene esa clase (independientemente si tiene otras)
        expect(spanElement.className).not.toContain('align-self-left');
    });

    test('debe mostrar el todo ompletado', () => {

        todo.done = true;

        render(<TodoItem item={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />);
        const spanElement = screen.getByLabelText('span');
        const buttonElement = screen.getByRole('button', { name: 'Borrar' });
        fireEvent.click(spanElement);
        fireEvent.click(buttonElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id); // prueba que ha sido llamado con ese parametro
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });
})