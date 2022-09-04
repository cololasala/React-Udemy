import { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getHeroeById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams(); // sirve para obtener los parametros desde la rutas
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroeById(id), [id]);

  const goBack = () => {
    navigate(-1); // con el navigate -1 vuelvo a la ruta anterior (esto se fija en el historial de navegacion)
  };

  if (!hero) {
    return <Navigate to="/marvel"></Navigate>;
  }

  const imgHero = require(`/assets/heroes-images/${hero.id}.jpg`);
  return (
    <div className="row mt-4 mb-3 animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img className="img-thumbnail" src={imgHero} alt={hero.superhero} />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearence:</b> {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-2">Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-primary" onClick={goBack}>
          Go back
        </button>
      </div>
    </div>
  );
};
