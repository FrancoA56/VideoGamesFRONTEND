import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const [isGame, setIsGame] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/detail/${id}`)
    .then(({ data }) => {
      if (data && data.name) {
        setIsGame(data);
      } else {
        window.alert("There are no games with this id");
      }
    });
  }, [id]);

  return (
    <div>
      {isGame.name && (
        <div>
          <div>{isGame.name}</div>
          <img src={isGame.background_image} alt={isGame.name} />
          <div>{isGame.released}</div>
          <div>{isGame.rating}</div>
          <div>{isGame.playtime}</div>
          <div>{isGame.owned}</div>
          <div>{isGame.esrb_rating}</div>
          <div>{isGame.platforms}</div>
          <div>{isGame.genres}</div>
          <div>{isGame.tags}</div>
        </div>
      )}
    </div>
  );
};

export default Detail;
