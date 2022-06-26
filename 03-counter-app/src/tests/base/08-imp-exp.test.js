import { getHeroeById, getHeroesByOwner } from '../base/08-imp-exp';
import heroes from '../data/heroes';

describe('Pruebas de 08-imp-exp.js', () => {

    test('debe retornar un heroe por id', () => {
        const id = 1;
        const heroeById = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id); 

        expect(heroeById).toEqual(heroeData);  // en el expect va la funcion de prueba, en el toEqual va el resultado esperado
    });

    test('debe retornar undefined si el heroe no existe', () => {
        const id = 13;
        const heroeById = getHeroeById(id);

        expect(heroeById).toBe(undefined); // podemos usar el toBe xq undefined es un primitivo de Javascript
    });

    test('debe retornar un arreglo con los heroes de DC', () => {
        const heroesDc = getHeroesByOwner('DC');
        const heroesData = heroes.filter(h => h.owner === 'DC');

        expect(heroesDc).toEqual(heroesData);
    });

    test('debe retornar una longitud 2 de los heroes de Marvel', () => {
        const heroesMarvel = getHeroesByOwner('Marvel');

        expect(heroesMarvel.length).toBe(2);        // en el expect va la funcion de prueba, en el toBe va el resultado esperado
    });
})