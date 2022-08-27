import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHook } from '../../src/components/03-examples/MultipleCustomHook';
import { useCounter, useFetch } from "../../src/hooks";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");
describe('Pruebas en <MultipleCustomHooks />', () => {

    beforeEach(() => {
        jest.clearAllMocks();       // se limpian los mocks antes de cada prueba
    });

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        state: 1,
        increment: mockIncrement
    });

    test('debe mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHook />);
        // screen.debug();     // muestra el jsx del component
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking bad quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeTruthy();
    });

    test('debe mostrar un quote', () => {
        useFetch.mockReturnValue({      // seteamos el mock fetch
            data: [{ author: 'Luciano', quote: 'Hola mundo' }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHook />);
        const nextButton = screen.getByRole('button', { name: 'Next quote' });

        expect(screen.getByText('Hola mundo')).toBeTruthy();
        expect(nextButton.disabled).toBeFalsy();
    });

    test('debe de llamar a la funcion incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Luciano', quote: 'Hola mundo' }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHook />);
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled(); // cuando se clickea el boton se espera que se llama la funcion de increment
    });
})