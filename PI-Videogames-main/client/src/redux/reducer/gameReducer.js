import {
  OBTENER_VIDEOGAMES,
  FILTER_VIDEOGAMES_BY_GENRES,
  SORTING_BY_NAME,
  RESTORE_ALL_VIDEOGAMES,
  GET_VIDEOGAME_BY_NAME,
  SET_ARRAY_MODAL,
  CAPTURE_TO_LAST_STATE,
  BACK_TO_LAST_STATE,
} from "../action-types/actionTypes";

const initialState = {
  mainArrayVideogames: [],
  arrayVideogames: [],
  ultimoEstado: [],
  caracteresLengthArray: false,
};

const VideogamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case OBTENER_VIDEOGAMES:
      return {
        ...state,
        mainArrayVideogames: action.payload,
        arrayVideogames: action.payload,
        // arrayVideogames: [],
        //ultimoEstado: [],
        caracteresLengthArray: false,
      };
    case FILTER_VIDEOGAMES_BY_GENRES:
      let newArray = state.mainArrayVideogames.filter((e) => {
        if (action.payload === "Back") {
          return state.mainArrayVideogames;
        } else {
          return e.genres[0].name === action.payload;
        }
      });
      if (newArray.length === 0) {
        newArray = ["No Hay Generos"];
      }
      return {
        ...state,
        arrayVideogames: newArray,
      };
    case SORTING_BY_NAME:
      let newArray2 = [];
      if (action.payload === "opcion1") {
        newArray2 = state.arrayVideogames.sort((a, b) =>
          a.name.localeCompare(b.name, "en", { sensitivity: "base" })
        );
      }
      if (action.payload === "opcion2") {
        newArray2 = state.arrayVideogames.sort((a, b) => {
          if (a.name < b.name) {
            return 1;
          } else if (a.name > b.name) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      if (action.payload === "opcion3") {
        newArray2 = state.arrayVideogames.sort((a, b) => {
          if (a.rating < b.rating) {
            return 1;
          } else if (a.rating > b.rating) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      if (action.payload === "opcion4") {
        newArray2 = state.arrayVideogames.sort((a, b) => {
          return a.rating - b.rating;
        });
      }
      return {
        ...state,
        arrayVideogames: newArray2,
      };
    case RESTORE_ALL_VIDEOGAMES:
      return {
        ...state,
        arrayVideogames: state.mainArrayVideogames,
      };
    case GET_VIDEOGAME_BY_NAME:
      let newArray3 = [];
      const regex = /No Found/;
      if (regex.test(action.payload[0])) {
        newArray3 = ["No Hay Generos"];
      } else {
        newArray3 = action.payload;
      }
      return {
        ...state,
        arrayVideogames: newArray3,
      };
    case SET_ARRAY_MODAL:
      return {
        ...state,
        caracteresLengthArray: action.payload,
      };
    case CAPTURE_TO_LAST_STATE:
      return {
        ...state,
        ultimoEstado: state.arrayVideogames,
      };
    case BACK_TO_LAST_STATE:
      return {
        ...state,
        arrayVideogames: state.ultimoEstado,
      };
    default:
      return state;
  }
};
export default VideogamesReducer;
