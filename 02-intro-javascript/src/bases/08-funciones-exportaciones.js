import { heroes } from "./heroes";
import owners from "./heroes";

const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id);
}

//console.log(getHeroeById(2));

const getDCheroes = () => {
    return heroes.filter(heroe => heroe.owner = 'DC');
}

//console.log(getDCheroes())

//console.log(owners);

export default getHeroeById;