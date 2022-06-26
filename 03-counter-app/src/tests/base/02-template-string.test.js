import '@testing-library/jest-dom';
import { getSaludo } from '../base/02-template-string'

describe('Pruebas en 02-template-strings.js', () => {

    test('getSaludo debe retornar Hola colo!', () => {
        const nombre = 'colo';
        const saludo = getSaludo(nombre);

       expect(saludo).toBe('Hola ' + nombre + "!");
    })

    test('deber retornar Hola Carlos! sin no hay ningun argumento', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!');
    })
});