import React from "react";
import { NavLink } from "react-router-dom";

const Game = (props) => {
  console.log("name: ", props);
  return (
    <div>
    <NavLink to={`/detail/${props.id}`}>
      {props.name && (
        <div key={props.id}>
          <div>{props.name}</div>
          <img src={props.background_image} alt={props.name} />
          <div>{props.released}</div>
          <div>{props.rating}</div>
          <div>{props.playtime}</div>
          <div>{props.owned}</div>
          <div>{props.rating_top}</div>
          <div>{props.esrb_rating}</div>
        </div>
      )}
    </NavLink>
      <button onClick={props.onClose}>x</button>
    </div>
  );
};

export default Game;
