import { getGifs } from '../../helpers/getGifs';

describe('Prueba de helper getGifs.js', () => {

    test('prueba de longitud de gifs', async() => {
        const gifs = await getGifs('One punch'); // el await espera al resultado de la promesa (en este caso el array de gifs)
        expect(gifs.length).toBe(10);
    });

    test('debe traer longitud cero si no paso categoria', async() => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    })
})