import { act, renderHook } from '@testing-library/react'; // permite renderizar el hook, nos retorna info acerca de como se encuentra el hook en ese momento
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el use counter', () => {

    test('debe retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter());  // el result es como se encuentra el hook en ese momento
        const { state, increment, decrement, reset } = result.current;

        expect(state).toBe(10);
        expect(decrement).toEqual(expect.any(Function)); // se espera que sean una Function
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('debe generar el counter con el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { state } = result.current;

        expect(state).toBe(100);
    });

    test('debe incrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100));
        const { state, increment } = result.current;

        act(() => {             // cuando se actualizan valores se debe engrapar en esta funcion "act"
            increment();
            increment(2);
        })

        expect(result.current.state).toBe(103);
    });

    test('debe decrementar el contador', () => {
        const { result } = renderHook(() => useCounter(50));
        const { state, decrement } = result.current;

        act(() => {
            decrement();
            decrement(5);
        })

        expect(result.current.state).toBe(44);
    });

    test('debe resetear el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { state, reset, increment, decrement } = result.current;

        act(() => {         
            increment(1);
            decrement(5);
            reset();
        })

        expect(result.current.state).toBe(10);
    });
})