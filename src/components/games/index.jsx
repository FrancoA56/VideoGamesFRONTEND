import Game from '../game/index';
import React from 'react';


export default function Games({isGame , onClose}) {
   console.log("Games:", isGame)
   return (
   <div>
      {isGame.map((juegos) => juegos.map((juego) =>{
         return(
            <Game
               key={juego.ID}
               id={juego.ID}
               background_image={juego.background_image}
               name={juego.name}
               released={juego.released}
               owned={juego.owned}
               playtime={juego.playtime}
               rating={juego.rating}
               rating_top={juego.rating_top}
               esrb_rating={juego.esrb_rating}
               onClose={onClose}
               />
         )
      }))}
   </div>)
}