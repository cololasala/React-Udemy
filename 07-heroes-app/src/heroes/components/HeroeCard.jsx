import { Link } from 'react-router-dom';

const CharactersByAlterEgo = ({characters, alter_ego}) => {
  return (alter_ego !== characters ? <p>{characters}</p> : <></>)
}

export const HeroeCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroeImg = require(`/assets/heroes-images/${id}.jpg`);

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroeImg} alt={superhero} className="card-img" />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {/* {
                (alter_ego !== characters) && <p>{characters}</p>
              } */}

              <CharactersByAlterEgo characters={characters} alter_ego={alter_ego}/> {/* esto es otra manera de hacer lo de arriba comentado */}
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>More...</Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
