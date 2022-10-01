import { types } from '../../src/auth';
import { authReducer } from '../../src/auth/context';

describe('Pruebas sobre AuthReducer', () => {

    test('debe retornar el estado por defecto', () => {

        const action = {
            type: '',
        }
        const state = authReducer({}, action);

        expect(state).toEqual({})
    });

    test('debe (login) llamar al login, autenticar y poner logged en true', () => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: 'Luciano'
            }
        }

        const state = authReducer({}, action);

        expect(state.logged).toBeTruthy();
        expect(state.user.name).toBe('Luciano');

        expect(state).toEqual({
            logged: true,
            user: action.payload
        });

    });

    test('debe de (logout) borrar el nombre de usuario y poner logged en false', () => {
        const action = {
            type: types.logout,
            payload: {
                id: 'ABC',
                name: 'Luciano'
            }
        }
        const state = authReducer({ logged: true }, action);

        expect(state.logged).toBeFalsy();
    });
})