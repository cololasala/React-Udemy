import { types } from "../../../src/auth";

describe('pruebas sobre types', () => { 

    test('debe regresar los types definidos', () => {

        expect(types).toEqual({
            login: '[Auth] login',
            logout: '[Auth] logout',
        })
     });
 })