import { todoReducer } from '../../src/components/08-useReducer/todoReducer';

describe('Pruebas sobre el todoReducer', () => {
    const initialState = [{
        id: 1,
        description: 'Primer todo',
        done: false
    }];

    test('debe retornar el estado inicial', () => {
        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState); // podria usarse el toEqual ya que es un object
    });

    test('debe de agregar un todo', () => {
        const action = {
            type: '[TODO] Add todo',
            payload: {
                id: 2,
                description: 'Nuevo todo',
                done: false
            }
        }
        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload); // evalua que el action contenga el payload
    });

    test('debe eliminar un todo', () => {
        const action = {
            type: '[TODO] Add todo',
            payload: {
                id: 2,
                description: 'Nuevo todo',
                done: false
            }
        }

        let newState = todoReducer(initialState, action);

        const action2 = {
            type: '[TODO] Remove todo',
            payload: 2
        }

        newState = todoReducer(initialState, action2);

        expect(newState.length).toBe(1);
    });

    test('debe realizar el cambio de toggle', () => {
        const action = {
            type: '[TODO] Toggle todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action);

        expect(newState[0].done).toBeTruthy();
    })
})