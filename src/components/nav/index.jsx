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
                <NavLink className="botonHome" as={NavLink} to="/home">
                  Home
                </NavLink>
                <NavLink className="botonSalir" as={NavLink} to="/login">
                  Log Out
                </NavLink>
              </div>
            </div>
          </>
        );
};

export default Nav;