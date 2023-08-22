import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const [isGame, setIsGame] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/detail/${id}`).then(({ data }) => {
      if (data && data.name) {
        setIsGame(data);
      } else {
        window.alert("There are no games with this id");
      }
    });
    return () => setIsGame({});
  }, [id]);

  return (
    <div>
      {isGame.name && (
        <div>
          <div>{isGame.name}</div>
          <image src={isGame.background_image} alt={isGame.name} />
          <div>{isGame.released}</div>
          <div>{isGame.rating}</div>
          <div>{isGame.playtime}</div>
          <div>{isGame.owned}</div>
        </div>
      )}
    </div>
  );
};

export default Detail;
