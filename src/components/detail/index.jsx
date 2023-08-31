import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    <div className="juego">
      {isGame.name && (
        <>
          <div className="general-stats">
            <p>{isGame.name}</p>
            <p>Premier: {isGame.released}</p>
            <p>Average rating: {isGame.rating}</p>
            <p>Average playtime: {isGame.playtime}</p>
            <p>Purchased: {isGame.owned}</p>
            <p>ESRB rating: {isGame.esrb_rating}</p>
          </div>
          <div className="image-container">
            <img className="image" src={isGame.background_image} alt={isGame.name} />
          </div>
          <div className="stats">
            <p>Platforms: {isGame.platforms}</p>
            <p>Genres: {isGame.genres}</p>
            <p>Tags: {isGame.tags}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
