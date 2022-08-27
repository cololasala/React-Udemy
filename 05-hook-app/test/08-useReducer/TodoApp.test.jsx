import { screen, render } from "@testing-library/react";
import { TodoApp } from "../../src/components/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock("../../src/hooks/useTodos");

describe("Pruebas en el <TodoApp />", () => {
  useTodos.mockReturnValue({
    todo: [
      { id: 1, description: "todo 1", todo: false },
      { id: 2, description: "todo 2", todo: true },
    ],
    todosCount: 2,
    pendingsTodos: 1,
    onNewTodo: jest.fn(),
    onDeleteTodo: jest.fn(),
    onToggleTodo: jest.fn(),
  });

  test("debe mostrar el componente correctamente", () => {
    render(<TodoApp />);
    screen.debug();

    expect(screen.getByText('Todo list: 2')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});
