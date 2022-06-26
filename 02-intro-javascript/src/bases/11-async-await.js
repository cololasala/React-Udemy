const getImage = async() => { // al poner async esta funcion retorna una promise
    const api_key = 'qpKPPy4nYTHre7Qx7E6kTC7P5JSbeXAr';
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`); // espero el resultado de la promesa para abajo seguir ejecutando el codigo de manera sincronica

    const data = response.json();

    return data;
}

getImage()                      // como retorna una promise se usan then y catch 
    .then(({data}) => {
        console.log(data);
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img)
    })
    .catch( console.warm )