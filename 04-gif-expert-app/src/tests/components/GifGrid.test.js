import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');              // permite fingir cualquier llamada a useFetchGifs y controlar la info que responde

describe('prueba <GifGrid />', () => {

    test('debe crearse correctamente', () => {
        useFetchGifs.mockReturnValue({          // permite el retorno de los valores de mi useFetchGifs
            data: [],
            loading: true
        });

        const category = '';
        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar items cuando se cargan imagenes usando useFetchGifs', () => {
        const gifs = [{
            id: 'abc',
            url: 'http://localhost:2000/cualquiercosa.jpg',
            title: 'nada'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const category = '';
        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifItem').length).toBe(gifs.length);
    });
})