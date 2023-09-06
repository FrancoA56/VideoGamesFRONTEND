import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Game = (props) => {
  const date = new Date(props.released);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString(undefined, options);
  const estrellas = (rate = props.rating_top) => {
    switch (rate) {
      case 5:
        return (
          <>
            <i id="estrellaConBorde" className="material-icons">star</i>
            <i id="estrellaConBorde" className="material-icons">star</i>
            <i id="estrellaConBorde" className="material-icons">star</i>
            <i id="estrellaConBorde" className="material-icons">star</i>
            <i id="estrellaConBorde" className="material-icons">star</i>
          </>
        );
      case 4:
        return (
          <>
            <i id="estrellaConBorde" className="material-icons">star</i>
            <i id="estrellaConBorde" className="material-icons">star</i>
            <i id="estrellaConBorde" className="material-icons">star</i>
            <i id="estrellaConBorde" className="material-icons">star</i>
            <i id="estrellaSinBorde" className="material-icons">star_border</i>
          </>
        );
      case 3:
        return (
          <>
            <i id="estrellaConBorde" className="material-icons">star</i>
            <i id="estrellaConBorde" className="material-icons">star</i>
            <i id="estrellaConBorde" className="material-icons">star</i>
            <i id="estrellaSinBorde" className="material-icons">star_border</i>{" "}
            <i id="estrellaSinBorde" className="material-icons">star_border</i>{" "}
          </>
        );
      case 2:
        return (
          <>
            <i id="estrellaConBorde" className="material-icons">star</i>
            <i id="estrellaConBorde" className="material-icons">star</i>
            <i id="estrellaSinBorde"  className="material-icons">star_border</i>
            <i id="estrellaSinBorde"  className="material-icons">star_border</i>
            <i id="estrellaSinBorde"  className="material-icons">star_border</i>
          </>
        );
      case 1:
        return (
          <>
            <i id="estrellaConBorde" className="material-icons">star</i>
            <i id="estrellaSinBorde" className="material-icons">star_border</i>
            <i id="estrellaSinBorde" className="material-icons">star_border</i>
            <i id="estrellaSinBorde" className="material-icons">star_border</i>
            <i id="estrellaSinBorde" className="material-icons">star_border</i>
          </>
        );
      default:
        break;
    }
  };
  return (
    <div className="game-card-general">
      <NavLink className="linko" to={`/detail/${props.id}`}>
        <div className="game-card">
          {props.name && (
            <>
              <div className="game-details">
                <p className="nombre">{props.name}</p>
                <p className="released">Premier: {formattedDate}</p>
                <p className="playtime">Playtime: {props.playtime} hs</p>
                <p className="esrb_rating">ESRB: {props.esrb_rating}</p>
                <div className="rating_top">{estrellas(props.rating_top)}</div>
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
      <button className="cerrar2" onClick={() => props.onClose(props.id)}>
        x
      </button>
    </div>
  );
};

export default Game;
