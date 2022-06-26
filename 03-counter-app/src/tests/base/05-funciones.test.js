import { getUser, getUsuarioActivo } from '../base/05-funciones';

describe('Pruebas en 05-funciones.js', () => {

    test('getUser debe retornar un objecto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        expect(user).toEqual(userTest);   // permite evaluar objectos(que tengan las mismas propiedades y los mismos valores) 
    });

    test('getUsuarioActivo debe retornar un usuario activo', () => {
        const userTest = {
            uid: 'ABC567',
            username: 'Pepito'
        }

        const activo = getUsuarioActivo(userTest.username);
        expect(activo).toEqual(userTest);
    })
})