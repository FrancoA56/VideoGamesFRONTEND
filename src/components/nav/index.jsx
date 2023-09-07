import "./index.css"
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../searchBar";
import { wipeOut } from "../../Redux/actions";

const Nav = ({ onSearch }) => {
        const location = useLocation();
        const showSearchBar = location.pathname === "/home";
        const dispatch = useDispatch();

        const handleWipeOut = () => dispatch(wipeOut());
      
        return (
          <>
            <div className="nav-container">
              <h1 className="gamescon">GamesCon!</h1>
              {showSearchBar && <SearchBar className="search-bar" onSearch={onSearch} />}
              <div className="botones">
                <button className="botonBorrar" onClick={handleWipeOut} title="Clear search">
                <i id="borrar" className="material-icons">delete</i>
                </button>
              <NavLink className="botonAgregarJuego" as={NavLink} to="/createGame" title="Create game">
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