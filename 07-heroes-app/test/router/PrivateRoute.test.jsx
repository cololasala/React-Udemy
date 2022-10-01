import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router';

describe('Pruebas sobre PrivateRoutes', () => {

    test('debe mostrar el children si no esta autenticadot', () => { 
        const contextValue = {
            logged: true
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <PrivateRoute>
                    <h1>Ruta privada</h1>
                </PrivateRoute>
            </AuthContext.Provider>
        );

        screen.debug();
        expect(screen.getByText('Ruta privada')).toBeTruthy();
     })
})