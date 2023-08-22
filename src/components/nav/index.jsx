import "./index.css"
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../searchBar";

const Nav = ({ onSearch }) => {
        const location = useLocation();
      
        const showSearchBar = location.pathname === "/home";
      
        return (
          <>
            <div>
              <div>
                <NavLink as={NavLink} to="/home">
                  Home
                </NavLink>
                <NavLink as={NavLink} to="/login">
                  Cerrar Sesion
                </NavLink>
              </div>
              <h1>Videogames!</h1>
              {showSearchBar && <SearchBar onSearch={onSearch} />}
            </div>
          </>
        );
};

export default Nav;