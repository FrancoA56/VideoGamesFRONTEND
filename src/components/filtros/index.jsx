import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  addGame,
  orderByName,
  orderByRating,
  orderBySales,
  orderByReleased,
  orderByEsrbRating,
} from "../../Redux/actions";
import "./index.css";

const Filtros = () => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

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
    await axios(`http://localhost:3001/home`).then(({ data }) => {
      console.log(data);
      if (data && data.name) {
        data.map((juego) => {
          return dispatch(addGame(juego));
        });
      }
    });
  };

  return (
    <div className="filter-container">
      <button className="botones2" onClick={handleRated}>
        Add most rated
      </button>
      <div className="nombre2">Order by...</div>
      <button className="botones2" onClick={handleName}>
        Name
      </button>
      <button className="botones2" onClick={handleRating}>
        Rating
      </button>
      <button className="botones2" onClick={handleSales}>
        Sales
      </button>
      <button className="botones2" onClick={handleReleased}>
        Released
      </button>
      <button className="botones2" onClick={handleESRB}>
        ESRB Rating
      </button>
    </div>
  );
};

export default Filtros;
