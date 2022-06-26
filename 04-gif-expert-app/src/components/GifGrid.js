import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {

   // const [images, setImages] = useState([]);
    const { data: images, loading } = useFetchGifs(category);

    //useEffect(() => {       // controlo para que getGifs sea ejecutado solo 1 vez, el array vacio es un array de dependencias
    //    getGifs(category)
    //        .then( imgs => setImages(imgs)) // otra manera es solo ponerlo asi -> setImages (solo eso funciona igual)
    //        .catch(error => console.log(error));
    //}, [category]);         // si la category cambia se ejecutara otra vez el useEffect

    return (
        <>
            <h3>{category}</h3>
            { loading && <p className='animate__animated animate__flash'>Loading...</p> } {/* sin tengo loading entonces muestro la etiqueta */}

            <div className='card-grid'>
                {
                    images.map(img =>
                        <GifItem
                            key={img.id}
                            {...img} />
                    )
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;