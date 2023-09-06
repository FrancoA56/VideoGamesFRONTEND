import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  addGame,
  bringGames,
  orderByName,
  orderByRating,
  orderBySales,
  orderByReleased,
  orderByEsrbRating,
  filterByGenre,
  filterByPlatform,
} from "../../Redux/actions";
import "./index.css";

const Filtros = () => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);
  const [platforms, setPlatforms] = useState(false);
  const [genres, setGenres] = useState(false);

  const bringAllGames = () => {
    setAux(!aux);
    dispatch(bringGames());
  };
  const handleName = () => {
    setAux(!aux);
    dispatch(orderByName("name"));
  };
  const handleRating = () => {
    setAux(!aux);
    dispatch(orderByRating("rating_top"));
  };
  const handleSales = () => {
    setAux(!aux);
    dispatch(orderBySales("owned"));
  };
  const handleReleased = () => {
    setAux(!aux);
    dispatch(orderByReleased("released"));
  };
  const handleESRB = () => {
    setAux(!aux);
    dispatch(orderByEsrbRating("esrb_rating"));
  };
  const handleRated = async () => {
    const { data } = await axios(`http://localhost:3001/home`);
    if (data.length) {
      return dispatch(addGame(data));
    }
  };
  const handlePlatforms = () => {
    setPlatforms(!platforms);
  };
  const handleGenres = () => {
    setGenres(!genres);
  };
  const handleFilterPlatform = async (value) => {
    setAux(!aux);
    dispatch(filterByPlatform(value));
  };
  const handleFilterGenre = async (value) => {
    setAux(!aux);
    dispatch(filterByGenre(value));
  };

  return (
    <div className="filter-container">
      <button className="botones-BRING" onClick={bringAllGames} title="Bring back all games already searched">
        Bring searched
      </button>
      <button className="botones-ADD" onClick={handleRated} title="Bring top 20 most rated games">
        Add most rated
      </button>
      <div className="nombre2">Order by...</div>
      <button className="botones-ordenamiento" onClick={handleName}>
        Name
      </button>
      <button className="botones-ordenamiento" onClick={handleRating}>
        Rating
      </button>
      <button className="botones-ordenamiento" onClick={handleSales}>
        Sales
      </button>
      <button className="botones-ordenamiento" onClick={handleReleased}>
        Released
      </button>
      <button className="botones-ordenamiento" onClick={handleESRB}>
        ESRB Rating
      </button>
      <div className="nombre2">Filter by...</div>
      <div className="ScrollableContent">
        <button
          className="container-filter-platforms"
          onClick={handlePlatforms}
        >
          Platforms
        </button>
        {platforms && (
          <>
            <button
              className="boton-filter-platforms"
              onClick={() => handleFilterPlatform("pc")}
            >
              PC
            </button>
            <button
              className="boton-filter-platforms"
              onClick={() => handleFilterPlatform("playstation")}
            >
              PlayStation
            </button>
            <button
              className="boton-filter-platforms"
              onClick={() => handleFilterPlatform("xbox")}
            >
              Xbox
            </button>
            <button
              className="boton-filter-platforms"
              onClick={() => handleFilterPlatform("android")}
            >
              Android
            </button>
          </>
        )}
        <button className="container-filter-genres" onClick={handleGenres}>
          Genres
        </button>
        {genres && (
          <>
            <button
              className="boton-filter-genres"
              onClick={() => handleFilterGenre(4)}
            >
              Action
            </button>
            <button
              className="boton-filter-genres"
              onClick={() => handleFilterGenre(51)}
            >
              Indie
            </button>
            <button
              className="boton-filter-genres"
              onClick={() => handleFilterGenre(3)}
            >
              Adventure
            </button>
            <button
              className="boton-filter-genres"
              onClick={() => handleFilterGenre(5)}
            >
              RPG
            </button>
            <button
              className="boton-filter-genres"
              onClick={() => handleFilterGenre(2)}
            >
              Shooter
            </button>
            <button
              className="boton-filter-genres"
              onClick={() => handleFilterGenre(1)}
            >
              Racing
            </button>
            <button
              className="boton-filter-genres"
              onClick={() => handleFilterGenre(15)}
            >
              Sports
            </button>
            <button
              className="boton-filter-genres"
              onClick={() => handleFilterGenre(6)}
            >
              Fighting
            </button>
            <button
              className="boton-filter-genres"
              onClick={() => handleFilterGenre(11)}
            >
              Arcade
            </button>
            <button
              className="boton-filter-genres"
              onClick={() => handleFilterGenre(17)}
            >
              Card
            </button>
            <button
              className="boton-filter-genres"
              onClick={() => handleFilterGenre(34)}
            >
              Educational
            </button>
            <button
              className="boton-filter-genres"
              onClick={() => handleFilterGenre(40)}
            >
              Casual
            </button>
            <button
              id="boton-puzzle"
              className="boton-filter-genres"
              onClick={() => handleFilterGenre(7)}
            >
              Puzzle
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Filtros;
