import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Game = (props) => {
  const date = new Date(props.released);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString(undefined, options);

  return (
    <>
      <NavLink className="linko" to={`/detail/${props.id}`}>
        <div className="game-card">
          {props.name && (
            <>
              <div className="game-details">
                <p className="nombre">{props.name}</p>
                <p className="released">Premier: {formattedDate}</p>
                <p className="playtime">Playtime: {props.playtime}</p>
                <p className="esrb_rating">ESRB: {props.esrb_rating}</p>
                <p className="rating_top">{props.rating_top}</p>
              </div>
              <div className="contenedor-imagen">
                <img
                  className="game-image"
                  src={props.background_image}
                  alt={props.name}
                />
              </div>
            </>
          )}
        </div>
      </NavLink>
      <button className="cerrar" onClick={() => props.onClose(props.id)}>
        X
      </button>
    </>
  );
};

export default Game;
