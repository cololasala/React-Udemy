import { NavLink, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../auth";

export const NavBar = () => {
    const navigate = useNavigate();  // parecido al router de angular
    const { user, logout } = useContext(AuthContext)
    const onLogout = () => {
        navigate('/login', {
            replace: true   // permite evitar que se pueda volver a traves de las flechas de navegacion de chrome (anda en modo incognito)
        });

        logout();
    }
  return (
    <>
         <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Heroes comics
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        className={({ isActive }) =>  {
                            return `nav-link ${isActive ? 'active' : ''}`       // solo se hizo por el curso pero en realidad con la class nav-item funciona bien si esta logica
                        }}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="d-flex justify-content-end navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">{ user?.name }</span>
                    <button className="nav-item nav-link btn" onClick={ onLogout } >Logout</button>
                </ul>
            </div>
        </nav>
    </>
  )
}
