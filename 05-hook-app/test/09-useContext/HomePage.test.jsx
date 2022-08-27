import { render, screen } from "@testing-library/react";
import { HomePage } from '../../src/components/09-useContext/HomePage';
import { UserContext } from '../../src/components/09-useContext/context/UserContext';

describe('Pruebas sobre el componente <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Luciano'
    }

    test('debe mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage/>
            </UserContext.Provider>
        )
       // screen.debug();

        const preTag = screen.getByLabelText('pre');

        expect(preTag.innerHTML).toBe('null'); // el valor contenido en el pre debe ser "null"
    });

    test('debe mostrar el componente con el usuario', () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage/>
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre');

        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(String(user.id));

        
    });
})