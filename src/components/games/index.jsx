import Game from "../game/index";
import React from "react";
import "./index.css";

export default function Games({ isGame, onClose }) {
  return (
    <div className="juego">
      {isGame.map((juegos) => {
        return (
          <div key={juegos.id}>
            <Game
              id={juegos.id}
              background_image={juegos.background_image}
              name={juegos.name}
              released={juegos.released}
              owned={juegos.owned}
              playtime={juegos.playtime}
              rating={juegos.rating}
              rating_top={juegos.rating_top}
              esrb_rating={juegos.esrb_rating}
              onClose={onClose}
            />
          </div>
        );
      })}
    </div>
  );
}
