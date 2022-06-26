// Desesctructuracion en arrays
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3 ] = personajes;

//console.log(p3);

//Tarea
const useState = (valor) => {
    return [ valor, () => { console.log('Hola mundo')}];
}

const arr = useState('colo');

// arr[1]() // llamo al segundo elemento del array y llamo a la funcion con esos parentesis
const [nombre, setNombre] = arr; // usando desectruturacion 

console.log(nombre);
setNombre();