import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas sobre el hook useForm', () => {

    const initialForm = {
        name: 'Luciano',
        email: 'luciano@hotmail.com'
    }

    test('debe retornar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        console.log(result.current);

        expect(result.current).toEqual(
            {
                stateForm: { name: initialForm.name, email: initialForm.email },
                handleInputChange: expect.any(Function),
                onResetForm: expect.any(Function)
            }
        )
    });

    test('debe de cambiar el nombre del formulario', () => {
        const newValue = 'Juan';
        const { result } = renderHook(() => useForm(initialForm));
        const { handleInputChange } = result.current;

        const event = { target: {
            name: 'name',
            value: newValue
        }}

        act(() => {
            handleInputChange(event);
        });

        expect(result.current.stateForm.name).toBe(newValue);
    });

    test('debe realizar el reset del formulario', () => {
        const newValue = 'Juan';
        const { result } = renderHook(() => useForm(initialForm));
        const { handleInputChange, onResetForm } = result.current;

        const event = { target: {
            name: 'name',
            value: newValue
        }}

        act(() => {
            handleInputChange(event);
            onResetForm();
        });

        expect(result.current.stateForm.name).toBe(initialForm.name);
    });
})