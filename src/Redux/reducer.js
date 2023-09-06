import {
  CREATE_GAME,
  ADD_GAME,
  WIPE_OUT,
  BRING_GAMES,
  REMOVE_GAME,
  ORDER_NAME,
  ORDER_RATING,
  ORDER_OWNED,
  ORDER_RELEASED,
  ORDER_ESRB_RATING,
  FILTER_BY_GENRES,
  FILTER_BY_PLATFORMS,
} from "./types";

const initialState = {
  myGames: [],
  allMyGames: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_GAME:
      return {
        ...state,
        myGames: [...state.myGames, ...payload],
        allMyGames: [...state.allMyGames, ...payload],
      };
    case ADD_GAME:
      const iteratedGames = payload.filter((juego) => {
        return !state.myGames.some((JUEGO) => JUEGO.id === juego.id);
      });
      const iteratedAllGames = payload.filter((juego) => {
        return !state.allMyGames.some((JUEGO) => JUEGO.id === juego.id);
      });
      return {
        ...state,
        myGames: [...state.myGames, ...iteratedGames],
        allMyGames: [...state.allMyGames, ...iteratedAllGames],
      };
    case REMOVE_GAME:
      return {
        ...state,
        myGames: state.myGames.filter((game) => game.id !== payload),
      };
    case WIPE_OUT:
      return {
        ...state,
        myGames: state.myGames.filter((game) => !game),
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
      const sortedByRating = state.myGames
        .slice()
        .sort((a, b) => b.rating_top - a.rating_top);
      return {
        ...state,
        myGames: sortedByRating,
      };

    case ORDER_OWNED:
      const sortedBySales = state.myGames
        .slice()
        .sort((a, b) => b.owned - a.owned);
      return {
        ...state,
        myGames: sortedBySales,
      };

    case ORDER_RELEASED:
      const sortedByReleased = state.myGames
        .slice()
        .sort((a, b) => new Date(b.released) - new Date(a.released));
      return {
        ...state,
        myGames: sortedByReleased,
      };

    case ORDER_ESRB_RATING:
      const sortedByEsrbRating = state.myGames
        .slice()
        .sort((a, b) => a.esrb_rating.localeCompare(b.esrb_rating));
      return {
        ...state,
        myGames: sortedByEsrbRating,
      };

    case FILTER_BY_PLATFORMS:
      const filterByPlatforms = state.myGames.filter((juego) => {
        console.log(juego);

        return juego?.platforms?.includes(payload);
      });

      return {
        ...state,
        myGames: filterByPlatforms,
      };

    case FILTER_BY_GENRES:
      const filterByGenres = state.myGames.filter((juego) =>
        juego?.genreIds?.some((genre) => genre === payload)
      );

      return {
        ...state,
        myGames: filterByGenres,
      };

    case BRING_GAMES:
      const bringAllGames = state.allMyGames;
      return {
        ...state,
        myGames: bringAllGames,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
