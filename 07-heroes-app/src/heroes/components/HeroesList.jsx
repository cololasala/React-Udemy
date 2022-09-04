import { useEffect, useState } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroeCard } from '../components/HeroeCard';

export const HeroesList = ({ publisher }) => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    setHeroes(getHeroesByPublisher(publisher));
  }, [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 mb-3 animate__animated animate__fadeIn">
      {heroes.map((heroe) => {
        return <HeroeCard key={heroe.id} {...heroe}/>  // al usar el spread operator es como pasar todas las properties individuales del objeto heroe
      })}
    </div>
  );
};
