import getHeroeByIdAsync from "../base/09-promesas"
import heroes from "../data/heroes";

describe('prueba 09-promesas.js', () => {

    test('getHeroeByIdAsync debe retornar un heroe async', (done) => {  // el done me sirve para que funcione bien la prueba de la promesa
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });
    });

    test('debe obtener un error si el heroe no existe', (done) => {
        const id = 99;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            })
    })
})