import { HeroeCard } from "../components/HeroeCard";
import { useForm } from "../../hooks";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation(); // obtiene info de la ruta actual
  const { q = "" } = queryString.parse(location.search); // desestructuro "q" y si no lo tengo entonces por defecto pongo comillas vacias
  const heroes = getHeroesByName(q);
  const { textSearch, formState, onInputChange, onResetForm } = useForm({
    textSearch: q,
  });
  const showSearch = q.length === 0;
  const showError = q.length !== 0 && heroes.length === 0;

  const submitForm = (event) => {
    event.preventDefault();

    navigate(`?q=${textSearch}`);

    // console.log(formState);
    // console.log(textSearch);
  };

  return (
    <>
      <h1>Search a hero</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={submitForm}>
            <input
              className="form-control mb-2"
              placeholder="search by name..."
              type="text"
              name="textSearch"
              value={textSearch}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary float-end">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* Esta es una manera de manejar las alerts, con logica directamente */}
          {/* {q === "" ? (
            <div
              className="alert alert-primary animate__animated animate__fadeIn"
              style={{ display: showSearch ? "" : "none" }}
            >
              Search a hero
            </div>
          ) : (
            heroes.length === 0 && (
              <div
                className="alert alert-danger animate__animated animate__fadeIn"
                style={{ display: showError ? "" : "none" }}
              >
                No results for <b>{q}</b>
              </div>
            )
          )} */}

          {/* Esta es otra manera de manejar las alerts, usando style display */}
          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>
          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            No results for <b>{q}</b>
          </div>

          {heroes.map((hero) => {
            return <HeroeCard key={hero.id} {...hero} />;
          })}
        </div>
      </div>
    </>
  );
};
