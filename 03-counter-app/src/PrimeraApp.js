// Functional components
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo = 'Soy un subtitulo' }) => {  // desestruccturacion para obtener saludo, subtitulo por defecto

    const holaMundo = 'Hola mundo desde component';

    return (
        <>
            <h1>{holaMundo}</h1>
            <p>Mi primer app</p>
            <p>{saludo}</p>
            <p id="sub">{ subtitulo }</p>
        </>
    )
}

PrimeraApp.propTypes = {        // permite manejar el tipo y si la property es requerida
    saludo: PropTypes.string.isRequired
}

/* PrimeraApp.defaultProps = {                  // otra manera de hacer properties por defecto
    subtitulo: "por defecto desde defaultProps"
} */

export default PrimeraApp;