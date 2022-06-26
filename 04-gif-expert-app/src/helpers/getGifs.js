export const getGifs = async (category) => { // funcion para obtener imagenes de la api
    const url = `https://api.giphy.com/v1/gifs/search?api_key=qpKPPy4nYTHre7Qx7E6kTC7P5JSbeXAr&q=${encodeURI(category)}&limit=10`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    //  console.log(gifs);
    return gifs;
}