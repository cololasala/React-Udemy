import getHeroeById from "./08-funciones-exportaciones";

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(3);

        if(heroe) {
            resolve(heroe);
        } else {
            reject('No se pudo encontrar el heroe')
        }
        
    }, 2000)
});

promise.then((heroe) => {
    console.log('El heroe es ', heroe.name)
}).catch(e => console.log(e))


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
    
            if(heroe) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el heroe')
            }
            
        }, 2000)
    })
}

getHeroeByIdAsync(5)
    .then((heroe) =>  console.log('El heroe es ', heroe.name))
    .catch(e => console.log(e))
