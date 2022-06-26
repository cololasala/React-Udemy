import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('prueba de custom hook', () => {

    test('debe retornar el estado inicial', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch')); // uso de la libreria react-hooks
        const { data, loading } = result.current;
        await waitForNextUpdate(); // indica cuando hubo un cambio de estado en nuestro custom hook

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('debe retornar un array de imagenes y loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Hello'));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    })
})