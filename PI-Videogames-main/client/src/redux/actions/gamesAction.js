import axios from "axios";
import {
  OBTENER_VIDEOGAMES,
  FILTER_VIDEOGAMES_BY_GENRES,
  SORTING_BY_NAME,
  RESTORE_ALL_VIDEOGAMES,
  GET_VIDEOGAME_BY_NAME,
  SET_ARRAY_MODAL,
  CAPTURE_TO_LAST_STATE,
  BACK_TO_LAST_STATE,
  CHARGE_GENRES,
} from "../action-types/actionTypes";

export function getAllVideogames() {
  return async (dispatch) => {
    try {
      const result = await axios.get("http://localhost:3001/videogames");
      console.log(result);
      return dispatch({
        type: OBTENER_VIDEOGAMES,
        payload: result.data.flat(),
      });
    } catch (err) {
      return dispatch({
        type: OBTENER_VIDEOGAMES,
        payload: err,
      });
    }
  };
}

export function chargeAllGenres() {
  return async (dispatch) => {
    const result = await axios
      .get("http://localhost:3001/genres")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
    dispatch({
      type: CHARGE_GENRES,
    });
  };
}

export function genresFilter(genres) {
  return {
    type: FILTER_VIDEOGAMES_BY_GENRES,
    payload: genres,
  };
}

export function captureToLastEstate(genres) {
  return {
    type: CAPTURE_TO_LAST_STATE,
    payload: genres,
  };
}

export function backToLastEstate(genres) {
  return {
    type: BACK_TO_LAST_STATE,
    payload: genres,
  };
}

export function sortingAtoZ(value) {
  return {
    type: SORTING_BY_NAME,
    payload: value,
  };
}

export function restoreAllVideogames() {
  return {
    type: RESTORE_ALL_VIDEOGAMES,
  };
}

export function getVideogameByName(name) {
  return async (dispatch) => {
    const result = await fetch(`http://localhost:3001/videogames/?name=${name}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
    dispatch({
      type: GET_VIDEOGAME_BY_NAME,
      payload: result,
    });
  };
}

export function setCaracteresLengthArray(boolean) {
  return {
    type: SET_ARRAY_MODAL,
    payload: boolean,
  };
}
