import PrimeraApp from "../PrimeraApp";
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';


describe('Prueba <PrimeraApp/>', () => {

    /* test('debe mostrar el msj Hola soy Goku', () => {    // prueba comun sin usar la libreria 'Enzime'

        const saludo = 'Hola soy Goku';

        const { getByText } = render(<PrimeraApp saludo={saludo}/>);

        expect(getByText(saludo)).toBeInTheDocument();
    }) */

    test('debe mostrar <PrimeraApp/> correctamente', () => {
        const saludo = 'Hola soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();                  // hace que se cree un snapshot
    });

    test('debe mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola soy Goku';
        const subtitulo = 'Hola soy un subtitulo';
        const wrapper = shallow(
            <PrimeraApp 
            saludo={saludo} 
            subtitulo={subtitulo}/>
        );

        const textoParrafo = wrapper.find('#sub').text();             // esto funciona igual que el querySelector, en este caso obtengo el texto del de la etiqueta que tiene ese id
       
        expect(textoParrafo).toBe(subtitulo);
    })
})