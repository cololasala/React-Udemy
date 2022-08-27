import React from "react";
import { Link, NavLink } from "react-router-dom";
// import "./Main.css";

export const NavBar = () => {
  /* Link o NavLink me permite cambiar el ruteo sin reinicar el navegador(como pasa con el tag <a></a>) */
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-3">
        <div className="container-fluid">
            <Link to="/">useContext</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink
                className={({ isActive }) => {
                  return `nav-link ${isActive ? "active" : ""}`;    // ponemos la clase si fue seleccionado el link
                }}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return `nav-link ${isActive ? "active" : ""}`;
                }}
                to="about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return `nav-link ${isActive ? "active" : ""}`;
                }}
                to="login"
              >
                Login
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
