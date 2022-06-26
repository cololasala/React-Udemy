describe('Pruebas en el archivo demo.js', () => {       // el describe sirve para agrupar pruebas 
    
    test("los string deben ser iguales", () => {       // para hacer test
    
        // inicializacion
        const msj = 'Hola mundo';
        const msj2 = 'Hola mundo';
    
        expect(msj).toBe(msj2);             // toBe es mejor que ===
    });
})