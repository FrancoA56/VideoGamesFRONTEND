import Game from "../game/index";
import React from "react";
import { removeGame } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";

const Games = () => {
  const dispatch = useDispatch();
  const JUEGOS = useSelector((state) => state.myGames);
  const onClose = (id) => {
    dispatch(removeGame(id));
  };
  return (
    <>
      <div className="background" />
      <div className="juego">
        {JUEGOS.map((juegos) => {
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
    </>
  );
};

export default Games;
