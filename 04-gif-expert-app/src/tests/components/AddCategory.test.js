import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();            // jest nos permite saber cuando fue llamada la funcion, como fue llamada, que argumentos se les paso, etc.
    let wrapper = shallow(<AddCategory setCategories={ setCategories }/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    })
 
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', {target: { value }});

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('el form no debe postear la informacion con submit', () =>{
        const form = wrapper.find('form').simulate('submit', { preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled(); // con el not niego la funcion (esto quiere decir que no ha sido llamada)
    });

    test('debe llamar el setCategories y limpiar la caja de texto', () =>{
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {target: { value }});

        const form = wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);       // evalua que la funcion haya sido llamada solo una vez
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function)); // evalua que se llame con una funcion
        expect(input.prop('value')).toBe('');               // con el prop obtengo el valor del input en ese momento

    })
})