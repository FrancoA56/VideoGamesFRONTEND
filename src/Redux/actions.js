import { CREATE_GAME,
  ADD_GAME,
  REMOVE_GAME,
  ORDER_NAME,
  ORDER_RATING,
  ORDER_OWNED,
  ORDER_RELEASED,
  ORDER_ESRB_RATING } from "./types";
import axios from "axios";

const URL = "http://localhost:3001/";

export const createGame = (juego) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`${URL}createGame`, juego);
      return dispatch({
        type: CREATE_GAME,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

export const addGame = (data) => {
  return  function (dispatch) {
    try {
      return dispatch({
        type: ADD_GAME,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

export const removeGame = (id) => {
      return {
        type: REMOVE_GAME,
        payload: id,
      };
};

export const orderByName = (name) => {
  return {
    type: ORDER_NAME,
    payload: name,
  };
};

export const orderByRating = (rating_top) => {
  return {
    type: ORDER_RATING,
    payload: rating_top,
  };
};
export const orderBySales = (owned) => {
  return {
    type: ORDER_OWNED,
    payload: owned,
  };
};
export const orderByReleased = (released) => {
  return {
    type: ORDER_RELEASED,
    payload: released,
  };
};
export const orderByEsrbRating = (esrb_rating) => {
  return {
    type: ORDER_ESRB_RATING,
    payload: esrb_rating,
  };
};
