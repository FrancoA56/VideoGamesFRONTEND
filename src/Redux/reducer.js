import {
  CREATE_GAME,
  ADD_GAME,
  REMOVE_GAME,
  ORDER_NAME,
  ORDER_RATING,
  ORDER_OWNED,
  ORDER_RELEASED,
  ORDER_ESRB_RATING,
} from "./types";

const initialState = {
  myGames: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_GAME:
      return {
        ...state,
        myGames: [...state.myGames, ...payload],
      };
    case ADD_GAME:
      return {
        ...state,
        myGames: [...state.myGames, ...payload],
      };
    case REMOVE_GAME:
      return {
        ...state,
        myGames: state.myGames.filter((game) => game.id !== payload),
      };
    case ORDER_NAME:
      const sortedByName = state.myGames
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
      return {
        ...state,
        myGames: sortedByName,
      };

      case ORDER_RATING:
        const sortedByRating = state.myGames.slice().sort((a, b) => b.rating_top - a.rating_top);
        return {
          ...state,
          myGames: sortedByRating,
        };
      
      case ORDER_OWNED:
        const sortedBySales = state.myGames.slice().sort((a, b) => b.owned - a.owned);
        return {
          ...state,
          myGames: sortedBySales,
        };
      
      case ORDER_RELEASED:
        const sortedByReleased = state.myGames.slice().sort((a, b) => new Date(b.released) - new Date(a.released));
        return {
          ...state,
          myGames: sortedByReleased,
        };
      
      case ORDER_ESRB_RATING:
        const sortedByEsrbRating = state.myGames.slice().sort((a, b) => a.esrb_rating.localeCompare(b.esrb_rating));
        return {
          ...state,
          myGames: sortedByEsrbRating,
        };
      
    default:
      return { ...state };
  }
};

export default rootReducer;
