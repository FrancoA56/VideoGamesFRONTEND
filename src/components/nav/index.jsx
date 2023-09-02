import "./index.css"
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../searchBar";

const Nav = ({ onSearch }) => {
        const location = useLocation();
        const showSearchBar = location.pathname === "/home";

      
        return (
          <>
            <div className="nav-container">
              <h1 className="gamescon">GamesCon!</h1>
              {showSearchBar && <SearchBar className="search-bar" onSearch={onSearch} />}
              <div className="botones">
              <NavLink className="botonAgregarJuego" as={NavLink} to="/createGame" title="Agregar Juego">
                <i id="agregar" className="material-icons">add</i>
              </NavLink>
                <NavLink className="botonHome" as={NavLink} to="/home" title="Home">
                <i id="home" className="material-icons">home</i>
                </NavLink>
                <NavLink className="botonSalir" as={NavLink} to="/login" title="Exit">
                <i id="logout" className="material-icons">logout</i>
                </NavLink>
              </div>
            </div>
          </>
        );
};

export default Nav;