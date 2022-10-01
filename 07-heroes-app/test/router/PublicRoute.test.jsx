import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router';

describe('Prueba en <PublicRoute/>', () => {

    test('debe mostrar el children si no esta autenticado', () => {

        const contextValue = {
            logged: false
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        screen.debug();
        expect(screen.getByText('Ruta publica')).toBeTruthy();
    });

    test('debe mostrar el Navigate si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id:'123',
                name: 'Luciano'
            }
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        screen.debug();
        expect(screen.getByText('Ruta publica')).toBeTruthy();
    });
});