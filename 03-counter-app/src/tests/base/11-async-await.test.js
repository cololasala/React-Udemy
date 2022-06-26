import { getImagen } from "../../base/11-async-await"

describe('prueba 11-async-await.test.js', () => {

    test('debe retornar url de la imagen', async () => {    // hago que sea la prueba async asi debajo puedo usar el await
        const url = await getImagen();

        expect(typeof url).toBe('string');
    });

})