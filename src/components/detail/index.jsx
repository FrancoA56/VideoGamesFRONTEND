import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";

const Detail = () => {
  const [isGame, setIsGame] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/detail/${id}`).then(({ data }) => {
      if (data && data.name) {
        setIsGame(data);
      } else {
        window.alert("There are no games with this id");
      }
    });
  }, [id]);

  return (
    <div className="general-detail">
      <div className="juego-detail">
        {isGame.name && (
          <>
            <div className="general-stats-detail">
              <div className="nombre-detail-specific">{isGame.name}</div>
              <p>Premier: {isGame.released}</p>
              <p>Rating: {isGame.rating}</p>
              <p>{isGame.playtime}hs playtime</p>
              <p>{isGame.owned} times purchased</p>
              <p>{isGame.esrb_rating}</p>
            </div>
            
              <img
                className="image-detail"
                src={isGame.background_image}
                alt={isGame.name}
              />
           
            <div className="stats-detail">
              <div className="specific-name-detail">Platforms: </div>
              <div className="specific-stats-detail">{isGame.platforms}</div>
              <div className="specific-name-detail">Genres: </div>
              <div className="specific-stats-detail">{isGame.genres}</div>
              <div className="specific-name-detail">Tags: </div>
              <div className="specific-stats-detail">{isGame.tags}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Detail;
