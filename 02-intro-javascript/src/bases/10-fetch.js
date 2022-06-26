const api_key = 'qpKPPy4nYTHre7Qx7E6kTC7P5JSbeXAr';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

/* peticion.then((res) => {
    res.json().then(data => {
        console.log(data);
    })
}) */

peticion
    .then(res => res.json()) 
    .then(({ data }) => {           // promesa en cadena
        console.log(data.images.original.url);
        const { url } = data.images.original;

        const img = document.createElement('img'); // esto es para poner la imagen en el DOM

        img.src = url;

        document.body.append(img);

    })
    .catch(console.warm)