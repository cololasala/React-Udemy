import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Prueba de <CounterApp /> component', () => {

    let wrapper = shallow(<CounterApp/>);    
    beforeEach(() => {                          // el beforeEach se ejecuta antes de todas las pruebas, es muy util para cuando necesitamos reutilizar la misma variable en muchos test y asi evitamos codigo duplicado
        wrapper = shallow(<CounterApp/>);   
    })

    test('debe mostrar <CounterApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar el valor pasado por props', () => {
        const numero = 100;
        const wrapper = shallow(<CounterApp value={numero}/>);

        const valorInicial = wrapper.find('h2').text();

        expect(Number(valorInicial)).toBe(numero);
    });

    test('debe incrementar el contador +1', () => {
        const btn1 = wrapper.find('button').at(0).simulate('click');          // obtenemos el primer boton segun su orden de posicion en el html y simulamos evento click
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');
    });

    test('debe decrementar el contador -1', () => {
        const btn1 = wrapper.find('button').at(2).simulate('click');          // obtenemos el primer boton segun su orden de posicion en el html y simulamos evento click
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('9');
        
    });

    test('debe resetear el valor del contador', () => {
        const wrapper = shallow(<CounterApp value={100}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('100');
    })
})