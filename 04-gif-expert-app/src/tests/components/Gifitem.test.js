import { shallow } from 'enzyme';
import GifItem from '../../components/GifItem';

describe('Prueba de componente GifItem.js', () => {

    const title = 'Un titulo';
    const url = 'http://localhost/algo.jpg'
    const wrapper = shallow(<GifItem title={title} url={url} />);

    test('debe mostrar <GifItem/> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title)
    });

    test('debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.html());             puedo ver como es la etiqueta con sus propiedades
        // console.log(img.props())             puedo ver como son las propiedades de la etiqueta (es mejor usar esto)

        expect(img.prop('src')).toBe(url);      // img.prop('src') obtengo el valor en el src
    });

    test('div debe tener la clase animate__fadeInDown', () => {
        const div = wrapper.find('div');
        const classAnimate = 'animate__fadeInDown';
       // console.log(div.prop('className').split(' ')[2]);

      //  expect(div.prop('className').split(' ')[2]).toBe(classAnimate); esta es otra manera de hacerlo

        expect(div.prop('className').includes(classAnimate)).toBe(true);
    })
})