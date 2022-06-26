// uso funcion flecha que retorna implicitamente un objeto
const getUsuarioActivo = (nombre) => ({
    uid:'12345',
    username: nombre
});
const usuario = getUsuarioActivo("colo");
// console.log(usuario)
/* **************************************************************************** */
//uso desestruccturacion
const persona = {
    nombre: 'Tony',
    edad: 33,
    clave: '12312412',
    contacto: {
        telefono:'221-44555',
        email:'lolo@gmail.com'
    }
}

const { nombre, edad } = persona;
const { clave: clavemia } = persona; // renombre clave para usar "clavemia"
const { contacto: { telefono }} = persona; // saco contacto y de contacto saco telefono
//console.log(nombre, edad, clavemia)
console.log(telefono)

const retornarPersona = ({nombre, edad}) => { // puedo hacer desestruccturacion directamente en el parametro
    // console.log(nombre, edad)
}

retornarPersona(persona);

const retornarHeroe = ({nombre, edad}) => {
    return {
        nombre: nombre,
        edad: edad,
        poderes: {
            poder1: 'volar',
            poder2: 'fuerza'
        }
    }
}

const heroe = retornarHeroe(persona);
console.log(heroe);
const {poderes: {poder1, poder2} } = heroe; // aca obtengo las properties del objeto "poderes"

console.log(poder1, poder2)